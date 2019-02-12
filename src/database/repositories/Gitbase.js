import _ from 'lodash';
import * as Promise from 'bluebird';
import IOL from './IOL';
import debug from 'debug';
import Env from '../../config/environment'

const logger = debug('app:repositories');

const octokit = require('@octokit/rest')();

export default class Gitbase {
  constructor({ email, usernames, repositories }) {
    this.email = email;
    this.usernames = usernames;
    this.repositories= repositories
  }

  async initialize() {
    // Authenticate the Github requests.
    octokit.authenticate({ type: 'oauth', token: Env.GITHUB_TOKEN });

    logger(this.usernames);

    // Fetch all the commits from all related repositories
    this.commits = await Promise.map(this.repositories, async repo => {
      const repo_breakdown = repo.split('/')
        .filter(elem => elem.trim() !== '' && elem.trim() !== 'https:' && elem.trim() !== 'github.com');

      // For each username fetch all the commits
      const response = await Promise.map(this.usernames, async username => {
        const raw_response = await octokit.repos.listCommits({ owner: repo_breakdown[0], repo: repo_breakdown[1], author: username });
        return raw_response.data
      });

      const commit_hashes = _.uniq(_.flattenDeep(response).map(commit => commit.sha));

      logger(`Gitbase: (${this.email}) got ${commit_hashes.length} commits authored on the ${repo_breakdown[1]} github repo by ${this.email}`);

      return await Promise.map(commit_hashes, async sha => {
        const response = await octokit.repos.getCommit({owner: repo_breakdown[0], repo: repo_breakdown[1], sha});

        return response.data;
      });
    });

    this.commits = _.flattenDeep(this.commits);

    logger(`Gitbase: (${this.email}) got a total of ${this.commits.length} commits authored by ${this.email} from Github`);
  }

  get IOL() {
    return new IOL(this.commits);
  }
}

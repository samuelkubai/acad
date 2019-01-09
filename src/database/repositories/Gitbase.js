import _ from 'lodash';
import * as Promise from 'bluebird';
import IOL from './IOL';
import debug from 'debug';
import Env from '../../config/environment'

const logger = debug('app:repositories');

const octokit = require('@octokit/rest')();
const owner = `andela`;
const repos = ['travel_tool_back', 'travel_tool_front'];

export default class Gitbase {
  constructor({ email, usernames }) {
    this.email = email;
    this.usernames = usernames;
  }

  async initialize() {
    // Authenticate the Github requests.
    octokit.authenticate({ type: 'oauth', token: Env.GITHUB_TOKEN });

    logger(this.usernames);

    // Fetch all the commits from all related repositories
    this.commits = await Promise.map(repos, async repo => {
      // For each username fetch all the commits
      const response = await Promise.map(this.usernames, async username => {
        const raw_response = await octokit.repos.listCommits({ owner, repo, author: username });
        return raw_response.data
      });

      const commit_hashes = _.uniq(_.flattenDeep(response).map(commit => commit.sha));

      logger(`Gitbase: (${this.email}) got ${commit_hashes.length} commits authored on the ${repo} github repo by ${this.email}`);

      return await Promise.map(commit_hashes, async sha => {
        const response = await octokit.repos.getCommit({owner, repo, sha});

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

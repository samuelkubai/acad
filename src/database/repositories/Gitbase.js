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
  constructor({ username }) {
    this.username = username;
  }

  async initialize() {
    // Authenticate the Github requests.
    octokit.authenticate({ type: 'oauth', token: Env.GITHUB_TOKEN });

    // Fetch all the commits from all related repositories
    this.commits = await Promise.map(repos, async repo => {
      const response = await octokit.repos.listCommits({ owner, repo, author: this.username });

      logger(`Gitbase: (${this.username}) got ${response.data.length} commits authored on the ${repo} github repo by ${this.username}`);

      const commit_hashes = _.flattenDeep(response.data).map(commit => commit.sha);

      return await Promise.map(commit_hashes, async sha => {
        const response = await octokit.repos.getCommit({owner, repo, sha});

        return response.data;
      });
    });

    this.commits = _.flattenDeep(this.commits);

    logger(`Gitbase: (${this.username}) got a total of ${this.commits.length} commits authored by ${this.username} from Github`);
  }

  get IOL() {
    return new IOL(this.commits);
  }
}

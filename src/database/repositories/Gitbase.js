import _ from 'lodash';
import * as Promise from 'bluebird';
import IOL from './IOL';
import debug from 'debug';

const logger = debug('app:repositories');

const octokit = require('@octokit/rest')();
const owner = `andela`;
const repos = ['travel_tool_back', 'travel_tool_front'];

export default class Gitbase {
  constructor({ username }) {
    this.username = username;
  }

  async initialize() {
    this.commits = [];
    this.commit_hashes = [];

    // Authenticate the Github requests.
    octokit.authenticate({ type: 'oauth', token: '3d0b7dd97e04a22e7ad139d4c4dd1b8f80783168' });

    // Fetch all the commits from all related repositories
    this.commits = await Promise.map(repos, async repo => {
      const response = await octokit.repos.listCommits({ owner, repo, author: this.username });

      logger(`Gitbase: (${this.username}) got ${response.data.length} commits authored on the ${repo} github repo by ${this.username}`);

      return response.data;
    });

    this.commits = _.flattenDeep(this.commits);
    this.commit_hashes = this.commits.map(commit => commit.sha);

    logger(`Gitbase: (${this.username}) got a total of ${this.commit_hashes.length} commits authored by ${this.username} from Github`);
  }

  get IOL() {
    return new IOL(this.commit_hashes);
  }
}

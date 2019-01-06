import _ from "lodash";
import Models from "../models";
import moment from "moment/moment";
import * as Promise from "bluebird";
import debug from "debug";
import Cache from "../../services/Cache";

const logger = debug('app:repositories');
const error = debug('app:error');

export default class IOL {
  constructor(commit_hashes) {
    this.commit_hashes = commit_hashes;
    this.cache = new Cache();
  }

  async all(username) {
    // Fetch the all the appropriate skills; with stack and target
    const skills = await Models.Skill.findAll({
      include: [
        {
          as: 'stack',
          model: Models.Stack
        },
        {
          as: 'targets',
          model: Models.Target
        }
      ]
    });

    logger(`IOL: (${username}) fetched ${skills.length} related skill(s)`);

    // Fetch the number of IOL for each skill
    return await Promise.map(skills, async skill => {
      let iol = [];

      try {

        iol = await this.findByRegex(skill.regex);
        logger(`IOL: (${username}) Retrieved ${iol[0].length} instances of learning for ${skill.label}`);

      } catch (e) {
        error(`IOL: (${username}) Error occurred while fetching instances of learning for ${skill.label}\nReason: ${e.message}\n`);
      }

      return {
        id: skill.id,
        title: skill.label,
        "skill-icon": skill.stack.icon,
        target: skill.targets.length > 0 ? skill.targets[0].target : 0,
        value: iol.length > 0 ? iol[0].length : 0
      }
    }, { concurrency: 10 });
  }

  async findByRegex(regex) {
    const fetchIOLQuery = `
      SELECT commits.commit_hash, commit_files.file_path FROM commits 
      INNER JOIN commit_files ON commits.commit_hash = commit_files.commit_hash 
      WHERE 
        commits.commit_hash IN ('${_.join(this.commit_hashes, "', '")}') 
      AND 
        commit_files.file_path REGEXP '${regex}';
    `;

    return await this.cache.queryProxy(fetchIOLQuery, { models: Models.Commit });
  }

  async timeline(username) {
    const fetchIOLTimelineQuery = `
      SELECT COUNT(commit_files.file_path) as occurrences, commits.committer_when as date FROM commits 
      INNER JOIN 
        commit_files ON commits.commit_hash = commit_files.commit_hash 
      WHERE 
        commits.commit_hash IN ('${_.join(this.commit_hashes, "', '")}') 
      GROUP BY commits.committer_when;
    `;

    const occurrences =  await this.cache.queryProxy(fetchIOLTimelineQuery, { type: Models.connections.gitbase.QueryTypes.SELECT });

    logger(`IOL: (${username}) got ${occurrences.length} individual occurrences`);

    const occurrencesMap = {};
    const timeline = [];

    occurrences.forEach(occurence => {
      const previousOccurrences = occurrencesMap[moment(occurence.date).format('YYYY-MM-DD')] ? occurrencesMap[moment(occurence.date).format('YYYY-MM-DD')] : 0;
      occurrencesMap[moment(occurence.date).format('YYYY-MM-DD')] = previousOccurrences + occurence.occurrences
    });

    for (let date in occurrencesMap) {
      if (occurrencesMap.hasOwnProperty(date)){
        timeline.push([date, occurrencesMap[date]])
      }
    }

    logger(`IOL: (${username}) got ${timeline.length} data points for the timeline`);

    return timeline;
  }
}

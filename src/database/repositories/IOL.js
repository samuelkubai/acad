import _ from "lodash";
import Models from "../models";
import moment from "moment/moment";
import * as Promise from "bluebird";
import debug from "debug";

const logger = debug('app:repositories');
const error = debug('app:error');

export default class IOL {
  constructor(commits) {
    this.commits = _.flattenDeep(commits);
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
        iol = this.findByRegex(skill.regex);
        logger(`IOL: (${username}) Retrieved ${iol.length} instances of learning for ${skill.label} using the regex ${skill.regex}`);

      } catch (e) {
        error(`IOL: (${username}) Error occurred while fetching instances of learning for ${skill.label}\nReason: ${e.message}\n`);
      }

      return {
        id: skill.id,
        title: skill.label,
        "skill-icon": skill.stack.icon,
        target: skill.targets.length > 0 ? skill.targets[0].target : 0,
        value: iol.length
      }
    }, { concurrency: 10 });
  }

  findByRegex(regex) {
    // Check the regex against all the files associated with the selected commits.
    return this.commits.reduce((matchedFiles, commit) => {
      return _.concat(matchedFiles, commit.files.filter(file => {
        return file.filename.search((new RegExp(regex))) !== -1;
      }))
    }, []);
  }

  async timeline(username) {
    const occurrencesMap = {};
    const timeline = [];


    this.commits.forEach(commit => {
      const previousOccurrences = occurrencesMap[moment(commit.commit.author.date).format('YYYY-MM-DD')] ? occurrencesMap[moment(commit.commit.author.date).format('YYYY-MM-DD')] : 0;
      occurrencesMap[moment(commit.commit.author.date).format('YYYY-MM-DD')] = previousOccurrences + commit.files.length
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

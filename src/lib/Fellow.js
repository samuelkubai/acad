import axios from 'axios';
import debug from "debug";
import env from "../config/environment";
import Gitbase from "../database/repositories/Gitbase";
import moment from "moment/moment";

const logger = debug("app:lib");
const error = debug("app:error");

export default class Fellow {
  constructor(fellow) {
    this.fellow = fellow;

    // Calculate the amount of time the user has stayed in their current phase
    this.fellow['weeksInLatestPhase'] = moment().diff(moment(this.fellow.phases[0].UserPhase.started_on), 'weeks');
    this.fellow['durationInLatestPhase'] = this.fellow.phases[0].duration;
    logger(`Fellow: (${this.fellow.email}) has stayed in ${this.fellow.phases[0].name} for ${this.fellow.weeksInLatestPhase} weeks`);
  }

  async refreshStats() {
    const gitbase = new Gitbase({ email: this.fellow.email, usernames: this.fellow.gh_accounts.map(account => account.username) });
    await gitbase.initialize();

    this.iols = await gitbase.IOL.all(this.fellow.email);
  }

  get skillsMastered() {
    let masteredSkills = 0;

    this.iols.forEach(point => {
      if (point.value !== 0 && point.value >= point.target) {
        masteredSkills += 1;
      }
    });

    return masteredSkills;
  }

  get readiness() {
    let readySkills = 0;

    this.iols.forEach(point => {
      if ((point.value/point.target) >= 0.75) {
        readySkills += 1;
      }
    });

    return ((readySkills/this.skills_length)*100).toFixed(0);
  }

  get velocity () {
    let totalIOL = 0;

    this.iols.forEach(point => {
      totalIOL += point.value;
    });

   return Math.floor(totalIOL/this.weeks);
  }

  get skills_length () {
    return this.iols.length;
  }

  get weeks () {
    if (this.fellow.weeksInLatestPhase > this.fellow.durationInLatestPhase) {
      return this.fellow.durationInLatestPhase;
    }
    return this.fellow.weeksInLatestPhase;
  }

  get phase () {
    return Math.ceil(this.weeks/4)
  }

  get status () {
    if (this.readiness === 100) {
      return `ready`;
    }

    const expectedReadiness = (this.weeks/this.fellow.durationInLatestPhase) * 100;

    if (this.readiness >= expectedReadiness) return `on-track`;

    return `off-track`
  }

  static async fellowFromAndelaAPI(email, config) {
    try {
      const response = await axios.get(`${env.ANDELA_API}/users?email=${email}`, { headers: { 'Authorization': `Bearer ${config.token}` }});

      return {
        data: response.data.values[0],
        message: `User successfully fetched`,
        success: true,
        meta: {
          users_count: response.data.values.length
        }
      };
    } catch (e) {
      error(`Fellow: Andela API threw the error :=> ${e.message}`);

      return {
        data: null,
        message: e.message,
        success: false
      }
    }
  }
}

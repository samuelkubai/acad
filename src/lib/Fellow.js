import debug from "debug";
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
    const gitbase = new Gitbase({ username: this.fellow.username });
    await gitbase.initialize();

    this.iols = await gitbase.IOL.all(this.fellow.username);
  }

  get skillsMastered() {
    // Attain the level of skill mastery for a fellow.
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
}

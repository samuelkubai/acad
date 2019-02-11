import debug from "debug";
import Models from '../../database/models';

const logger = debug("app:controllers");
const error = debug("app:error");

class TeamsController {
  static async getTeams(req, res) {
    const teams = await await Models.Team.findAll();

    res.status(200)
      .json({
        data: {
          teams
        },
        meta: {
          count: teams.length
        }
      });



  }
}

export default TeamsController;

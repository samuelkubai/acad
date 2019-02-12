import * as Promise from "bluebird";
import debug from "debug";
import Models from '../../database/models';
import shortid from "shortid";
import slugify from 'slugify';

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

  static async createTeam(req, res) {
    const team = await Models.Team.create({
      id: shortid.generate(),
      name: req.body.name,
      slug: slugify(req.body.name),
      logo: ''
    });

    const repositories = await Promise.map(req.body.repositories, async repository => {
      return await Models.Repository.create({
        id: shortid.generate(),
        url: repository,
        team_id: team.id
      });
    });

    res.json({
      data: {
        team: {
          ...team.dataValues,
          repositories: repositories
        }
      },
      meta: {
        repositories_count: repositories.length
      }
    })
  }
}

export default TeamsController;

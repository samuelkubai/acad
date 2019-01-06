import debug from "debug";
import Models from '../../database/models';
import * as Promise from "bluebird";
import Fellow from "../../lib/Fellow";

const logger = debug("app:controllers");
const error = debug("app:error");

class UsersController {
  static async getUsers(req, res) {
    const team_slug = req.query.team;
    const user = req.meta.user.UserInfo;

    const team = await Models.Team.findOne({
      where: {
        slug: team_slug
      }
    });

    if (!team) {
      error(`UsersController: (${user.email}) could not fetch the team: ${team_slug}`);

      res.status(404)
        .json({
          data: {
            message: 'Could not find the team defined'
          },
          meta: {
            count: 0
          }
        });
    }

    logger(`UsersController: (${user.email}) successfully fetched ${team.name}`);

    const users = await Models.User.findAll({
      where: {
        team_id: team.id
      },
      include: [
        {
          as: 'team',
          model: Models.Team
        },
        {
          as: 'phases',
          model: Models.Phase
        }
      ]
    });

    logger(`UsersController: (${user.email}) successfully fetched ${users.length} users for ${team.name}`);

    // Build the response object
    const userResponse = await Promise.map(users, async user => {
      const fellow = new Fellow(user);
      await fellow.refreshStats();

      return {
        name: user.name,
        phase: fellow.phase,
        picture: user.profile_picture,
        readiness: `${fellow.readiness}%`,
        velocity: `${fellow.velocity}/wk`,
        skills: `${fellow.skillsMastered}/${fellow.skills_length}`,
        team: user.team.name,
        status: fellow.status,
        username: user.username
      }
    }, { concurrency: 1 });

    res.status(200)
      .json({
        data: {
          users: userResponse
        },
        meta: {
          count: users.length
        }
      });
  }
}

export default UsersController;

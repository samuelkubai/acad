import * as Promise from "bluebird";
import debug from "debug";
import shortid from "shortid";
import Models from '../../database/models';
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
        },
        {
          as: 'gh_accounts',
          model: Models.GHAccount
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
        raw_velocity: fellow.velocity,
        velocity: `${fellow.velocity}/wk`,
        skills: `${fellow.skillsMastered}/${fellow.skills_length}`,
        team: user.team.name,
        status: fellow.status,
        email: user.email
      }
    }, { concurrency: 1 });

    // Build the team stats
    const teamStats = {
      ready_fellows: 0,
      fellows_on_track: 0,
      team_total_velocity: 0
    };

    userResponse.map(user => {
      if (user.status === 'ready' || user.status === 'on-track') {
        teamStats.fellows_on_track += 1;

        if (user.status === 'ready') {
          teamStats.ready_fellows += 1;
        }
      }

      teamStats.team_total_velocity += user.raw_velocity;
    });

    res.status(200)
      .json({
        data: {
          users: userResponse,
          team_stats: teamStats
        },
        meta: {
          count: users.length
        }
      });
  }

  static async inviteUser (req, res) {
    const team = await Models.Team.findOne({
      where: {
        slug: req.params.team
      }
    });

    const response = await Fellow.fellowFromAndelaAPI(req.body.email, { token: req.meta.token });

    if (!response.success) {
      res
        .status(424)
        .send({
        data: null,
        message: 'Failed to fetch fellow information from the Andela API',
        meta: {
          error: {
            message: response.message
          }
        }
      });

      return;
    }

    const invited_user = await Models.User.create({
      id: shortid.generate(),
      name: response.data.name,
      email: response.data.email,
      andela_id: response.data.id,
      team_id: team.id,
      profile_picture: response.data.picture
    });

    // Assign a phase to the user
    const user_phase = await Models.UserPhase.create({
      user_id: invited_user.id,
      phase_id: req.body.phase,
      started_on: Date.now()
    });

    // Attach all provided Github accounts to the user.
    const gh_accounts = await Promise.map(req.body.usernames, async username => {
      return await Models.GHAccount.create({
        id: shortid.generate(),
        username: username,
        email: username,
        user_id: invited_user.id
      });
    });


    res
      .status(201)
      .send({
        data: {
          ...invited_user.dataValues,
          user_phase,
          gh_accounts
        },
        message: `Successfully invited the new user`,
        meta:{
          count: 1,
          email: req.body.email,
          team: req.params.team
        }
      });
  }
}

export default UsersController;

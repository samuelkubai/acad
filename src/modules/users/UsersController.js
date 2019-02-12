import * as Promise from "bluebird";
import debug from "debug";
import shortid from "shortid";
import Models from '../../database/models';
import Fellow from "../../lib/Fellow";

const logger = debug("app:controllers");
const error = debug("app:error");

class UsersController {
  static async getUsers(req, res) {
    // TODO: Remove dummy payload for ease of development
    // res.status(200)
    //   .json({
    //     "data": {
    //       "users": [
    //         {
    //           "name": "Samson Negedu",
    //           "phase": 3,
    //           "picture": "https://lh4.googleusercontent.com/-MCWylcvnkPE/AAAAAAAAAAI/AAAAAAAAAAA/AGDgw-j_Ixh3wWfR7OMIUfmMNzGOfvPA2Q/mo/photo.jpg?sz=50",
    //           "readiness": "64%",
    //           "raw_velocity": 22,
    //           "velocity": "22/wk",
    //           "skills": "18/28",
    //           "team": "Travela",
    //           "status": "off-track",
    //           "email": "samson.negedu@andela.com"
    //         },
    //         {
    //           "name": "Stephen Aribaba",
    //           "phase": 3,
    //           "picture": "https://lh4.googleusercontent.com/-gL1hNyo--WE/AAAAAAAAAAI/AAAAAAAAABE/CY4uVZFAaaU/photo.jpg?sz=50",
    //           "readiness": "64%",
    //           "raw_velocity": 27,
    //           "velocity": "27/wk",
    //           "skills": "18/28",
    //           "team": "Travela",
    //           "status": "off-track",
    //           "email": "stephen.aribaba@andela.com"
    //         },
    //         {
    //           "name": "John Mutuma",
    //           "phase": 3,
    //           "picture": "https://lh5.googleusercontent.com/-fPdDPL5C1HQ/AAAAAAAAAAI/AAAAAAAAAA0/BQmNtL3fd9c/photo.jpg?sz=50",
    //           "readiness": "75%",
    //           "raw_velocity": 50,
    //           "velocity": "50/wk",
    //           "skills": "21/28",
    //           "team": "Travela",
    //           "status": "off-track",
    //           "email": "john.mutuma@andela.com"
    //         },
    //         {
    //           "name": "Ademola Ariya",
    //           "phase": 3,
    //           "picture": "https://lh5.googleusercontent.com/-zlpT4ktGXoI/AAAAAAAAAAI/AAAAAAAAAAA/AGDgw-jtnFZbXXqBLFlbJCJqKK5-eaQVLw/mo/photo.jpg?sz=50",
    //           "readiness": "86%",
    //           "raw_velocity": 41,
    //           "velocity": "41/wk",
    //           "skills": "23/28",
    //           "team": "Travela",
    //           "status": "off-track",
    //           "email": "ademola.ariya@andela.com"
    //         },
    //         {
    //           "name": "Dave Njeru",
    //           "phase": 3,
    //           "picture": "https://lh3.googleusercontent.com/-rMPAg17z4Fk/AAAAAAAAAAI/AAAAAAAAABI/yBuKxOVxk3Y/photo.jpg?sz=50",
    //           "readiness": "25%",
    //           "raw_velocity": 10,
    //           "velocity": "10/wk",
    //           "skills": "7/28",
    //           "team": "Travela",
    //           "status": "off-track",
    //           "email": "dave.njeru@andela.com"
    //         },
    //         {
    //           "name": "Janet Wairimu",
    //           "phase": 3,
    //           "picture": "https://lh4.googleusercontent.com/-y6Mts6_3dJ0/AAAAAAAAAAI/AAAAAAAAAAA/AKxrwcYAr6NDfv04D-JIbSipDQxCYICYog/mo/photo.jpg?sz=50",
    //           "readiness": "21%",
    //           "raw_velocity": 7,
    //           "velocity": "7/wk",
    //           "skills": "6/28",
    //           "team": "Travela",
    //           "status": "off-track",
    //           "email": "janet.wairimu@andela.com"
    //         },
    //         {
    //           "name": "Rachael Asami",
    //           "phase": 3,
    //           "picture": "https://lh5.googleusercontent.com/-PzU4-zImXEI/AAAAAAAAAAI/AAAAAAAAAAA/AKxrwcZHzDpBwRLf_gsmPNJ5ynV53rvHMQ/mo/photo.jpg?sz=50",
    //           "readiness": "57%",
    //           "raw_velocity": 19,
    //           "velocity": "19/wk",
    //           "skills": "14/28",
    //           "team": "Travela",
    //           "status": "off-track",
    //           "email": "rachael.asami@andela.com"
    //         },
    //         {
    //           "name": "Dennis Wanjiru",
    //           "phase": 3,
    //           "picture": "https://lh5.googleusercontent.com/-V6XNf3iCNvo/AAAAAAAAAAI/AAAAAAAAAAc/8GGsfiPhTlc/photo.jpg?sz=50",
    //           "readiness": "43%",
    //           "raw_velocity": 35,
    //           "velocity": "35/wk",
    //           "skills": "10/28",
    //           "team": "Travela",
    //           "status": "off-track",
    //           "email": "dennis.wanjiru@andela.com"
    //         },
    //         {
    //           "name": "Michael Nthiwa",
    //           "phase": 3,
    //           "picture": "https://lh4.googleusercontent.com/-ZtUrHG2pIQI/AAAAAAAAAAI/AAAAAAAAAAA/AKxrwcaXLLvZvCrF8SU4hNFn9ona5GobCw/mo/photo.jpg?sz=50",
    //           "readiness": "54%",
    //           "raw_velocity": 26,
    //           "velocity": "26/wk",
    //           "skills": "15/28",
    //           "team": "Travela",
    //           "status": "off-track",
    //           "email": "michael.nthiwa@andela.com"
    //         },
    //         {
    //           "name": "Victor Ugwueze",
    //           "phase": 3,
    //           "picture": "https://lh5.googleusercontent.com/-fMXOfGe2Kbg/AAAAAAAAAAI/AAAAAAAAAAg/WSHGhev9ZNQ/photo.jpg?sz=50",
    //           "readiness": "50%",
    //           "raw_velocity": 21,
    //           "velocity": "21/wk",
    //           "skills": "11/28",
    //           "team": "Travela",
    //           "status": "off-track",
    //           "email": "victor.ugwueze@andela.com"
    //         },
    //         {
    //           "name": "Chisom Obuladike",
    //           "phase": 3,
    //           "picture": "https://lh3.googleusercontent.com/-VPaFgQjET08/AAAAAAAAAAI/AAAAAAAAAAA/AKxrwcaSiBbMxqK-jkO5SunC_Tvsx0i-yw/mo/photo.jpg?sz=50",
    //           "readiness": "54%",
    //           "raw_velocity": 30,
    //           "velocity": "30/wk",
    //           "skills": "13/28",
    //           "team": "Travela",
    //           "status": "off-track",
    //           "email": "chisom.obuladike@andela.com"
    //         },
    //         {
    //           "name": "Moses Gitau",
    //           "phase": 3,
    //           "picture": "https://lh6.googleusercontent.com/-hHPqXkzi9LE/AAAAAAAAAAI/AAAAAAAAAAc/nBLhFcMdzkQ/photo.jpg?sz=50",
    //           "readiness": "54%",
    //           "raw_velocity": 39,
    //           "velocity": "39/wk",
    //           "skills": "14/28",
    //           "team": "Travela",
    //           "status": "off-track",
    //           "email": "moses.gitau@andela.com"
    //         },
    //         {
    //           "name": "Moffat Gitau",
    //           "phase": 3,
    //           "picture": "https://lh3.googleusercontent.com/-GndNwsNM0HI/AAAAAAAAAAI/AAAAAAAAAAc/0kPTNBhCkXU/photo.jpg?sz=50",
    //           "readiness": "36%",
    //           "raw_velocity": 18,
    //           "velocity": "18/wk",
    //           "skills": "9/28",
    //           "team": "Travela",
    //           "status": "off-track",
    //           "email": "moffat.gitau@andela.com"
    //         },
    //         {
    //           "name": "William Sserubiri",
    //           "phase": 3,
    //           "picture": "https://lh6.googleusercontent.com/-JznmEmIIMek/AAAAAAAAAAI/AAAAAAAAAAc/KBISMb5Pa1E/photo.jpg?sz=50",
    //           "readiness": "21%",
    //           "raw_velocity": 8,
    //           "velocity": "8/wk",
    //           "skills": "6/28",
    //           "team": "Travela",
    //           "status": "off-track",
    //           "email": "william.sserubiri@andela.com"
    //         },
    //         {
    //           "name": "Ronald Ndirangu",
    //           "phase": 3,
    //           "picture": "https://lh6.googleusercontent.com/--MWn6ZsbsqY/AAAAAAAAAAI/AAAAAAAAAAw/IDxtzW5nRwM/photo.jpg?sz=50",
    //           "readiness": "54%",
    //           "raw_velocity": 18,
    //           "velocity": "18/wk",
    //           "skills": "14/28",
    //           "team": "Travela",
    //           "status": "off-track",
    //           "email": "ronald.ndirangu@andela.com"
    //         },
    //         {
    //           "name": "Emeka Chinedu",
    //           "phase": 3,
    //           "picture": "https://lh3.googleusercontent.com/-gBMYxLL0iEY/AAAAAAAAAAI/AAAAAAAAACw/bwMfUN4B2Bw/photo.jpg?sz=50",
    //           "readiness": "71%",
    //           "raw_velocity": 31,
    //           "velocity": "31/wk",
    //           "skills": "18/28",
    //           "team": "Travela",
    //           "status": "off-track",
    //           "email": "emeka.chinedu@andela.com"
    //         },
    //         {
    //           "name": "Celestine Ekoh-Ordan",
    //           "phase": 3,
    //           "picture": "https://lh5.googleusercontent.com/-xk0tlwMiYU8/AAAAAAAAAAI/AAAAAAAAAAc/UsqgiaqPwNE/photo.jpg?sz=50",
    //           "readiness": "61%",
    //           "raw_velocity": 17,
    //           "velocity": "17/wk",
    //           "skills": "14/28",
    //           "team": "Travela",
    //           "status": "off-track",
    //           "email": "celestine.ekoh-ordan@andela.com"
    //         },
    //         {
    //           "name": "Kevin Koech",
    //           "phase": 3,
    //           "picture": "https://lh6.googleusercontent.com/-gqegbA4lDbw/AAAAAAAAAAI/AAAAAAAAAAc/_ENwek7Tv4U/photo.jpg?sz=50",
    //           "readiness": "50%",
    //           "raw_velocity": 15,
    //           "velocity": "15/wk",
    //           "skills": "13/28",
    //           "team": "Travela",
    //           "status": "off-track",
    //           "email": "kevin.koech@andela.com"
    //         },
    //         {
    //           "name": "David Muhanguzi",
    //           "phase": 3,
    //           "picture": "https://lh4.googleusercontent.com/-69ENY331AQw/AAAAAAAAAAI/AAAAAAAAAAA/AKxrwcbm4kgf2c98C9dOmNliyJmVG-igPw/mo/photo.jpg?sz=50",
    //           "readiness": "43%",
    //           "raw_velocity": 23,
    //           "velocity": "23/wk",
    //           "skills": "11/28",
    //           "team": "Travela",
    //           "status": "off-track",
    //           "email": "david.muhanguzi@andela.com"
    //         },
    //         {
    //           "name": "Adeniyi Adeyokunnu",
    //           "phase": 3,
    //           "picture": "https://lh3.googleusercontent.com/-RQgXVd3Fn50/AAAAAAAAAAI/AAAAAAAAAAg/hNrC_g7uNCw/photo.jpg?sz=50",
    //           "readiness": "50%",
    //           "raw_velocity": 23,
    //           "velocity": "23/wk",
    //           "skills": "12/28",
    //           "team": "Travela",
    //           "status": "off-track",
    //           "email": "adeniyi.adeyokunnu@andela.com"
    //         },
    //         {
    //           "name": "Samuel Kubai",
    //           "phase": 1,
    //           "picture": "https://lh6.googleusercontent.com/-pbunDpOqvmU/AAAAAAAAAAI/AAAAAAAAAAc/NQfWbn0fLn4/photo.jpg?sz=50",
    //           "readiness": "71%",
    //           "raw_velocity": 319,
    //           "velocity": "319/wk",
    //           "skills": "18/28",
    //           "team": "Travela",
    //           "status": "on-track",
    //           "email": "samuel.kubai@andela.com"
    //         },
    //         {
    //           "name": "Hope Uwa",
    //           "phase": 1,
    //           "picture": "https://lh5.googleusercontent.com/-cSAPvfr-hzE/AAAAAAAAAAI/AAAAAAAAABE/9RFFEW8gqxk/photo.jpg?sz=50",
    //           "readiness": "29%",
    //           "raw_velocity": 90,
    //           "velocity": "90/wk",
    //           "skills": "8/28",
    //           "team": "Travela",
    //           "status": "on-track",
    //           "email": "hope.uwa@andela.com"
    //         }
    //       ],
    //       "team_stats": {
    //         "ready_fellows": 0,
    //         "fellows_on_track": 2,
    //         "team_total_velocity": 889
    //       }
    //     },
    //     "meta": {
    //       "count": 22
    //     }
    //   });
    //
    // return;

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
          model: Models.Team,
          include: [
            {
              as: 'repositories',
              model: Models.Repository
            }
          ]
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

    const user_object = await Models.User.findOne({
      where: {
        id: invited_user.id
      },
      include: [
        {
          as: 'team',
          model: Models.Team,
          include: [
            {
              as: 'repositories',
              model: Models.Repository
            }
          ]
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

    const fellow = new Fellow(user_object);
    await fellow.refreshStats();

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
          phase: fellow.phase,
          status: fellow.status,
          team: req.params.team
        }
      });
  }
}

export default UsersController;

import Models from '../../database/models';
import debug from 'debug';
import Gitbase from "../../database/repositories/Gitbase";

const logger = debug("app:controllers");

class VelocityController {
  static async getFellowVelocityBreakdown(req, res) {
    const fellow = await Models.User.findOne({
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
      ],
      where: { email:  req.query.email }
    });

    logger(`VelocityController: (${fellow.email}) picked up the fellow ${fellow.name}`);

    const gitbase = new Gitbase({
      email: fellow.email,
      repositories: fellow.team.repositories.map(repository => repository.url),
      usernames: fellow.gh_accounts.map(account => account.username)
    });
    await gitbase.initialize();

    const [stacks, feed] = await Promise.all([
      Models.Stack.findAll(),
      gitbase.IOL.all(fellow.email)
    ]);

    // NOTE: Leaving this query out of the promise all call in order to take advantage of the
    // potentially cached query in the IOL.all() call.
    const timeline = await gitbase.IOL.timeline(fellow.email);

    res.status(200)
      .json({
        data:{
          timeline,
          feed
        },
        meta: {
          user: fellow,
          filters: {
            status: [
              {
                label: "All",
                name: "all",
                selected: false
              },
              {
                label: "In danger",
                name: "in-danger",
                selected: true
              },
              {
                label: "In progress",
                name: "in-progress",
                selected: true
              },
              {
                label: "Mastered",
                name: "mastered",
                selected: false
              }
            ],
            stacks: stacks.map(stack => {
              return {
                label: stack.name,
                name: stack.slug,
                selected: false,
                disabled: false
              }
            })
          }
        }
      })
  }
}

export default VelocityController;

import Models from '../../database/models';
import debug from 'debug';
import Gitbase from "../../database/repositories/Gitbase";

const logger = debug("app:controllers");

class VelocityController {
  static async getFellowVelocityBreakdown(req, res) {
    const fellow = await Models.User.findOne({
      include: [
        {
          as: 'phases',
          model: Models.Phase
        }
      ],
      where: { username:  req.query.username }
    });

    logger(`VelocityController: (${fellow.username}) picked up the fellow ${fellow.name}`);

    const gitbase = new Gitbase({ username: fellow.username });
    await gitbase.initialize();

    const [stacks, feed] = await Promise.all([
      Models.Stack.findAll(),
      gitbase.IOL.all(fellow.username)
    ]);

    // NOTE: Leaving this query out of the promise all call in order to take advantage of the
    // potentially cached query in the IOL.all() call.
    const timeline = await gitbase.IOL.timeline(fellow.username);

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

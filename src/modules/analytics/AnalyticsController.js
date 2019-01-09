import Models from '../../database/models';
import Fellow from "../../lib/Fellow";

class AnalyticsController {
  static async getFellowAnalytics(req, res) {
    const user = await Models.User.findOne({
      include: [
        {
          as: 'phases',
          model: Models.Phase
        },
        {
          as: 'gh_accounts',
          model: Models.GHAccount
        }
      ],
      where: { email: req.query.email }
    });

    const fellow = (new Fellow(user));
    await fellow.refreshStats();

    res.status(200)
      .json({
        data: {
          analytics: [
            {
              label: "Fellow skill mastery",
              name: "skill-mastery",
              value: fellow.skillsMastered,
              unit: `/${fellow.skills_length}`,
              progress: true
            },
            {
              label: "Fellow skill readiness",
              name: "skill-readiness",
              value: fellow.readiness,
              unit: "%",
              progress: false
            },
            {
              label: "Current learning velocity",
              name: "learning-velocity",
              value: fellow.velocity,
              unit: "/wk",
              progress: true
            }
          ]
        },
        meta: {
          user: {
            ...user.dataValues,
            phase: fellow.phase,
            duration: fellow.weeks,
          }
        }
      });
  }
}

export default AnalyticsController;

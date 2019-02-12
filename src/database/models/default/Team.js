export default (sequelize, DataTypes) => {
  const Team = sequelize.define(
    'Team', {
      name: {
        type: DataTypes.STRING,
      },
      slug: {
        type: DataTypes.STRING
      }
    },
    { tableName: 'teams'}
  );

  Team.associate = models => {
    Team.hasMany(models.User, {
      as: 'users',
      foreignKey: 'team_id'
    });

    Team.hasMany(models.Repository, {
      as: 'repositories',
      foreignKey: 'team_id'
    });
  };

  return Team;
};


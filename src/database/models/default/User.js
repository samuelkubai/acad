export default (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User', {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      },
      andela_id: {
        type: DataTypes.STRING
      },
      profile_picture: {
        type: DataTypes.STRING
      }
    },
    { tableName: 'users'}
  );

  User.associate = models => {
    User.belongsToMany(models.Phase, {
      as: 'phases',
      through: 'UserPhase',
      foreignKey: 'user_id'
    });

    User.belongsTo(models.Team, {
      as: 'team',
      foreignKey: 'team_id'
    });

    User.hasMany(models.GHAccount, {
      as: 'gh_accounts',
      foreignKey: 'user_id'
    })
  };

  return User;
};


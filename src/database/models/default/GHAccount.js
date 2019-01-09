export default (sequelize, DataTypes) => {
  const GHAccount = sequelize.define(
    'GHAccount', {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      username: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      }
    },
    { tableName: 'gh_accounts'}
  );

  GHAccount.associate = models => {
    GHAccount.belongsTo(models.Team, {
      as: 'user',
      foreignKey: 'user_id'
    });
  };

  return GHAccount;
};


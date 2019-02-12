export default (sequelize, DataTypes) => {
  const Repository = sequelize.define(
    'Repository', {
      url: {
        type: DataTypes.STRING,
      }
    },
    { tableName: 'repositories'}
  );

  Repository.associate = models => {
    Repository.belongsTo(models.Team, {
      as: 'repositories',
      foreignKey: 'team_id'
    });
  };

  return Repository;
};


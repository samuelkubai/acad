export default (sequelize, DataTypes) => {
  return sequelize.define(
    'UserPhase', {
      user_id: {
        type: DataTypes.INTEGER
      },
      phase_id: {
        type: DataTypes.INTEGER
      },
      started_on: {
        type: DataTypes.DATE
      }
    },
    { tableName: 'user_phases'}
  );
};


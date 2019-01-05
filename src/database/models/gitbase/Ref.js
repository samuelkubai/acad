export default (sequelize, DataTypes) => {
  return sequelize.define(
    'Ref', {
      repository_id: {
        type: DataTypes.TEXT,
      },
      ref_name: {
        type: DataTypes.TEXT,
      },
      commit_hash: {
        type: DataTypes.TEXT,
      }
    }
  );
};


export default (sequelize, DataTypes) => {
  return sequelize.define(
    'CommitFile', {
      repository_id: {
        type: DataTypes.STRING
      },
      commit_hash: {
        type: DataTypes.STRING,
      },
      file_path: {
        type: DataTypes.STRING,
      },
      blob_hash: {
        type: DataTypes.STRING,
      },
      tree_hash: {
        type: DataTypes.DATE,
      }
    },
    {tableName: 'commit_files'}
  );
};


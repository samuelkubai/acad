export default (sequelize, DataTypes) => {
  const File = sequelize.define(
    'File', {
      repository_id: {
        type: DataTypes.STRING
      },
      file_path: {
        primaryKey: true,
        type: DataTypes.STRING,
      },
      blob_hash: {
        type: DataTypes.STRING,
      },
      tree_hash: {
        type: DataTypes.STRING,
      },
      tree_entry_mode: {
        type: DataTypes.STRING,
      },
      blob_content: {
        type: DataTypes.TEXT,
      },
      blob_size: {
        type: DataTypes.INTEGER,
      }
    },
    { tableName: 'files'}
  );

  File.associate = models => {
    File.belongsToMany(models.Commit, {
      foreignKey: 'file_path',
      otherKey: 'commit_hash',
      as: 'commits',
      through: models.CommitFile
    });
  };

  return File;
};


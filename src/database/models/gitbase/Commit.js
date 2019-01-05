export default (sequelize, DataTypes) => {
  const Commit = sequelize.define(
    'Commit', {
      repository_id: {
        type: DataTypes.STRING
      },
      commit_hash: {
        primaryKey: true,
        type: DataTypes.STRING,
      },
      commit_author_name: {
        type: DataTypes.STRING,
      },
      commit_author_email: {
        type: DataTypes.STRING,
      },
      commit_author_when: {
        type: DataTypes.DATE,
      },
      committer_name: {
        type: DataTypes.STRING,
      },
      committer_email: {
        type: DataTypes.STRING,
      },
      committer_when: {
        type: DataTypes.DATE,
      },
      commit_message: {
        type: DataTypes.STRING,
      },
      tree_hash: {
        type: DataTypes.STRING,
      }
    },
    { tableName: 'commits' }
  );

  Commit.associate = models => {
    Commit.belongsToMany(models.File, {
      foreignKey: 'commit_hash',
      otherKey: 'file_path',
      as: 'files',
      through: models.CommitFile
    })
  };

  return Commit;
};


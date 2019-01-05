export default (sequelize, DataTypes) => {
  const Phase = sequelize.define(
    'Phase', {
      name: {
        type: DataTypes.STRING,
      },
      slug: {
        type: DataTypes.STRING,
      }
    },
    { tableName: 'phases'}
  );

  Phase.associate = models => {
    Phase.hasMany(models.Target, {
      foreignKey: 'phase_id',
      as: 'targets'
    });

    Phase.belongsToMany(models.User, {
      as: 'users',
      through: 'UserPhase',
      foreignKey: 'phase_id'
    });
  };

  return Phase;
};


export default (sequelize, DataTypes) => {
  const Target = sequelize.define(
    'Target', {
      target: {
        type: DataTypes.INTEGER,
      }
    },
    { tableName: 'targets'}
  );

  Target.associate = models => {
    Target.belongsTo(models.Skill, {
      allowNull: true,
      foreignKey: 'skill_id',
      as: 'skill'
    });

    Target.belongsTo(models.Phase, {
      allowNull: true,
      foreignKey: 'phase_id',
      as: 'phase'
    });
  };

  return Target;
};


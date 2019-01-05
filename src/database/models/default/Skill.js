export default (sequelize, DataTypes) => {
  const Skill = sequelize.define(
    'Skill', {
      label: {
        type: DataTypes.STRING,
      },
      slug: {
        type: DataTypes.STRING,
      },
      regex: {
        type: DataTypes.STRING,
      }
    },
    { tableName: 'skills'}
  );

  Skill.associate = models => {
    Skill.belongsTo(models.Stack, {
      allowNull: true,
      foreignKey: 'stack_id',
      as: 'stack'
    });

    Skill.hasMany(models.Target, {
      foreignKey: 'skill_id',
      as: 'targets'
    })
  };

  return Skill;
};


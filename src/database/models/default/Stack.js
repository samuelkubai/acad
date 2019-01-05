export default (sequelize, DataTypes) => {
  const Stack = sequelize.define(
    'Stack', {
      name: {
        type: DataTypes.STRING,
      },
      slug: {
        type: DataTypes.STRING,
      },
      icon: {
        type: DataTypes.STRING
      }
    },
    { tableName: 'stacks'}
  );

  Stack.associate = models => {
    Stack.hasMany(models.Skill, {
      foreignKey: 'stack_id',
      as: 'skills'
    });
  };

  return Stack;
};


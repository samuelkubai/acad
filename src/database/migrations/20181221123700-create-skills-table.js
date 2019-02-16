'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('skills', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      label: {
        allowNull: false,
        type: Sequelize.STRING
      },
      slug: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
      },
      regex: {
        allowNull: false,
        type: Sequelize.STRING
      },
      stack_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      team_id: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('skills');
  }
};


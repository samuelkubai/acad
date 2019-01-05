'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('targets', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      skill_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      phase_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      target: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('targets')
  }
};

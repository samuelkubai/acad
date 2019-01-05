'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user_phases', {
      user_id: {
        type: Sequelize.INTEGER
      },
      phase_id: {
        type: Sequelize.INTEGER
      },
      started_on: {
        allowNull: false,
        type: Sequelize.DATE
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('user_phases');
  }
};

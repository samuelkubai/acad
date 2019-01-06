'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('phases', 'duration', {
      allowNull: false,
      type: Sequelize.INTEGER
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('phases', 'duration');
  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'team_id', {
      allowNull: false,
      type: Sequelize.INTEGER
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('users', 'team_id');
  }
};

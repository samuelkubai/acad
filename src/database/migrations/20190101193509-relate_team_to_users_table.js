'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'team_id', {
      allowNull: false,
      type: Sequelize.STRING
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('users', 'team_id');
  }
};

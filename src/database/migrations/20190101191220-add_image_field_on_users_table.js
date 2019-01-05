'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'profile_picture', {
      allowNull: true,
      type: Sequelize.STRING
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('users', 'profile_picture');
  }
};

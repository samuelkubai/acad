'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('gh_accounts', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      username: {
        allowNull: true,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      user_id: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('gh_accounts');
  }
};

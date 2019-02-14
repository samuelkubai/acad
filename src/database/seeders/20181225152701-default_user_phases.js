'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user_phases', [
      {
        user_id: 1,
        phase_id: 1,
        started_on: '2018-11-10'
      }
    ], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('user_phases', null, {});
  }
};

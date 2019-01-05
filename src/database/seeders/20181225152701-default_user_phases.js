'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user_phases', [
      {
        user_id: 1,
        phase_id: 1,
        started_on: '2018-08-27'
      },
      {
        user_id: 2,
        phase_id: 1,
        started_on: '2018-09-17'
      },
      {
        user_id: 3,
        phase_id: 1,
        started_on: '2018-07-23'
      },
      {
        user_id: 5,
        phase_id: 1,
        started_on: '2018-07-23'
      },
      {
        user_id: 6,
        phase_id: 1,
        started_on: '2018-10-15'
      },
      {
        user_id: 7,
        phase_id: 1,
        started_on: '2018-10-15'
      },
      {
        user_id: 8,
        phase_id: 1,
        started_on: '2018-10-15'
      },
      {
        user_id: 9,
        phase_id: 1,
        started_on: '2018-10-15'
      },
      {
        user_id: 10,
        phase_id: 1,
        started_on: '2018-11-12'
      },
      {
        user_id: 11,
        phase_id: 1,
        started_on: '2018-12-10'
      },
      {
        user_id: 12,
        phase_id: 1,
        started_on: '2018-12-10'
      },
      {
        user_id: 13,
        phase_id: 1,
        started_on: '2018-12-10'
      },
      {
        user_id: 14,
        phase_id: 1,
        started_on: '2018-12-10'
      },
      {
        user_id: 15,
        phase_id: 1,
        started_on: '2018-10-15'
      },
      {
        user_id: 16,
        phase_id: 1,
        started_on: '2018-10-15'
      },
      {
        user_id: 17,
        phase_id: 1,
        started_on: '2018-11-12'
      },
      {
        user_id: 18,
        phase_id: 1,
        started_on: '2018-11-12'
      },
      {
        user_id: 19,
        phase_id: 1,
        started_on: '2018-12-10'
      },
      {
        user_id: 20,
        phase_id: 1,
        started_on: '2018-12-10'
      },
      {
        user_id: 21,
        phase_id: 1,
        started_on: '2018-12-10'
      }
    ], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('user_phases', null, {});
  }
};

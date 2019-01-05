'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('targets', [
      {
        skill_id: 1,
        phase_id: 1,
        target: 220
      },
      {
        skill_id: 2,
        phase_id: 1,
        target: 140
      },
      {
        skill_id: 3,
        phase_id: 1,
        target: 110
      },
      {
        skill_id: 4,
        phase_id: 1,
        target: 250
      },
      {
        skill_id: 5,
        phase_id: 1,
        target: 135
      },
      {
        skill_id: 6,
        phase_id: 1,
        target: 100
      },
      {
        skill_id: 7,
        phase_id: 1,
        target: 200
      },
      {
        skill_id: 8,
        phase_id: 1,
        target: 140
      }
    ], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('targets', null, {});
  }
}

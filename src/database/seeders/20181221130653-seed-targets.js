'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('targets', [
      {
        skill_id: 1,
        phase_id: 1,
        target: 50
      },
      {
        skill_id: 2,
        phase_id: 1,
        target: 50
      },
      {
        skill_id: 3,
        phase_id: 1,
        target: 50
      },
      {
        skill_id: 4,
        phase_id: 1,
        target: 50
      },
      {
        skill_id: 5,
        phase_id: 1,
        target: 50
      },
      {
        skill_id: 6,
        phase_id: 1,
        target: 50
      },
      {
        skill_id: 7,
        phase_id: 1,
        target: 100
      },
      {
        skill_id: 8,
        phase_id: 1,
        target: 250
      },
      {
        skill_id: 9,
        phase_id: 1,
        target: 250
      },
      {
        skill_id: 10,
        phase_id: 1,
        target: 10
      },
      {
        skill_id: 11,
        phase_id: 1,
        target: 25
      },
      {
        skill_id: 12,
        phase_id: 1,
        target: 25
      },
      {
        skill_id: 13,
        phase_id: 1,
        target: 100
      },
      {
        skill_id: 14,
        phase_id: 1,
        target: 100
      },
      {
        skill_id: 15,
        phase_id: 1,
        target: 75
      },
      {
        skill_id: 16,
        phase_id: 1,
        target: 75
      },
      {
        skill_id: 17,
        phase_id: 1,
        target: 50
      },
      {
        skill_id: 18,
        phase_id: 1,
        target: 25
      },
      {
        skill_id: 19,
        phase_id: 1,
        target: 15
      },
      {
        skill_id: 20,
        phase_id: 1,
        target: 25
      },
      {
        skill_id: 21,
        phase_id: 1,
        target: 25
      },
      {
        skill_id: 22,
        phase_id: 1,
        target: 25
      },
      {
        skill_id: 23,
        phase_id: 1,
        target: 25
      },
      {
        skill_id: 24,
        phase_id: 1,
        target: 25
      },
      {
        skill_id: 25,
        phase_id: 1,
        target: 75
      },
      {
        skill_id: 26,
        phase_id: 1,
        target: 75
      },
      {
        skill_id: 27,
        phase_id: 1,
        target: 100
      },
      {
        skill_id: 28,
        phase_id: 1,
        target: 100
      }
    ], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('targets', null, {});
  }
}

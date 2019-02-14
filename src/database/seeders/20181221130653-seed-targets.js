'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('targets', [
      {
        skill_id: 1,
        phase_id: 1,
        target: 2
      },
      {
        skill_id: 2,
        phase_id: 1,
        target: 5
      },
      {
        skill_id: 3,
        phase_id: 1,
        target: 10
      },
      {
        skill_id: 4,
        phase_id: 1,
        target: 1
      },
      {
        skill_id: 5,
        phase_id: 1,
        target: 1
      },
      {
        skill_id: 6,
        phase_id: 1,
        target: 1
      },
      {
        skill_id: 7,
        phase_id: 1,
        target: 1
      },
      {
        skill_id: 8,
        phase_id: 1,
        target: 15
      },
      {
        skill_id: 9,
        phase_id: 1,
        target: 3
      },
      {
        skill_id: 10,
        phase_id: 1,
        target: 5
      },
      {
        skill_id :11,
        phase_id: 1,
        target: 5
      },
      {
        skill_id :12,
        phase_id: 1,
        target: 10
      },
      {
        skill_id :13,
        phase_id: 1,
        target: 1
      },
      {
        skill_id :14,
        phase_id: 1,
        target: 5
      },
      {
        skill_id :15,
        phase_id: 1,
        target: 2
      },
      {
        skill_id :16,
        phase_id: 1,
        target: 30
      },
      {
        skill_id :17,
        phase_id: 1,
        target: 10
      },
      {
        skill_id :18,
        phase_id: 1,
        target: 10
      },
      {
        skill_id :19,
        phase_id: 1,
        target: 10
      },
      {
        skill_id :20,
        phase_id: 1,
        target: 10
      }
    ], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('targets', null, {});
  }
}

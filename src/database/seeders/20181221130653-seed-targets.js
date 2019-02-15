'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('targets', [
      {
        skill_id: 11,
        phase_id: 1,
        target: 6
      },
      {
        skill_id: 12,
        phase_id: 1,
        target: 6
      },
      {
        skill_id: 13,
        phase_id: 1,
        target: 6
      },
      {
        skill_id: 14,
        phase_id: 1,
        target: 6
      },
      {
        skill_id: 15,
        phase_id: 1,
        target: 6
      },
      {
        skill_id: 16,
        phase_id: 1,
        target: 6
      },
      {
        skill_id: 17,
        phase_id: 1,
        target: 6
      },
      {
        skill_id: 18,
        phase_id: 1,
        target: 6
      },
      {
        skill_id: 19,
        phase_id: 1,
        target: 6
      },
      {
        skill_id: 110,
        phase_id: 1,
        target: 3
      },
      {
        skill_id: 111,
        phase_id: 1,
        target: 2
      },
      {
        skill_id: 112,
        phase_id: 1,
        target: 2
      },
      {
        skill_id: 113,
        phase_id: 1,
        target: 4
      },
      {
        skill_id: 114,
        phase_id: 1,
        target: 4
      },
      {
        skill_id: 115,
        phase_id: 1,
        target: 3
      },
      {
        skill_id: 116,
        phase_id: 1,
        target: 3
      },
      {
        skill_id: 117,
        phase_id: 1,
        target: 5
      },
      {
        skill_id: 118,
        phase_id: 1,
        target: 2
      },
      {
        skill_id: 119,
        phase_id: 1,
        target: 2
      },
      {
        skill_id: 120,
        phase_id: 1,
        target: 2
      },
      {
        skill_id: 121,
        phase_id: 1,
        target: 2
      },
      {
        skill_id: 122,
        phase_id: 1,
        target: 2
      },
      {
        skill_id: 123,
        phase_id: 1,
        target: 3
      },
      {
        skill_id: 124,
        phase_id: 1,
        target: 3
      },
      {
        skill_id: 125,
        phase_id: 1,
        target: 5
      },
      {
        skill_id: 126,
        phase_id: 1,
        target: 5
      },
      {
        skill_id: 127,
        phase_id: 1,
        target: 2
      },
      {
        skill_id: 128,
        phase_id: 1,
        target: 5
      },
      {
        skill_id: 21,
        phase_id: 1,
        target: 2
      },
      {
        skill_id: 22,
        phase_id: 1,
        target: 5
      },
      {
        skill_id: 23,
        phase_id: 1,
        target: 10
      },
      {
        skill_id: 24,
        phase_id: 1,
        target: 1
      },
      {
        skill_id: 25,
        phase_id: 1,
        target: 1
      },
      {
        skill_id: 26,
        phase_id: 1,
        target: 1
      },
      {
        skill_id: 27,
        phase_id: 1,
        target: 1
      },
      {
        skill_id: 28,
        phase_id: 1,
        target: 15
      },
      {
        skill_id: 29,
        phase_id: 1,
        target: 3
      },
      {
        skill_id: 210,
        phase_id: 1,
        target: 5
      },
      {
        skill_id : 211,
        phase_id: 1,
        target: 5
      },
      {
        skill_id : 212,
        phase_id: 1,
        target: 10
      },
      {
        skill_id : 213,
        phase_id: 1,
        target: 1
      },
      {
        skill_id : 214,
        phase_id: 1,
        target: 5
      },
      {
        skill_id : 215,
        phase_id: 1,
        target: 2
      },
      {
        skill_id : 216,
        phase_id: 1,
        target: 30
      },
      {
        skill_id : 217,
        phase_id: 1,
        target: 10
      },
      {
        skill_id : 218,
        phase_id: 1,
        target: 10
      },
      {
        skill_id : 219,
        phase_id: 1,
        target: 10
      },
      {
        skill_id : 220,
        phase_id: 1,
        target: 10
      }
    ], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('targets', null, {});
  }
}

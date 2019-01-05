'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('phases', [
      {
        id: 1,
        name: 'Apprenticeship',
        slug: 'D0B'
      },
      {
        id: 2,
        name: 'Simulations',
        slug: 'D0A'
      },
      {
        id: 3,
        name: 'Bench',
        slug: 'bench'
      },
      {
        id: 4,
        name: 'Pre-fellowship',
        slug: 'pre-fellowship'
      }
    ], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('phases', null, {});
  }
};

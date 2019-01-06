'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('phases', [
      {
        id: 1,
        name: 'Apprenticeship',
        slug: 'D0B',
        duration: 12
      },
      {
        id: 2,
        name: 'Simulations',
        slug: 'D0A',
        duration: 12
      },
      {
        id: 3,
        name: 'Bench',
        slug: 'bench',
        duration: 12
      },
      {
        id: 4,
        name: 'Pre-fellowship',
        slug: 'pre-fellowship',
        duration: 12
      }
    ], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('phases', null, {});
  }
};

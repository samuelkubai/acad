'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('repositories', [
      {
        id: 1,
        url: 'https://github.com/andela/vof-tracker',
        team_id: 1,
      }
    ]);
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('repositories', null, {});
  }
};

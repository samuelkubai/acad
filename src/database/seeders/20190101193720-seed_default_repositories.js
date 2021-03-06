'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('repositories', [
      {
        id: 1,
        url: 'https://github.com/andela/travel_tool_front',
        team_id: 1,
      },
      {
        id: 2,
        url: 'https://github.com/andela/travel_tool_back',
        team_id: 1,
      },
      {
        id: 3,
        url: 'https://github.com/andela/vof-tracker',
        team_id: 2,
      }
    ]);
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('repositories', null, {});
  }
};

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
      }
    ]);
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('repositories', null, {});
  }
};

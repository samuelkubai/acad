'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('users', [
      {
        id: 1,
        name: 'Chris Nyaga',
        email: 'chris.nyaga@andela.com',
        andela_id: 'JGBB3SKNDKS2SDKJ2',
        team_id: 1,
        profile_picture: 'https://lh6.googleusercontent.com/-8TQxurp1NFM/AAAAAAAAAAI/AAAAAAAAAC0/ypqLW1CIO3U/photo.jpg?sz=50'
      }
    ], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};

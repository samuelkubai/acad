'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('gh_accounts', [
      {
        id: 1,
        user_id: 1,
        email: 'chris.nyaga@andela.com',
        username: 'bigzoo'
      }
    ], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('gh_accounts', null, {});
  }
};

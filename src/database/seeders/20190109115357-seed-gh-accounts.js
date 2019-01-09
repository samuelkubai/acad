'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('gh_accounts', [
      {
        id: 1,
        user_id: 1,
        email: 'Nedson202',
        username: 'Nedson202'
      },
      {
        id: 2,
        user_id: 2,
        email: 'Stylll',
        username: 'Stylll',
      },
      {
        id: 3,
        user_id: 3,
        email: 'johnmutuma5',
        username: 'johnmutuma5',
      },
      {
        id: 5,
        user_id: 5,
        email: 'd3mola',
        username: 'd3mola',
      },
      {
        id: 6,
        user_id: 6,
        email: 'davenjeru',
        username: 'davenjeru',
      },
      {
        id: 7,
        user_id: 7,
        email: 'janetnim',
        username: 'janetnim',
      },
      {
        id: 8,
        user_id: 8,
        email: 'asamisellah',
        username: 'asamisellah',
      },
      {
        id: 9,
        user_id: 9,
        email: 'DennisWanjiru',
        username: 'DennisWanjiru',
      },
      {
        id: 10,
        user_id: 10,
        email: 'mikenthiwa',
        username: 'mikenthiwa',
      },
      {
        id: 11,
        user_id: 11,
        email: 'Victor-Ugwueze',
        username: 'Victor-Ugwueze',
      },
      {
        id: 12,
        user_id: 12,
        email: 'obulaworld',
        username: 'obulaworld',
      },
      {
        id: 13,
        user_id: 13,
        email: 'gitaumoses4',
        username: 'gitaumoses4',
      },
      {
        id: 14,
        user_id: 14,
        email: 'SrMoffat',
        username: 'SrMoffat',
      },
      {
        id: 15,
        user_id: 15,
        email: 'ssewilliam',
        username: 'ssewilliam',
      },
      {
        id: 16,
        user_id: 16,
        email: 'ronaldndirangu',
        username: 'ronaldndirangu',
      },
      {
        id: 17,
        user_id: 17,
        email: 'emekafredy',
        username: 'emekafredy',
      },
      {
        id: 18,
        user_id: 18,
        email: 'CEOehis',
        username: 'CEOehis',
      },
      {
        id: 19,
        user_id: 19,
        email: 'koechkevin',
        username: 'koechkevin',
      },
      {
        id: 20,
        user_id: 20,
        email: 'MuhanguziDavid',
        username: 'MuhanguziDavid',
      },
      {
        id: 21,
        user_id: 21,
        email: 'Phunmbi',
        username: 'Phunmbi',
      },
      {
        id: 22,
        user_id: 9,
        email: 'creez@Denniss-MacBook-Pro-2.local',
        username: 'creez@Denniss-MacBook-Pro-2.local',
      },
      {
        id: 23,
        user_id: 8,
        email: 'rachaelasami@Rachaels-MacBook-Pro.local',
        username: 'rachaelasami@Rachaels-MacBook-Pro.local',
      },
      {
        id: 24,
        user_id: 3,
        email: 'johnmutuma5@gmail.com',
        username: 'johnmutuma5@gmail.com',
      },
      {
        id: 25,
        user_id: 3,
        email: 'john.mutuma@andela.com',
        username: 'john.mutuma@andela.com',
      },
      {
        id: 26,
        user_id: 5,
        email: 'ademola.ariya@andela.com',
        username: 'ademola.ariya@andela.com',
      },
      {
        id: 27,
        user_id: 10,
        email: 'michaelnthiwa@michaels-MacBook-Pro-2.local',
        username: 'michaelnthiwa@michaels-MacBook-Pro-2.local'
      },
      {
        id: 28,
        user_id: 14,
        email: '4fr0c0d3@Moffats-MacBook-Pro.local',
        username: '4fr0c0d3@Moffats-MacBook-Pro.local'
      }
    ], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('gh_accounts', null, {});
  }
};

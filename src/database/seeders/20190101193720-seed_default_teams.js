'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('teams', [
      {
        id: 1,
        name: 'Travela',
        slug: 'travela',
        logo: 'https://res.cloudinary.com/kubai/image/upload/v1546371777/travela.svg'
      },
      {
        id: 2,
        name: 'VOF',
        slug: 'vof',
        logo: 'https://res.cloudinary.com/kubai/image/upload/v1546371777/travela.svg'
      },
      {
        id: 3,
        name: 'Converge',
        slug: 'converge',
        logo: 'https://res.cloudinary.com/kubai/image/upload/v1546371777/travela.svg'
      }
    ]);
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('teams', null, {});
  }
};

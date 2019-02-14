'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('stacks', [
      {
        id: 1,
        name: 'Ruby',
        slug: 'ruby',
        icon: "https://res.cloudinary.com/bigzoo/image/upload/v1550138425/Ruby.svg",
      },
      {
        id: 2,
        name: 'Rails',
        slug: 'rails',
        icon: "https://res.cloudinary.com/bigzoo/image/upload/v1550138421/Rails.svg"
      },
      {
        id: 3,
        name: "CoffeeScript",
        slug: "coffeescript",
        icon: "https://res.cloudinary.com/bigzoo/image/upload/v1550143442/Coffeescript.svg"
      },
      {
        id: 4,
        name: 'SASS',
        slug: 'sass',
        icon: "https://res.cloudinary.com/kubai/image/upload/v1545281183/sass.svg",
      }
    ], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('stacks', null, {});
  }
};

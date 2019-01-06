'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('stacks', [
      {
        id: 1,
        name: 'NodeJS',
        slug: 'nodejs',
        icon: "https://res.cloudinary.com/kubai/image/upload/v1545281183/nodejs.svg"
      },
      {
        id: 2,
        name: 'ReactJS',
        slug: 'reactjs',
        icon: "https://res.cloudinary.com/kubai/image/upload/v1545281183/atom.svg",
      },
      {
        id: 3,
        name: 'Python',
        slug: 'python',
        icon: "https://res.cloudinary.com/kubai/image/upload/v1545281183/nodejs.svg"
      },
      {
        id: 4,
        name: 'PHP',
        slug: 'php',
        icon: "https://res.cloudinary.com/kubai/image/upload/v1545281183/nodejs.svg"
      },
      {
        id: 5,
        name: 'SASS',
        slug: 'sass',
        icon: "https://res.cloudinary.com/kubai/image/upload/v1545281183/sass.svg",
      },
      {
        id: 6,
        name: 'Redux',
        slug: 'redux',
        icon: "https://res.cloudinary.com/kubai/image/upload/v1545281183/atom.svg",
      },
      {
        id: 7,
        name: 'Jest',
        slug: 'jest',
        icon: "https://res.cloudinary.com/kubai/image/upload/v1546791876/jest-icon.svg",
      }
    ], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('stacks', null, {});
  }
};

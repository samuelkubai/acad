'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('skills', [
      {
        id: 1,
        label: "Working with reducers in redux saga",
        slug: "redux-reducers",
        regex: ".*/redux/reducers/.*",
        stack_id: 6
      },
      {
        id: 2,
        label: "Testing redux saga reducers",
        slug: "testing-redux-reducers",
        regex: ".*/redux/reducers/__tests__/.*",
        stack_id: 7
      },
      {
        id: 3,
        label: "Handling the saga with redux sagas",
        slug: "redux-sagas",
        regex: ".*/redux/middleware/.*",
        stack_id: 6
      },
      {
        id: 4,
        label: "Testing sagas in redux sagas",
        slug: "testing-redux-sagas",
        regex: ".*/redux/middleware/__tests__/.*",
        stack_id: 7
      },
      {
        id: 5,
        label: "Utilizing action creators in redux sagas",
        slug: "redux-action-creators",
        regex: ".*/redux/actionCreator/.*",
        stack_id: 6
      },
      {
        id: 6,
        label: "Testing use of redux action creators in redux sagas",
        slug: "testing-redux-action-creators",
        regex: ".*/redux/actionCreator/__tests__/.*",
        stack_id: 7
      },
      {
        id: 7,
        label: "Styling react components with SASS",
        slug: "sass",
        regex: ".*scss$",
        stack_id: 5
      },
      {
        id: 8,
        label: "Building react components",
        slug: "react-components",
        regex: ".*/components/(?!__tests__).*/.*",
        stack_id: 2
      },
      {
        id: 9,
        label: "Writing tests for react components",
        slug: "testing-react-components",
        regex: ".*/components/.*/__tests__/.*",
        stack_id: 7
      },
      {
        id: 10,
        label: "Hooking up routing in react SPAs",
        slug: "react-routing",
        regex: ".*/routes/index.js$",
        stack_id: 2
      },
      {
        id: 11,
        label: "Building react higher order components",
        slug: "react-higher-order-components",
        regex: ".*/hoc/.*",
        stack_id: 2
      },
      {
        id: 12,
        label: "Testing react higher order components",
        slug: "testing-react-higher-order-components",
        regex: ".*/hoc/__tests__/.*",
        stack_id: 7
      },
      {
        id: 13,
        label: "Integrating react components to react views",
        slug: "react-views",
        regex: ".*/views/.*",
        stack_id: 2
      },
      {
        id: 14,
        label: "Writing react integration tests",
        slug: "react-integration-tests",
        regex: ".*/views/.*/__tests__/.*",
        stack_id: 7
      },
      {
        id: 15,
        label: "Setting up API services in react",
        slug: "react-services",
        regex: ".*/services/.*",
        stack_id: 2
      },
      {
        id: 16,
        label: "Writing tests for API react services",
        slug: "testing-react-services",
        regex: ".*/services/__tests__/.*",
        stack_id: 7
      },
      {
        id: 17,
        label: "Working on Node controllers",
        slug: "node-controllers",
        regex: ".*Controller.js$",
        stack_id: 1
      },
      {
        id: 18,
        label: "Building middleware for NodeJS",
        slug: "node-middlewares",
        regex: ".*/middlewares/.*",
        stack_id: 1
      },
      {
        id: 19,
        label: "Hooking up routes with Express",
        slug: "node-routes",
        regex: ".*/modules/.*/index.js$",
        stack_id: 1
      },
      {
        id: 20,
        label: "Creating migrations in NodeJS",
        slug: "node-migrations",
        regex: ".*/migrations/.*",
        stack_id: 1
      },
      {
        id: 21,
        label: "Seeding data in NodeJS",
        slug: "node-seeders",
        regex: ".*/seeders/.*",
        stack_id: 1
      },
      {
        id: 22,
        label: "Setting up models on NodeJS",
        slug: "node-models",
        regex: ".*/models/.*",
        stack_id: 1
      },
      {
        id: 23,
        label: "Properly handle exceptions on NodeJS",
        slug: "node-exceptions",
        regex: ".*/exceptions/.*",
        stack_id: 1
      },
      {
        id: 24,
        label: "Writing tests for exceptions in NodeJS",
        slug: "testing-node-exceptions",
        regex: ".*/exceptions/__tests__/.*",
        stack_id: 7
      },
      {
        id: 25,
        label: "Encapsulating business logic in NodeJS applications",
        slug: "node-business-logic",
        regex: ".*/helpers/.*",
        stack_id: 1
      },
      {
        id: 26,
        label: "Properly testing business logic on NodeJS applications",
        slug: "testing-node-business-logic",
        regex: ".*/helpers/.*__tests__/.*",
        stack_id: 7
      },
      {
        id: 27,
        label: "Writing proper mocks on NodeJS applications",
        slug: "node-mocks",
        regex: ".*/_mocks_/.*",
        stack_id: 1
      },
      {
        id: 28,
        label: "Writing proper integration tests on NodeJS",
        slug: "node-integration-test",
        regex: ".*/modules/.*/__tests__/.*",
        stack_id: 7
      }
    ], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('skills', null, {});
  }
};

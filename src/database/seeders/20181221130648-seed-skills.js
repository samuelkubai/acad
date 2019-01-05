'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('skills', [
      {
        id: 1,
        label: "Working with redux reducers",
        slug: "redux-reducers",
        regex: ".*/redux/reducers/.*",
        stack_id: 6
      },
      {
        id: 2,
        label: "Testing redux reducers",
        slug: "testing-redux-reducers",
        regex: ".*/redux/reducers/_tests_/.*",
        stack_id: 6
      },
      {
        id: 3,
        label: "Using sagas on redux",
        slug: "redux-sagas",
        regex: ".*/redux/middleware/.*",
        stack_id: 6
      },
      {
        id: 4,
        label: "Testing sagas in redux",
        slug: "testing-redux-sagas",
        regex: ".*/redux/middleware/_tests_/.*",
        stack_id: 6
      },
      {
        id: 5,
        label: "Utilizing redux action creators",
        slug: "redux-action-creators",
        regex: ".*/redux/actionCreator/.*",
        stack_id: 6
      },
      {
        id: 6,
        label: "Testing use of redux action creators",
        slug: "testing-redux-action-creators",
        regex: ".*/redux/actionCreator/_tests_/.*",
        stack_id: 6
      },
      {
        id: 7,
        label: "Using SASS pre-processor",
        slug: "sass",
        regex: ".*scss$",
        stack_id: 5
      },
      {
        id: 8,
        label: "Building react components",
        slug: "react-components",
        regex: ".*/components/.*",
        stack_id: 2
      },
      {
        id: 9,
        label: "Writing tests for react components",
        slug: "testing-react-components",
        regex: ".*/components/.*/_tests_/.*",
        stack_id: 2
      },
      {
        id: 10,
        label: "Hooking up react routing",
        slug: "react-routing",
        regex: ".*/routes/index.js$",
        stack_id: 2
      },
      {
        id: 11,
        label: "Building higher order components",
        slug: "react-higher-order-components",
        regex: ".*/hoc/.*",
        stack_id: 2
      },
      {
        id: 12,
        label: "Testing higher order components",
        slug: "testing-react-higher-order-components",
        regex: ".*/hoc/_tests_/.*",
        stack_id: 2
      },
      {
        id: 13,
        label: "Hooking up react views",
        slug: "react-views",
        regex: ".*/views/.*",
        stack_id: 2
      },
      {
        id: 14,
        label: "Writing react integration tests",
        slug: "react-integration-tests",
        regex: ".*/views/.*/_tests_/.*",
        stack_id: 2
      },
      {
        id: 15,
        label: "Setting up services in react",
        slug: "react-services",
        regex: ".*/services/.*",
        stack_id: 2
      },
      {
        id: 16,
        label: "Writing tests for services",
        slug: "testing-react-services",
        regex: ".*/services/_tests_/.*",
        stack_id: 2
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
        label: "Hooking up NodeJS routes",
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
        regex: ".*/exceptions/_tests_/.*",
        stack_id: 1
      },
      {
        id: 25,
        label: "Encapsulating business logic in NodeJS",
        slug: "node-business-logic",
        regex: ".*/helpers/.*",
        stack_id: 1
      },
      {
        id: 26,
        label: "Properly testing business logic on NodeJS",
        slug: "testing-node-business-logic",
        regex: ".*/helpers/.*_tests_/.*",
        stack_id: 1
      },
      {
        id: 27,
        label: "Writing proper mocks on NodeJS",
        slug: "node-mocks",
        regex: ".*/_mocks_/.*",
        stack_id: 1
      },
      {
        id: 28,
        label: "Writing proper integration tests on NodeJS",
        slug: "node-integration-test",
        regex: ".*/modules/.*/_tests_/.*",
        stack_id: 1
      }
    ], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('skills', null, {});
  }
};

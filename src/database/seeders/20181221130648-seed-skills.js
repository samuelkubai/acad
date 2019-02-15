'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('skills', [
      {
        id: 11,
        label: "Working with reducers in redux saga",
        slug: "redux-reducers",
        regex: ".*/redux/reducers/.*",
        stack_id: 6,
        team_id: 1
      },
      {
        id: 12,
        label: "Testing redux saga reducers",
        slug: "testing-redux-reducers",
        regex: ".*/redux/reducers/__tests__/.*",
        stack_id: 7,
        team_id: 1
      },
      {
        id: 13,
        label: "Handling the saga with redux sagas",
        slug: "redux-sagas",
        regex: ".*/redux/middleware/.*",
        stack_id: 6,
        team_id: 1
      },
      {
        id: 14,
        label: "Testing sagas in redux sagas",
        slug: "testing-redux-sagas",
        regex: ".*/redux/middleware/__tests__/.*",
        stack_id: 7,
        team_id: 1
      },
      {
        id: 15,
        label: "Utilizing action creators in redux sagas",
        slug: "redux-action-creators",
        regex: ".*/redux/actionCreator/.*",
        stack_id: 6,
        team_id: 1
      },
      {
        id: 16,
        label: "Testing use of redux action creators in redux sagas",
        slug: "testing-redux-action-creators",
        regex: ".*/redux/actionCreator/__tests__/.*",
        stack_id: 7,
        team_id: 1
      },
      {
        id: 17,
        label: "Styling react components with SASS",
        slug: "sass",
        regex: ".*scss$",
        stack_id: 5,
        team_id: 1
      },
      {
        id: 18,
        label: "Building react components",
        slug: "react-components",
        regex: ".*/components/(?!__tests__).*/.*",
        stack_id: 2,
        team_id: 1
      },
      {
        id: 19,
        label: "Writing tests for react components",
        slug: "testing-react-components",
        regex: ".*/components/.*/__tests__/.*",
        stack_id: 7,
        team_id: 1
      },
      {
        id: 110,
        label: "Hooking up routing in react SPAs",
        slug: "react-routing",
        regex: ".*/routes/index.js$",
        stack_id: 2,
        team_id: 1
      },
      {
        id: 111,
        label: "Building react higher order components",
        slug: "react-higher-order-components",
        regex: "..*hoc.*|.*Hoc.*",
        stack_id: 2,
        team_id: 1
      },
      {
        id: 112,
        label: "Testing react higher order components",
        slug: "testing-react-higher-order-components",
        regex: ".*/hoc/__tests__/.*|.*/Hoc/__tests__/.*",
        stack_id: 7,
        team_id: 1
      },
      {
        id: 113,
        label: "Integrating react components to react views",
        slug: "react-views",
        regex: ".*/views/.*",
        stack_id: 2,
        team_id: 1
      },
      {
        id: 114,
        label: "Writing react integration tests",
        slug: "react-integration-tests",
        regex: ".*/views/.*/__tests__/.*",
        stack_id: 7,
        team_id: 1
      },
      {
        id: 115,
        label: "Setting up API services in react",
        slug: "react-services",
        regex: ".*/services/.*",
        stack_id: 2,
        team_id: 1
      },
      {
        id: 116,
        label: "Writing tests for API react services",
        slug: "testing-react-services",
        regex: ".*/services/__tests__/.*",
        stack_id: 7,
        team_id: 1
      },
      {
        id: 117,
        label: "Working on Node controllers",
        slug: "node-controllers",
        regex: ".*Controller.js$",
        stack_id: 1,
        team_id: 1
      },
      {
        id: 118,
        label: "Building middleware for NodeJS",
        slug: "node-middlewares",
        regex: ".*/middlewares/.*",
        stack_id: 1,
        team_id: 1
      },
      {
        id: 119,
        label: "Hooking up routes with Express",
        slug: "node-routes",
        regex: ".*/modules/.*/index.js$",
        stack_id: 1,
        team_id: 1
      },
      {
        id: 120,
        label: "Creating migrations in NodeJS",
        slug: "node-migrations",
        regex: ".*/migrations/.*",
        stack_id: 1,
        team_id: 1
      },
      {
        id: 121,
        label: "Seeding data in NodeJS",
        slug: "node-seeders",
        regex: ".*/seeders/.*",
        stack_id: 1,
        team_id: 1
      },
      {
        id: 122,
        label: "Setting up models on NodeJS",
        slug: "node-models",
        regex: ".*/models/.*",
        stack_id: 1,
        team_id: 1
      },
      {
        id: 123,
        label: "Properly handle exceptions on NodeJS",
        slug: "node-exceptions",
        regex: ".*/exceptions/.*",
        stack_id: 1,
        team_id: 1
      },
      {
        id: 124,
        label: "Writing tests for exceptions in NodeJS",
        slug: "testing-node-exceptions",
        regex: ".*/exceptions/__tests__/.*",
        stack_id: 7,
        team_id: 1
      },
      {
        id: 125,
        label: "Encapsulating business logic in NodeJS applications",
        slug: "node-business-logic",
        regex: ".*/helpers/.*",
        stack_id: 1,
        team_id: 1
      },
      {
        id: 126,
        label: "Properly testing business logic on NodeJS applications",
        slug: "testing-node-business-logic",
        regex: ".*/helpers/.*__tests__/.*",
        stack_id: 7,
        team_id: 1
      },
      {
        id: 127,
        label: "Writing proper mocks on NodeJS applications",
        slug: "node-mocks",
        regex: ".*mocks.*",
        stack_id: 1,
        team_id: 1
      },
      {
        id: 128,
        label: "Writing proper integration tests on NodeJS",
        slug: "node-integration-test",
        regex: ".*/modules/.*/__tests__/.*",
        stack_id: 7,
        team_id: 1
      },
      {
        id: 21,
        label: "Rails endpoints",
        slug: "rails-router",
        regex: ".*routes\.rb",
        stack_id: 22,
        team_id: 2
      },
      {
        id: 22,
        label: "Active record models",
        slug: "rails-models",
        regex: ".*\/models\/[^\/]*.rb",
        stack_id: 22,
        team_id: 2
      },
      {
        id: 23,
        label: "Controller interaction & querying?",
        slug: "rails-controller",
        regex: ".*\/controllers\/[^\/]*.rb",
        stack_id: 22,
        team_id: 2
      },
      {
        id: 24,
        label: "Notification & service worker streaming",
        slug: "rails-channels",
        regex: ".*\/channels\/.*",
        stack_id: 22,
        team_id: 2
      },
      {
        id: 25,
        label: "Background jobs",
        slug: "rails-jobs",
        regex: ".*\/jobs\/[^\/]*.rb",
        stack_id: 22,
        team_id: 2
      },
      {
        id: 26,
        label: "Mailing",
        slug: "rails-mailer",
        regex: ".*\/mailers\/.*",
        stack_id: 22,
        team_id: 2
      },
      {
        id: 27,
        label: "Model presenters",
        slug: "rails-presenters",
        regex: ".*\/presenters\/.*",
        stack_id: 22,
        team_id: 2
      },
      {
        id: 28,
        label: "ERB Views",
        slug: "rails-views",
        regex: ".*\/views\/.*",
        stack_id: 22,
        team_id: 2
      },
      {
        id: 29,
        label: "Database schema & migrations",
        slug: "rails-db",
        regex: ".*\/db\/.*",
        stack_id: 22,
        team_id: 2
      },
      {
        id: 210,
        label: "Unit testing controllers",
        slug: "rails-testing-controllers",
        regex: ".*\/spec\/controllers\/.*",
        stack_id: 22,
        team_id: 2
      },
      {
        id: 211,
        label: "Testing factories",
        slug: "rails-testing-factories",
        regex: ".*\/spec\/factories\/.*",
        stack_id: 22,
        team_id: 2
      },
      {
        id: 212,
        label: "End to end testing",
        slug: "rails-testing-end-to-end",
        regex: ".*\/(spec\/features|helpers)\/.*",
        stack_id: 22,
        team_id: 2
      },
      {
        id: 213,
        label: "Testing jobs",
        slug: "rails-testing-jobs",
        regex: ".*\/spec\/jobs\/.*",
        stack_id: 22,
        team_id: 2
      },
      {
        id: 214,
        label: "Unit testing models",
        slug: "rails-testing-models",
        regex: ".*\/spec\/models\/.*",
        stack_id: 22,
        team_id: 2
      },
      {
        id: 215,
        label: "Rails testing modules",
        slug: "rails-testing-modules",
        regex: ".*\/spec\/support\/.*",
        stack_id: 22,
        team_id: 2
      },
      {
        id: 216,
        label: "All round ruby",
        slug: "ruby-all",
        regex: "(.*\/*.rb$)|.*Gemfile",
        stack_id: 21,
        team_id: 2
      },
      {
        id: 217,
        label: "Api consumption (CS)",
        slug: "coffeescript-api",
        regex: ".*\/javascripts\/api.*..coffee",
        stack_id: 23,
        team_id: 2
      },
      {
        id: 218,
        label: "Interactive UI (CS)",
        slug: "coffeescript-ui",
        regex: ".*\/javascripts\/ui.*..coffee",
        stack_id: 23,
        team_id: 2
      },
      {
        id: 219,
        label: "Other js (CS)",
        slug: "coffeescript-other",
        regex: ".*\/javascripts\/[^(api|ui)].*.coffee$",
        stack_id: 23,
        team_id: 2
      },
      {
        id: 220,
        label: "Styling with SASS",
        slug: "sass-styling",
        regex: ".*\/stylesheets\/.*.scss$",
        stack_id: 5,
        team_id: 2
      }
    ], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('skills', null, {});
  }
};

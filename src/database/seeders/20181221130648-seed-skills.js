'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('skills', [
      {
        id: 1,
        label: "Rails endpoints",
        slug: "rails-router",
        regex: ".*routes\.rb",
        stack_id: 2
      },
      {
        id: 2,
        label: "Active record models",
        slug: "rails-models",
        regex: ".*\/models\/[^\/]*.rb",
        stack_id: 2
      },
      {
        id: 3,
        label: "Controller interaction & querying?",
        slug: "rails-controller",
        regex: ".*\/controllers\/[^\/]*.rb",
        stack_id: 2
      },
      {
        id: 4,
        label: "Notification & service worker streaming",
        slug: "rails-channels",
        regex: ".*\/channels\/.*",
        stack_id: 2
      },
      {
        id: 5,
        label: "Background jobs",
        slug: "rails-jobs",
        regex: ".*\/jobs\/[^\/]*.rb",
        stack_id: 2
      },
      {
        id: 6,
        label: "Mailing",
        slug: "rails-mailer",
        regex: ".*\/mailers\/.*",
        stack_id: 2
      },
      {
        id: 7,
        label: "Model presenters",
        slug: "rails-presenters",
        regex: ".*\/presenters\/.*",
        stack_id: 2
      },
      {
        id: 8,
        label: "ERB Views",
        slug: "rails-views",
        regex: ".*\/views\/.*",
        stack_id: 2
      },
      {
        id: 9,
        label: "Database schema & migrations",
        slug: "rails-db",
        regex: ".*\/db\/.*",
        stack_id: 2
      },
      {
        id: 10,
        label: "Unit testing controllers",
        slug: "rails-testing-controllers",
        regex: ".*\/spec\/controllers\/.*",
        stack_id: 2
      },
      {
        id: 11,
        label: "Testing factories",
        slug: "rails-testing-factories",
        regex: ".*\/spec\/factories\/.*",
        stack_id: 2
      },
      {
        id: 12,
        label: "End to end testing",
        slug: "rails-testing-end-to-end",
        regex: ".*\/(spec\/features|helpers)\/.*",
        stack_id: 2
      },
      {
        id: 13,
        label: "Testing jobs",
        slug: "rails-testing-jobs",
        regex: ".*\/spec\/jobs\/.*",
        stack_id: 2
      },
      {
        id: 14,
        label: "Unit testing models",
        slug: "rails-testing-models",
        regex: ".*\/spec\/models\/.*",
        stack_id: 2
      },
      {
        id: 15,
        label: "Rails testing modules",
        slug: "rails-testing-modules",
        regex: ".*\/spec\/support\/.*",
        stack_id: 2
      },
      {
        id: 16,
        label: "All round ruby",
        slug: "ruby-all",
        regex: "(.*\/*.rb$)|.*Gemfile",
        stack_id: 1
      },
      {
        id: 17,
        label: "Api consumption (CS)",
        slug: "coffeescript-api",
        regex: ".*\/javascripts\/api.*..coffee",
        stack_id: 3
      },
      {
        id: 18,
        label: "Interactive UI (CS)",
        slug: "coffeescript-ui",
        regex: ".*\/javascripts\/ui.*..coffee",
        stack_id: 3
      },
      {
        id: 19,
        label: "Other js (CS)",
        slug: "coffeescript-other",
        regex: ".*\/javascripts\/[^(api|ui)].*.coffee$",
        stack_id: 3
      },
      {
        id: 20,
        label: "Styling with SASS",
        slug: "sass-styling",
        regex: ".*\/stylesheets\/.*.scss$",
        stack_id: 4
      }
    ], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('skills', null, {});
  }
};

const axios = require("axios");
const MockAdapter = require("axios-mock-adapter");

// This sets the mock adapter on the default instance
const mock = new MockAdapter(axios);

// data endpoints
mock
  .onGet("/api/data/repo_hierarchy")
  .reply(200, require("../fixtures/repo_hierarchy.json"));
mock
  .onGet("/api/data/amount_of_repos")
  .reply(200, require("../fixtures/open_source_vs_ep_repos.json"));
//mock.onGet('/api/data/device_percentage').reply(200, require('../fixtures/device_percentage.json'))
mock
  .onGet("/api/data/customer_birthdays")
  .reply(200, require("../fixtures/customer_birthdays.json"));

// configuration endpoints
mock
  .onGet("/api/dashboard/repo_dash_config")
  .reply(200, require("../fixtures/repo_dash_config.json"));

// dashboard list endpoint
mock.onGet("/api/dashboard-list").reply(200, [
  {
    path: "repo_dash_config",
    title: "Why the rich get richer",
    description:
      "The cheez cost insights dashboard contains data about the organization's food cost branch hierarchy, a stacked line graph comparison of sales vs cost repositories, and a scatter graph plot of custormer's birthdays.",
  },
  {
    path: "repo_dash_config",
    title: "Org Repository Insights",
    description:
      "The cheez repository insights dashboard contains data about the organization's current branch hierarchy, a stacked line graph comparison of open-source vs enterprise repositories, and a radial line graph comparing total devices to enterprise managed devices that contain codebase from the organization.",
  },
  {
    path: "repo_dash_config",
    title: "Org Repository Insights",
    description:
      "The cheez repository insights dashboard contains data about the organization's current branch hierarchy, a stacked line graph comparison of open-source vs enterprise repositories, and a radial line graph comparing total devices to enterprise managed devices that contain codebase from the organization.",
  },
  {
    path: "repo_dash_config",
    title: "Org Repository Insights",
    description:
      "The cheez repository insights dashboard contains data about the organization's current branch hierarchy, a stacked line graph comparison of open-source vs enterprise repositories, and a radial line graph comparing total devices to enterprise managed devices that contain codebase from the organization.",
  },
  {
    path: "repo_dash_config",
    title: "Org Repository Insights",
    description:
      "The cheez repository insights dashboard contains data about the organization's current branch hierarchy, a stacked line graph comparison of open-source vs enterprise repositories, and a radial line graph comparing total devices to enterprise managed devices that contain codebase from the organization.",
  },
  {
    path: "repo_dash_config",
    title: "Org Repository Insights",
    description:
      "The cheez repository insights dashboard contains data about the organization's current branch hierarchy, a stacked line graph comparison of open-source vs enterprise repositories, and a radial line graph comparing total devices to enterprise managed devices that contain codebase from the organization.",
  },
]);

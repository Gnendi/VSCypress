const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://cypress.vivifyscrum-stage.com",
  },
  env: {
    // password:'test12345'
  }
});

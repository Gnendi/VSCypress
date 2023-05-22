const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://cypress.vivifyscrum-stage.com/',
    env: {
      apiUrl:'https://cypress-api.vivifyscrum-stage.com/api/v2',
      email: 'jovanjovan@gmail.com',
      password: 'jovan12345'
    }
  },
});

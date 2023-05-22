const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
<<<<<<< HEAD
    baseUrl: 'https://cypress.vivifyscrum-stage.com/',
    env: {
      apiUrl:'https://cypress-api.vivifyscrum-stage.com/api/v2',
      email: 'jovanjovan@gmail.com',
      password: 'jovan12345'
    }
=======
    baseUrl: "https://cypress.vivifyscrum-stage.com/",
  },
  env: {
    orgId: "",
>>>>>>> 7bd229ea89d82bafc0c7cd29c4d128681cd56b0a
  },
});

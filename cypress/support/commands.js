// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add("loginBE", () => {
  cy.request({
    method: "POST",
    url: "https://cypress-api.vivifyscrum-stage.com/api/v2/login",
    body: {
      email: "jovanjovan@gmail.com",
      password: "jovan12345",
    },
  }).then((response) => {
    window.localStorage.setItem("token", response.body.token);
    window.localStorage.setItem("user", JSON.stringify(response.body.user));
    window.localStorage.setItem("user_id", response.body.user.id);
  });
});

Cypress.Commands.add("createOrganization", (orgName) => {
  cy.request({
    method: "POST",
    url: "https://cypress-api.vivifyscrum-stage.com/api/v2/organizations",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: {
      name: orgName,
    },
  }).then((response) => {
    window.localStorage.setItem("orgId", response.body.id);
  });
});

Cypress.Commands.add("createScrumBoard", (boardName, orgId) => {
  cy.request({
    method: "POST",
    url: "https://cypress-api.vivifyscrum-stage.com/api/v2/boards",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: {
      name: boardName,
      type: "scrum_board",
      organization_id: orgId,
    },
  });
});

Cypress.Commands.add("deleteOrganization", (orgId) => {
  cy.request({
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    url: `https://cypress-api.vivifyscrum-stage.com/api/v2/organizations/${orgId}`,
    body: {
      passwordOrEmail: "jovan12345",
    },
  });
});

Cypress.Commands.add("deleteBoard", (boardId) => {
  cy.request({
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    url: `https://cypress-api.vivifyscrum-stage.com/api/v2/boards/${boardId}`,
  });
});

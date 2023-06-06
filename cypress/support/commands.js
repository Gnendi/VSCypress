import '@4tw/cypress-drag-drop'

Cypress.Commands.add("loginBE", () => {
  cy.request({
    method: "POST",
    url: "https://cypress-api.vivifyscrum-stage.com/api/v2/login",
    body: {
      email: "jovanjovan@gmail.com",
      password: "test12345",
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
    }
  }).then((response) => {
    console.log(response.body.code, "CODEEEEE")
    window.localStorage.setItem("boardId", response.body.id);
  })
});

Cypress.Commands.add("createTask", (body) => {
  cy.request({
    method: "POST",
    url: "https://cypress-api.vivifyscrum-stage.com/api/v2/tasks",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: body
  }).then((response) => {
    console.log(response.body.code, "CODEEEEE")
    window.localStorage.setItem("taskId", response.body.id);
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
      passwordOrEmail: "test12345",
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

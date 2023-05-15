Cypress.Commands.add("loginBE", () => {
    cy.request({
      method: "POST",
      url: `${Cypress.env("apiUrl")}/login`,
      body: {
        email: Cypress.env("testUserEmail"),
        password: Cypress.env("testUserPass"),
      },
    }).then((response) => {
      window.localStorage.setItem("token", response.body.token);
      window.localStorage.setItem("user", JSON.stringify(response.body.user));
      window.localStorage.setItem("user_id", response.body.user.id);
    });
  });

  
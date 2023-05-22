describe("test request", () => {
  before("test create org", () => {
    cy.loginBE();
    cy.createOrganization("created via BEEEEEEEEEEEEE");
    cy.log(Cypress.env("orgId"));
  });

  it("visit app", () => {
    cy.visit("https://cypress.vivifyscrum-stage.com/");
    cy.contains("My Organizations").should("be.visible");
  });

  after("clean up", () => {
    let orgId = window.localStorage.getItem("orgId");
    cy.deleteOrganization(orgId);
  });
});

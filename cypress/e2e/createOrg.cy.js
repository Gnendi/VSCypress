import { createOrg } from "../POM/createOrgPage";


describe ('create_organization_from dropdown_menu', () => {
    beforeEach (() => {
        cy.loginBE();
    })
it('create_org', () => {

    const password = 'test1234'

    cy.intercept ({
        method: "POST",
        url: 'https://cypress-api.vivifyscrum-stage.com/api/v2/organizations',
    }).as('createdOrg');

    cy.intercept('POST', 'https://cypress-api.vivifyscrum-stage.com/api/v2/organizations/*').as('deleteOrg')

        cy.visit('https://cypress.vivifyscrum-stage.com/my-organizations');
        createOrg.addNew.click()
        createOrg.addOrg.click()
        createOrg.addOrgInput.type('Test')
        createOrg.addOrgModalNextBtn.click()
        createOrg.addOrgLogoModalCreateBtn.click()
        createOrg.addOrgModalOkBtn.click()
        createOrg.createdNewOrg.click()
        cy.wait ('@createdOrg').then ((intercept) => {
            let orgId = intercept.response.body.id 
            cy.visit (`https://cypress.vivifyscrum-stage.com/organizations/${orgId}/settings`)
        createOrg.deleteBtn.click()
        .should('be.visible')
        cy.wait(500)
        createOrg.deleteOrgInput.type('test12345')
        createOrg.deleteModalYesBtn.click()
        cy.wait('@deleteOrg').then(response => console.log('RESPONSE', response))
      })
    })
})

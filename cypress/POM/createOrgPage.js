class CreateOrg {
get addNew () {
    return cy.get ('.vs-c-list-btn--new-workspace')
}
get addOrg () {
    return cy.contains ('span', 'Add Organization')
}
get addOrgInput () {
    return cy.get ('input')
}
get addOrgModalNextBtn () {
    return cy.get ('[name="next_btn"]')
}
get addOrgLogoModalCreateBtn () {
    return cy.get ('[name="next_btn"]')
}
get addOrgModalOkBtn () {
    return cy.get ('.vs-c-modal--features-confirm-button')
}
get createdNewOrg () {
    return cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > [effect="dark"] > .vs-c-list__btn')
}
get deleteBtn () {
    return cy.get ('.vs-c-btn--warning')
}
get deleteModalYesBtn () {
    return cy.get ('[name="save-btn"]')
}

get deleteOrgModal() {
    return cy.get('.vs-c-modal')
}

get deleteOrgInput() {
    return this.deleteOrgModal.find('input')
}
}

export const createOrg = new CreateOrg 
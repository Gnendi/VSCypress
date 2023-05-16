class createLabel {
    get addNewOrganization () {
        return cy.get('.vs-c-my-organization--add-new > .vs-c-my-organization__content > .vs-c-media > .vs-c-media__object > .vs-c-my-organization__avatar').click()
    }

    get organizationName () {
        return cy.get('input').type('test').click()
    }

    get modalBoardOkBtn () {
        return cy.get('.vs-c-modal--features-button').click()
    }

    get nextBtn () {
        return cy.get('[name="next_btn"]').click()
    }

    get inputEnterTitle () {
        return cy.get('[name="name"]').type('test').click()
    }

    get addNewBoard () {
        return cy.get('.vs-c-img--board-avatar').click()
    }

    get modalScrumCheckbox () {
        return cy.get('[name="type_scrum"]').click()
    }
}

export const CreateLabel = new createLabel
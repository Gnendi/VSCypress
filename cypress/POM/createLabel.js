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
        return cy.get('.vs-c-media__object > .vs-c-img--avatar').click()
    }

    get modalScrumCheckbox () {
        return cy.get('[name="type_scrum"]').click()
    }

    get labelBtn () {
        return cy.get('[data-cy="board-labels"] > [effect="dark"] > :nth-child(2) > .vs-c-site-logo').click()
    }
}

export const CreateLabel = new createLabel
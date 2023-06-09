class attachLabel {
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

    get editLabel () {
        return cy.get(':nth-child(9) > .el-table_1_column_6 > .cell > .vs-c-labels-table-worklog-cell > .vs-u-text--right > a.el-button > .el-icon-edit').click()
    }

    get labelNameInput () {
        return cy.get(':nth-child(1) > .el-form-item__content > .el-input > .el-input__inner').type('Test').click()
    }

    get descriptionInput () {
        return cy.get(':nth-child(2) > .el-form-item__content > .el-input > .el-input__inner').type('Test').click()
    }

    get saveBtn () {
        return cy.get('.vs-c-btn--primary').click()
    }

    get deleteBtn () {
        return cy.get('.vs-c-btn--warning').click()
    }

    get modalRemoveLabelYesBtn () {
        return cy.get('.vs-c-modal__footer > .vs-u-text--right > .el-button--success').click()
    }

    get backlogBtn () {
        return cy.get('[data-cy="board-backlog"] > span > div > .vs-c-site-logo').click()
    }

    get sprint () {
        return cy.get('.vs-c-task-card__body').click()
    }

    get managesLabelBtn () {
        return cy.get('.vs-c-task-labels > .vs-c-section__header > .vs-u-actions > .vs-c-dropdown-wrapper > .el-button > span').click()
    }
    
    get labelColor () {
        return cy.get(':nth-child(3) > .vs-c-label').click()
    }

    get closeBtn () {
        return cy.get('.vs-c-item-modal-close > .el-icon-close').click()
    }

  

}

export const AttachLabel = new attachLabel
class createLabel {
    get addNewOrganizationPlusBtn () {
        return cy.get('.vs-c-my-organization--add-new > .vs-c-my-organization__content > .vs-c-media > .vs-c-media__object > .vs-c-my-organization__avatar').click()
    }

    get organizationNameInput () {
        return cy.get('input').type('test').click()
    }

    get modalBoardOkBtn () {
        return cy.get('.vs-c-modal--features-button').click()
    }

    get nextBtn () {
        return cy.get('[name="next_btn"]').click()
    }

    get createBtn () {
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

    get createdLabelEdit () {
        return cy.get(':nth-child(1) > .el-table_1_column_12 > .cell > .vs-c-labels-table-worklog-cell > .vs-u-text--right > a.el-button').click()
    }

    get colorEditPanel () {
        return cy.get('.vs-c-color-picker-indicator').click()
    }

    get colorInputClear () {
        return cy.get('.input__input').clear()
    }

    get colorInput () {
        return cy.get('.input__input').type('#008000')
    }

    get confirmBtnOnColorPanel () {
        return cy.get(':nth-child(2) > .el-button > span').click()
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

    get organizationBtn () {
        return cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > [effect="dark"] > .vs-c-list__btn').click()
    }

    get setingsBtn () {
        return cy.get('[data-cy="organization-configuration"] > span > div > .vs-c-site-logo').click()
    }

    get deleteOrganizationBtn () {
        return cy.get(':nth-child(8) > .vs-c-settings-section > .vs-c-settings-section-form > .vs-c-btn').click()
    }

    get modalEnterCurrentPassword () {
        return cy.get('.vs-input-border > .el-input > .el-input__inner').type('jovan12345')
    }

    get modalDeleteOrganizationYesBtn () {
        return cy.get('.el-button--success').click()
    }

    

}

export const CreateLabel = new createLabel
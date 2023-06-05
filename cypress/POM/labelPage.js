class LabelPage {

    get labelBtn () {
        return cy.get('[data-cy="board-labels"] > span > div > .vs-c-site-logo')
    }

    // get editLabel () {
    //     return cy.get(':nth-child(9) > .el-table_1_column_6 > .cell > .vs-c-labels-table-worklog-cell > .vs-u-text--right > a.el-button > .el-icon-edit')
    // }

    get labelsTable() {
        return cy.get('.vs-c-labels-table').find('tbody');
    }

    get labelsTableRow() {
        return this.labelsTable.find('tr');
    }

    get firstEditLabelButton() {
        return this.labelsTableRow.first().find('a');
    }

    get labelNameInput () {
        return cy.get(':nth-child(1) > .el-form-item__content > .el-input > .el-input__inner')
    }

    get descriptionInput () {
        return cy.get(':nth-child(2) > .el-form-item__content > .el-input > .el-input__inner')
    }

    get saveBtn () {
        return cy.get('.vs-u-text--right > .vs-c-btn--primary')
    }

    get createdLabelEdit () {
        return cy.get(':nth-child(1) > .el-table_1_column_12 > .cell > .vs-c-labels-table-worklog-cell > .vs-u-text--right > a.el-button')
    }

    get colorEditPanel () {
        return cy.get('.vs-c-color-picker-indicator')
    }

    get colorInputClear () {
        return cy.get('.input__input')
    }

    get colorInput () {
        return cy.get('.input__input')
    }

    get confirmBtnOnColorPanel () {
        return cy.get('.el-row > :nth-child(2) > .el-button')
    }

    get deleteBtn () {
        return cy.get(':nth-child(1) > .el-table_1_column_6 > .cell > .vs-c-labels-table-worklog-cell > .vs-u-text--right > button.el-button > span')
    }

    get modalRemoveLabelYesBtn () {
        return cy.get('.vs-c-modal__footer > .vs-u-text--right > .el-button--success')
    }

    get backlogBtn () {
        return cy.get('[data-cy="board-backlog"] > span > div > .vs-c-site-logo').click()
    }

    get organizationBtn () {
        return cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > [effect="dark"] > .vs-c-list__btn').click()
    }

    get setingsBtn () {
        return cy.get('[data-cy="organization-configuration"] > span > div > .vs-c-site-logo')
    }

    get deleteOrganizationBtn () {
        return cy.get(':nth-child(8) > .vs-c-settings-section > .vs-c-settings-section-form > .vs-c-btn')
    }

    get modalEnterCurrentPassword () {
        return cy.get('.vs-input-border > .el-input > .el-input__inner')
    }

    get modalDeleteOrganizationYesBtn () {
        return cy.get('.el-button--success')
    }
    get productBacklog () {
        return cy.get('[data-cy="board-backlog"] > span > div > .vs-c-site-logo')
    }
   
    get managesLabelBtn () {
        return cy.get('.vs-c-task-labels > .vs-c-section__header > .vs-u-actions > .vs-c-dropdown-wrapper > .el-button > span')
    }
    
    get labelColor () {
        return cy.get(':nth-child(3) > .vs-c-label')
    }

    get closeBtn () {
        return cy.get('.vs-c-item-modal-close > .el-icon-close')
    }

    get taskLableBtn () {
        return cy.get ('button[name="add-label-button"]')
    }

    get myLabel () {
        return cy.get ('span[title="Test"]')
    }

    get closeTask () {
        return cy.get('button[name="close-item-modal-btn"]')
    }

    createLabel() {
        cy.get('.vs-c-item-modal-close').click()
        labelPage.labelBtn.click()
        .should ('exist')
        .and ('be.visible')
        .and ('have.class', 'vs-c-site-logo')
        .and ('have.css', 'color', 'rgb(77, 77, 77)')
        .and ('have.css', 'font-family','OpenSans, sans-serif')
        labelPage.labelsTable
        labelPage.labelsTableRow
        labelPage.firstEditLabelButton.click()
        labelPage.labelNameInput.type('Test').click()
        .should ('exist')
        .and ('be.visible')
        .and ('have.class', 'el-input__inner')
        .and ('have.css', 'color', 'rgb(77, 77, 77)')
        labelPage.descriptionInput.type('Test').click()
        .should ('exist')
        .and ('be.visible')
        .and ('have.class', 'el-input__inner')
        .and ('have.css', 'color', 'rgb(77, 77, 77)')
        labelPage.saveBtn.click()
        .should ('exist')
        .and ('be.visible')
        .and ('have.css', 'border-color', 'rgba(0, 0, 0, 0)')
        .and ('contain.text','\n            Save\n          ')
        .and ('have.css', 'font-family','Arial')
        labelPage.labelBtn.click()
        .should ('exist')
        .and ('be.visible')
        .and ('have.class', 'vs-c-site-logo')
        .and ('have.css', 'color', 'rgb(77, 77, 77)')
        .and ('have.css', 'font-family','OpenSans, sans-serif')
        labelPage.createdLabelEdit.click()
        labelPage.colorEditPanel.click({ force: true })
        .should ('exist')
        .and ('be.visible')
        .and ('have.class', 'vs-c-color-picker-indicator')
        .and ('have.css', 'background-color', 'rgb(235, 42, 125)')
        .and ('have.css', 'font-family','OpenSans, sans-serif')
        .and ('have.css', 'font-size','14px')
        .and ('have.css', 'color', 'rgb(255, 255, 255)')
        labelPage.colorInputClear.clear()
        labelPage.colorInput.type('#008000')
        .should ('exist')
        .and ('be.visible')
        .and ('have.class', 'input__input')
        .and ('have.css', 'font-size','11px')
        .and ('have.css', 'color', 'rgb(51, 51, 51)')
        labelPage.confirmBtnOnColorPanel.click()
        .should ('exist')
        .and ('not.be.visible')
        .and ('have.css', 'background-color', 'rgb(78, 174, 147)')
        .and ('have.css', 'border-color', 'rgb(78, 174, 147)')
        .and ('have.css', 'color', 'rgb(255, 255, 255)')
        .and ('contain.text', 'Confirm')
        labelPage.saveBtn.click()
        .should ('exist')
        .and ('be.visible')
        .and ('have.css', 'border-color', 'rgba(0, 0, 0, 0)')
        .and ('contain.text','\n            Save\n          ')
        .and ('have.css', 'font-family','Arial')
    }
    
}

export const labelPage = new LabelPage();


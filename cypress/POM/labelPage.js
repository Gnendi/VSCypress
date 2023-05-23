class LabelPage {
    get addNewOrganizationPlusBtn () {
        return cy.get('.vs-c-my-organization--add-new > .vs-c-my-organization__content > .vs-c-media')
    }

    get organizationNameInput () {
        return cy.get('input').type('test')
    }

    get modalBoardOkBtn () {
        return cy.get('.vs-c-modal--features-button')
    }

    get nextBtn () {
        return cy.get('[name="next_btn"]')
    }

    get createBtn () {
        return cy.get('[name="next_btn"]')
    }

    get inputEnterTitle () {
        return cy.get('[name="name"]')
    }

    get addNewBoard () {
        return cy.get('.vs-c-media__object > .vs-c-img--avatar')
    }

    get modalScrumCheckbox () {
        return cy.get('[name="type_scrum"]')
    }

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
        return cy.get('.vs-c-btn--primary')
    }

    // get createdLabelEdit () {
    //     return cy.get(':nth-child(1) > .el-table_1_column_12 > .cell > .vs-c-labels-table-worklog-cell > .vs-u-text--right > a.el-button')
    // }

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
        return cy.get(':nth-child(2) > .el-button > span')
    }

    get deleteBtn () {
        return cy.get('.vs-c-btn--warning')
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

    createLabel() {
        // labelPage.addNewOrganizationPlusBtn.click()
        // .should ('exist')
        // .and ('be.visible')
        // .and ('have.class', 'vs-c-media')
        // .and ('have.css', 'color', 'rgb(77, 77, 77)')
        // .and ('have.css', 'font-family','OpenSans, sans-serif')
        // labelPage.organizationNameInput.click()
        // .should ('exist')
        // .and ('be.visible')
        // .and ('attr', 'placeholder', 'Enter name...')
        // .and ('have.css', 'background-color', 'rgb(78, 174, 147)')
        // labelPage.nextBtn.click()
        // .should ('exist')
        // .and ('be.visible')
        // .and ('have.class', 'el-button--success')
        // .and ('contain.text','Create')
        // .and ('have.css', 'font-family','Arial')
        // labelPage.createBtn.click()
        // labelPage.modalBoardOkBtn.click()
        // labelPage.addNewBoard.click()
        // .should ('exist')
        // .and ('be.visible')
        // .and ('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
        // .and ('have.css', 'color', 'rgb(255, 255, 255)')
        // .and ('have.class', 'vs-c-img--avatar')
        // labelPage.inputEnterTitle.type('test').click()
        // .should ('exist')
        // .and ('be.visible')
        // .and ('attr', 'placeholder', 'Enter title...')
        // .and ('have.css', 'background-color', 'rgb(78, 174, 147)')
        // .and ('have.css', 'color', 'rgb(255, 255, 255)')
        // .and ('have.css', 'font-family','OpenSans, sans-serif')
        // labelPage.nextBtn
        // .should ('exist')
        // .and ('be.visible')
        // .and ('have.class', 'el-button--large')
        // .and ('contain.text','Next')
        // .and ('have.css', 'font-family','Arial')
        // labelPage.nextBtn.click()
        // .should ('exist')
        // .and ('be.visible')
        // .and ('have.class', 'el-button--large')
        // .and ('have.css', 'border-color', 'rgba(0, 0, 0, 0)')
        // .and ('contain.text','Next')
        // .and ('have.css', 'font-family','Arial')
        // labelPage.modalScrumCheckbox.click()
        // .should ('exist')
        // .and ('be.visible')
        // .and ('have.class', 'vs-c-radio-check')
        // .and ('have.css', 'font-family','OpenSans, sans-serif')
        // .and ('have.css', 'color', 'rgb(255, 255, 255)')
        // .and ('have.css', 'font-size', '14px')
        // labelPage.nextBtn.click()
        // .should ('exist')
        // .and ('be.visible')
        // .and ('have.class', 'el-button--large')
        // .and ('contain.text','Next')
        // .and ('have.css', 'font-family','Arial')
        // labelPage.nextBtn.click()
        // .should ('exist')
        // .and ('be.visible')
        // .and ('have.class', 'el-button--large')
        // .and ('contain.text','Next')
        // .and ('have.css', 'font-family','Arial')
        // labelPage.nextBtn.click()
        // labelPage.nextBtn.click()
        // labelPage.labelBtn.click()
        // .should ('exist')
        // .and ('be.visible')
        // .and ('have.class', 'vs-c-site-logo')
        // .and ('have.css', 'color', 'rgb(77, 77, 77)')
        // .and ('have.css', 'font-family','OpenSans, sans-serif')
        // labelPage.labelsTable
        // labelPage.labelsTableRow
        // labelPage.firstEditLabelButton.click()
        // // labelPage.editLabel.click()
        // labelPage.labelNameInput.type('Test').click()
        // .should ('exist')
        // .and ('be.visible')
        // .and ('have.class', 'el-input__inner')
        // .and ('have.css', 'color', 'rgb(77, 77, 77)')
        // labelPage.descriptionInput.type('Test').click()
        // .should ('exist')
        // .and ('be.visible')
        // .and ('have.class', 'el-input__inner')
        // .and ('have.css', 'color', 'rgb(77, 77, 77)')
        // labelPage.saveBtn.click()
        // .should ('exist')
        // .and ('be.visible')
        // .and ('have.css', 'border-color', 'rgba(0, 0, 0, 0)')
        // .and ('contain.text','\n            Save\n          ')
        // .and ('have.css', 'font-family','Arial')
        // labelPage.labelBtn.click()
        // .should ('exist')
        // .and ('be.visible')
        // .and ('have.class', 'vs-c-site-logo')
        // .and ('have.css', 'color', 'rgb(77, 77, 77)')
        // .and ('have.css', 'font-family','OpenSans, sans-serif')
        // labelPage.createdLabelEdit.click()
        // labelPage.colorEditPanel.click({ force: true })
        // .should ('exist')
        // .and ('be.visible')
        // .and ('have.class', 'vs-c-color-picker-indicator')
        // .and ('have.css', 'background-color', 'rgb(235, 42, 125)')
        // .and ('have.css', 'font-family','OpenSans, sans-serif')
        // .and ('have.css', 'font-size','14px')
        // .and ('have.css', 'color', 'rgb(255, 255, 255)')
        // labelPage.colorInputClear.clear()
        // labelPage.colorInput.type('#008000')
        // .should ('exist')
        // .and ('be.visible')
        // .and ('have.class', 'input__input')
        // .and ('have.css', 'font-size','11px')
        // .and ('have.css', 'color', 'rgb(51, 51, 51)')
        // labelPage.confirmBtnOnColorPanel.click()
        // .click({ force: true })
        // .should ('exist')
        // .and ('not.be.visible')
        // .and ('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
        // .and ('have.css', 'border-color', 'rgb(255, 255, 255)')
        // .and ('have.css', 'color', 'rgb(255, 255, 255)')
        // .and ('contain.text', 'Confirm')
        // labelPage.saveBtn.click()
        // .should ('exist')
        // .and ('be.visible')
        // .and ('have.css', 'border-color', 'rgba(0, 0, 0, 0)')
        // .and ('contain.text','\n            Save\n          ')
        // .and ('have.css', 'font-family','Arial')
        // labelPage.deleteBtn.click()
        // .should ('exist')
        // .and ('be.visible')
        // .and ('have.css', 'background-color', 'rgb(237, 57, 1)')
        // .and ('have.css', 'border-color', 'rgb(237, 57, 1)')
        // .and ('contain.text','Delete')
        // .and ('have.css', 'font-family','Arial')
        // labelPage.modalRemoveLabelYesBtn.click()
        // labelPage.organizationBtn.click()
        // .should ('exist')
        // .and ('be.visible')
        // labelPage.setingsBtn.click()
        // labelPage.deleteBtn.click()
        // labelPage.modalEnterCurrentPassword.type('jovan12345')
        // labelPage.modalDeleteOrganizationYesBtn.click()

    }

}

export const labelPage = new LabelPage();
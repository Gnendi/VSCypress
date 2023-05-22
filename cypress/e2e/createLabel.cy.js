import { faker } from "@faker-js/faker";
import { CreateLabel } from "../POM/createLabelPage";
import { loginPage } from "../POM/loginPage";

var email = 'jovanjovan@gmail.com';
var password = 'jovan12345';

describe ('label', () => {
    beforeEach (() => {
        cy.visit ('/');
        loginPage.login (email, password)
    })

    it ('create label and delete organization', () => {
        CreateLabel.addNewOrganizationPlusBtn
        .should ('exist')
        .and ('be.visible')
        .and ('have.class', 'vs-c-my-organization__avatar')
        .and ('have.css', 'color', 'rgb(77, 77, 77)')
        .and ('have.css', 'font-family','OpenSans, sans-serif')
        CreateLabel.organizationNameInput
        .should ('exist')
        .and ('be.visible')
        .and ('attr', 'placeholder', 'Enter name...')
        .and ('have.css', 'background-color', 'rgb(78, 174, 147)')
        CreateLabel.nextBtn
        .should ('exist')
        .and ('be.visible')
        .and ('have.css', 'border-color', 'rgb(78, 174, 147)')
        .and ('have.class', 'el-button--success')
        .and ('contain.text','Create')
        .and ('have.css', 'font-family','Arial')
        CreateLabel.createBtn
        CreateLabel.modalBoardOkBtn
        CreateLabel.addNewBoard
        .should ('exist')
        .and ('be.visible')
        .and ('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
        .and ('have.css', 'color', 'rgb(255, 255, 255)')
        .and ('have.class', 'vs-c-img--avatar')
        CreateLabel.inputEnterTitle
        .should ('exist')
        .and ('be.visible')
        .and ('attr', 'placeholder', 'Enter title...')
        .and ('have.css', 'background-color', 'rgb(78, 174, 147)')
        .and ('have.css', 'color', 'rgb(255, 255, 255)')
        .and ('have.css', 'font-family','OpenSans, sans-serif')
        CreateLabel.nextBtn
        .should ('exist')
        .and ('be.visible')
        .and ('have.class', 'el-button--large')
        .and ('have.css', 'border-color', 'rgba(0, 0, 0, 0)')
        .and ('contain.text','Next')
        .and ('have.css', 'font-family','Arial')
        CreateLabel.modalScrumCheckbox
        .should ('exist')
        .and ('be.visible')
        .and ('have.class', 'vs-c-radio-check')
        .and ('have.css', 'font-family','OpenSans, sans-serif')
        .and ('have.css', 'color', 'rgb(255, 255, 255)')
        .and ('have.css', 'font-size', '14px')
        CreateLabel.nextBtn
        .should ('exist')
        .and ('be.visible')
        .and ('have.class', 'el-button--large')
        .and ('have.css', 'border-color', 'rgb(78, 174, 147)')
        .and ('contain.text','Next')
        .and ('have.css', 'font-family','Arial')
        CreateLabel.nextBtn
        .should ('exist')
        .and ('be.visible')
        .and ('have.class', 'el-button--large')
        .and ('have.css', 'border-color', 'rgb(78, 174, 147)')
        .and ('contain.text','Next')
        .and ('have.css', 'font-family','Arial')
        CreateLabel.nextBtn
        .should ('exist')
        .and ('be.visible')
        .and ('have.class', 'el-button--large')
        .and ('have.css', 'border-color', 'rgb(78, 174, 147)')
        .and ('contain.text','Finish')
        .and ('have.css', 'font-family','Arial')
        CreateLabel.nextBtn
        CreateLabel.labelBtn
        .should ('exist')
        .and ('be.visible')
        .and ('have.class', 'vs-c-site-logo')
        .and ('have.css', 'color', 'rgb(77, 77, 77)')
        .and ('have.css', 'font-family','OpenSans, sans-serif')
        CreateLabel.editLabel
        CreateLabel.labelNameInput
        .should ('exist')
        .and ('be.visible')
        .and ('have.class', 'el-input__inner')
        .and ('have.css', 'color', 'rgb(77, 77, 77)')
        CreateLabel.descriptionInput
        .should ('exist')
        .and ('be.visible')
        .and ('have.class', 'el-input__inner')
        .and ('have.css', 'color', 'rgb(77, 77, 77)')
        CreateLabel.saveBtn
        .should ('exist')
        .and ('be.visible')
        .and ('have.css', 'border-color', 'rgba(0, 0, 0, 0)')
        .and ('contain.text','\n            Save\n          ')
        .and ('have.css', 'font-family','Arial')
        CreateLabel.labelBtn
        .should ('exist')
        .and ('be.visible')
        .and ('have.class', 'vs-c-site-logo')
        .and ('have.css', 'color', 'rgb(77, 77, 77)')
        .and ('have.css', 'font-family','OpenSans, sans-serif')
        CreateLabel.createdLabelEdit
        CreateLabel.colorEditPanel
        .should ('exist')
        .and ('be.visible')
        .and ('have.class', 'vs-c-color-picker-indicator')
        .and ('have.css', 'background-color', 'rgb(248, 164, 48)')
        .and ('have.css', 'font-family','OpenSans, sans-serif')
        .and ('have.css', 'font-size','14px')
        .and ('have.css', 'color', 'rgb(255, 255, 255)')
        CreateLabel.colorInputClear
        CreateLabel.colorInput
        .should ('exist')
        .and ('be.visible')
        .and ('have.class', 'input__input')
        .and ('have.css', 'font-size','11px')
        .and ('have.css', 'color', 'rgb(51, 51, 51)')
        CreateLabel.confirmBtnOnColorPanel
        .click({ force: true })
        .should ('exist')
        .and ('not.be.visible')
        .and ('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
        .and ('have.css', 'border-color', 'rgb(255, 255, 255)')
        .and ('have.css', 'color', 'rgb(255, 255, 255)')
        .and ('contain.text', 'Confirm')
        CreateLabel.saveBtn
        .should ('exist')
        .and ('be.visible')
        .and ('have.css', 'border-color', 'rgba(0, 0, 0, 0)')
        .and ('contain.text','\n            Save\n          ')
        .and ('have.css', 'font-family','Arial')
        CreateLabel.deleteBtn
        .should ('exist')
        .and ('be.visible')
        .and ('have.css', 'background-color', 'rgb(254, 87, 35)')
        .and ('have.css', 'border-color', 'rgb(254, 87, 35)')
        .and ('contain.text','Delete')
        .and ('have.css', 'font-family','Arial')
        CreateLabel.modalRemoveLabelYesBtn
        CreateLabel.organizationBtn
        .should ('exist')
        .and ('be.visible')
        CreateLabel.setingsBtn
        CreateLabel.deleteBtn
        CreateLabel.modalEnterCurrentPassword
        CreateLabel.modalDeleteOrganizationYesBtn

    })
})
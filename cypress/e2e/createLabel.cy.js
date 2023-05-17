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
        CreateLabel.createdLabelEdit
        CreateLabel.colorEditPanel
        CreateLabel.colorInputClear
        CreateLabel.colorInput
        // CreateLabel.deleteBtn
        // CreateLabel.modalRemoveLabelYesBtn
        // CreateLabel.organizationBtn
        // CreateLabel.setingsBtn
        // CreateLabel.deleteBtn
        // CreateLabel.modalEnterCurrentPassword
        // CreateLabel.modalDeleteOrganizationYesBtn

    })
})
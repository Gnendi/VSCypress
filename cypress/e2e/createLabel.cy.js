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
        CreateLabel.nextBtn
        CreateLabel.nextBtn
        CreateLabel.nextBtn
        CreateLabel.nextBtn
        CreateLabel.labelBtn
        CreateLabel.editLabel
        CreateLabel.labelNameInput
        CreateLabel.descriptionInput
        CreateLabel.saveBtn
        CreateLabel.deleteBtn
        CreateLabel.modalRemoveLabelYesBtn
        CreateLabel.organizationBtn
        CreateLabel.setingsBtn
        CreateLabel.deleteBtn
        CreateLabel.modalEnterCurrentPassword
        CreateLabel.modalDeleteOrganizationYesBtn

    })
})
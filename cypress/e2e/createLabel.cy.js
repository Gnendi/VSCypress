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

    it ('create label', () => {
        CreateLabel.addNewOrganization
        CreateLabel.organizationName
        CreateLabel.nextBtn
        CreateLabel.nextBtn
        CreateLabel.modalBoardOkBtn
        CreateLabel.addNewBoard
        CreateLabel.inputEnterTitle
        CreateLabel.nextBtn
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

    })
})
import { faker } from "@faker-js/faker";
import { CreateLabel } from "../POM/createLabel";
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
    })
})
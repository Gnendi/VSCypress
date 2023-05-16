import { faker } from "@faker-js/faker";
import { AttachLabel } from "../POM/attachLabelToTicketPage";
import { loginPage } from "../POM/loginPage";
var email = 'jovanjovan@gmail.com';
var password = 'jovan12345';

describe ('label', () => {
    beforeEach (() => {
        cy.visit ('/');
        loginPage.login (email, password)
    })

    it ('attach label', () => {
        AttachLabel.addNewOrganization
        AttachLabel.organizationName
        AttachLabel.nextBtn
        AttachLabel.nextBtn
        AttachLabel.modalBoardOkBtn
        AttachLabel.addNewBoard
        AttachLabel.inputEnterTitle
        AttachLabel.nextBtn
        AttachLabel.modalScrumCheckbox
        AttachLabel.nextBtn
        AttachLabel.nextBtn
        AttachLabel.nextBtn
        AttachLabel.nextBtn
        AttachLabel.sprint
        AttachLabel.managesLabelBtn
        AttachLabel.labelColor
        AttachLabel.closeBtn
        
    })
})
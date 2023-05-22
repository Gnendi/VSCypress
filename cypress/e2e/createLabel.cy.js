import { faker } from "@faker-js/faker";
import { labelPage } from "../POM/labelPage";
import { loginPage } from "../POM/loginPage";
var email = 'jovanjovan@gmail.com';
var password = 'jovan12345';

describe ('label', () => {
    beforeEach (() => {
        cy.loginBE();
        cy.visit ('/');
    })
    

    it ('create label and delete organization', () => {
        labelPage.createLabel()
    })
})
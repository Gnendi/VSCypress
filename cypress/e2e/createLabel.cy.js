import { faker } from "@faker-js/faker";
import { labelPage } from "../POM/labelPage";
import { loginPage } from "../POM/loginPage";
import { storyTask } from "../fixtures/testData";

var email = 'jovanjovan@gmail.com';
var password = 'jovan12345';
let taskCode 
let boardId 
let orgId
describe ('label', () => {
    before (() => {
        cy.loginBE();
        cy.visit ('/');
        cy.createOrganization('Test111111').then(() => {
            expect(window.localStorage.getItem('orgId')).to.exist;
            cy.createScrumBoard('Test', window.localStorage.getItem('orgId'))
            .then(() => {
            cy.createTask(storyTask('created BEEEEEE', window.localStorage.getItem('boardId')))
                boardId = window.localStorage.getItem('boardId');
                orgId = window.localStorage.getItem('boardId');
            })
            taskCode = window.localStorage.getItem('taskCode');
        });
    })

    after(()=>{
        expect(window.localStorage.getItem('token')).to.exist;
        cy.deleteOrganization(orgId);
    });

    it('Create, assert and delete label successfully', () => {
        cy.log("TASK CODE", )
        cy.visit(`https://cypress.vivifyscrum-stage.com/boards/${boardId}/${window.localStorage.getItem('taskCode')}`)
        cy.wait(2000)
        labelPage.createLabel()
    })
    })
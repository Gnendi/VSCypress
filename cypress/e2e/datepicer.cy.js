import { datePicker } from "../POM/datepickerPage";
import { storyTask } from "../fixtures/testData";

let taskCode 
let boardId 
let orgId

describe ('label', () => {
    before (() => {
        cy.loginBE();
        cy.createOrganization('Test111111').then(() => {
            expect(window.localStorage.getItem('orgId')).to.exist;
            cy.createScrumBoard('Test', window.localStorage.getItem('orgId'))
            .then(() => {
            cy.createTask(storyTask('created BEEEEEE', window.localStorage.getItem('boardId')))
                boardId = window.localStorage.getItem('boardId');
                orgId = window.localStorage.getItem('orgId');
            })
            taskCode = window.localStorage.getItem('taskCode');
        });
    })

    after(()=>{
        cy.deleteOrganization(orgId);
    });

    it ('datepicker', () => {
        cy.visit(`https://cypress.vivifyscrum-stage.com/boards/${boardId}/${window.localStorage.getItem('taskCode')}`)
        datePicker.datePickerSuccess();
        
        

    })
});
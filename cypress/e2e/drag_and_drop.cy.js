import { dragDrop } from "../POM/drag_and_drop_page";
import {storyTask} from "../fixtures/testData";

let taskCode 
let boardId 
let orgId

describe ('label', () => {
    before (() => {
        cy.loginBE();
        cy.visit('/');
        cy.createOrganization('Drag and Drop').then(() => {
            expect(window.localStorage.getItem('orgId')).to.exist;
            cy.createScrumBoard('Test', window.localStorage.getItem('orgId')).then(() => {
            cy.createTask(storyTask('created task', window.localStorage.getItem('boardId')))
                boardId = window.localStorage.getItem('boardId');
                orgId = window.localStorage.getItem('orgId');
            })
            taskCode = window.localStorage.getItem('taskCode');
        });
    })

    
    it ('drag and drop with aserts', () => {
        cy.visit(`https://cypress.vivifyscrum-stage.com/boards/${boardId}`)
        dragDrop.dragAndDropSuccessuful();
    })
    
    
    after(()=>{
        cy.deleteOrganization(orgId);
    });
})
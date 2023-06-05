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
<<<<<<< HEAD
    before (() => {
        cy.loginBE();
        cy.visit ('/');
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

    it('Create, assert and delete label successfully', () => {
        cy.log("TASK CODE", )
        cy.visit(`https://cypress.vivifyscrum-stage.com/boards/${boardId}/${window.localStorage.getItem('taskCode')}`)
        cy.wait(2000)
        labelPage.createLabel() 
        cy.visit(`https://cypress.vivifyscrum-stage.com/boards/${boardId}/${window.localStorage.getItem('taskCode')}`)
        labelPage.taskLableBtn.click()
        .should ('exist')
        .and ('be.visible')
        .and ('have.css', 'color', 'rgb(78, 174, 147)')
        .and ('have.class', 'el-button--mini')
        labelPage.myLabel.click()
        labelPage.closeTask.click()
        labelPage.labelBtn.click()
        labelPage.deleteBtn.click()
        .should ('exist')
        .and ('be.visible')
        .and ('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
        .and ('have.css', 'border-color', 'rgb(62, 139, 117)')
        labelPage.modalRemoveLabelYesBtn.click() 
        labelPage.createdLabelEdit.should('not.exist')
    })
=======
    before(() => {
      cy.loginBE();
      cy.visit("/");
      cy.createOrganization("Test111111").then(() => {
        expect(window.localStorage.getItem("orgId")).to.exist;
        cy.createScrumBoard("Test", window.localStorage.getItem("orgId")).then(
          () => {
            cy.createTask(
              storyTask(
                "created BEEEEEE",
                window.localStorage.getItem("boardId")
              )
            );
            boardId = window.localStorage.getItem("boardId");
            orgId = window.localStorage.getItem("orgId");
          }
        );
        taskCode = window.localStorage.getItem("taskCode");
      });
    });
    
    it("Create, assert and delete label successfully", () => {
      cy.log("TASK CODE");
      cy.visit(
        `https://cypress.vivifyscrum-stage.com/boards/${boardId}/${window.localStorage.getItem(
          "taskCode"
        )}`
      );
      cy.wait(2000);
      labelPage.createLabel();
    });

    after(() => {
      expect(window.localStorage.getItem("token")).to.exist;
      cy.deleteOrganization(orgId);
    });

>>>>>>> 151bf9d1a5d55fab4fd0391afe89879dcab82d3f
    })
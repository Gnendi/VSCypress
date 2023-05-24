import { labelPage } from "../POM/labelPage";
import { storyTask } from "../fixtures/testData";
import { uploadPhoto } from "../POM/uploadPhotoPage";

let taskCode 
let boardId 
let orgId
describe ('login_create_board', () => {
    beforeEach (() => {
        cy.loginBE();
        cy.createOrganization('Test2').then(() => {
            cy.createScrumBoard('Test', window.localStorage.getItem('orgId')).then (() =>{
                boardId = window.localStorage.getItem('boardId');
                orgId = window.localStorage.getItem('orgId');
            })
        });
    });
        it('upload_photo', () => {
            cy.visit(`https://cypress.vivifyscrum-stage.com/boards/${boardId}/settings`);
            uploadPhoto.uploadLogo.click()
            uploadPhoto.uploadInput.click({force: true})
            .should('not.be.visible')
            uploadPhoto.uploadBtn.click()
            uploadPhoto.imgUploaded
            .should('be.visible')       
});

        it ('upload_photo_wrong_format', () => {
            cy.visit(`https://cypress.vivifyscrum-stage.com/boards/${boardId}/settings`);
            uploadPhoto.uploadLogo.click()
            uploadPhoto.uploadInputWrongFormatFile.invoke('show').click()
            uploadPhoto.warningMsg
            .should('exist')
            .and ('contain', 'The file must be a file of type: png, jpg, gif, jpeg, webp.')

            
        })

})
class UploadPhoto {
get uploadLogo () {
    return cy.get('.vs-c-img--board-avatar-lg')
}
get uploadInput () {
    return cy.get ('.el-upload__input').attachFile('tree-736885__480.jpg')
}

get uploadBtn () {
    return cy.get ('[name="save-btn"]')
}

get imgUploaded () {
    return cy.get ('img[class="vs-c-img--avatar vs-c-img--board-avatar-lg"]')
}
get uploadInputWrongFormatFile () {
    return cy.get ('.el-upload__input').attachFile('Shelf download sessions.csv')
}
get warningMsg () {
    return cy.get('.el-message__group')
} 
}

export const uploadPhoto = new UploadPhoto();
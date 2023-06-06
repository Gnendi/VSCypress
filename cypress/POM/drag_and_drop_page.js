class DragDrop {
    
    
    get backlogList () {
        return cy.get('.vs-c-task-list').first()
    }
    
    get backlogTaskPlace () {
        return this.backlogListFirstEl.find('div').first()
    }

    get checkIfTaskNumberInBacklogChange () {
        return this.backlogList.find('div').eq(0)
    }

    get myTask () {
        return cy.get(`#task-${window.localStorage.getItem('taskId')}`)
    }

    get sprintList () {
        return cy.get('.vs-c-task-list').last()
    }

    get checkIfTaskNumberInSprintChanged() {
        return this.sprintList.find('div').first()
    }

    get backlogInfoField() {
        return cy.get('.vs-c-modal-status__text')
    }

    get closeBtn () {
        return cy.get('.vs-c-item-modal-close')
    }


    dragAndDropSuccessuful() {
        this.checkIfTaskNumberInBacklogChange
        .children()
        .should('have.length', 2)
        this.sprintList.should('have.class', 'vs-is-empty')
        this.myTask.click()
        this.backlogInfoField.should('have.text', 'Backlog  ')
        this.closeBtn.click()
        this.myTask.drag('.vs-is-empty')
        this.checkIfTaskNumberInBacklogChange
        .children()
        .should('have.length', 1)
        this.checkIfTaskNumberInSprintChanged
        .children()
        .first()
        .invoke('hide')
        .should('have.length', 1)
        this.myTask.click()
        this.backlogInfoField.should('have.text', 'Sprint 1  To do ')


    }

}

export const dragDrop = new DragDrop
class LoginPage {

    get emailInput () {
        return cy.get('[data-vv-as="email"]')
    }

    get emailInputError () {
        return cy.get('.el-form-item__error')
    }

    get passwordInput () {
        return cy.get('[type="password"]')
    }

    get LoginBtn () {
        return cy.get ('button[type="submit"]')
    }

    get emailPasswordError () {
        return cy.get ('.el-form-item__error')
    }

    login (email, password) {
        this.emailInput.type(email)
        this.passwordInput.type(password)
        this.LoginBtn.click()
    }
    
    clicklLoginBtn () {
        this.LoginBtn.click()
    }
}

export const loginPage = new LoginPage
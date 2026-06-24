class LoginPage {

    selectorsList = {
        username: '[name="username"]',
        password: '[name="password"]',
        loginButton: '[type="submit"]',
        alertMessage: '.oxd-alert-content--error',
        requiredMessage: '.oxd-input-field-error-message',
    }

    accessLoginPage() {
        cy.visit('/auth/login')
    }

    loginWithValidCredentials(username, password) {
        cy.get(this.selectorsList.username).type(username)
        cy.get(this.selectorsList.password).type(password)
        cy.get(this.selectorsList.loginButton).click()
        cy.url().should('include', '/dashboard')
    }

    loginWithInvalidCredentials(username, password) {
        cy.get(this.selectorsList.username).type(username)
        cy.get(this.selectorsList.password).type(password)
        cy.get(this.selectorsList.loginButton).click()
        cy.get(this.selectorsList.alertMessage).should('contain', 'Invalid credentials')
    }

    loginWithEmptyFields() {
        cy.get(this.selectorsList.loginButton).click()
        cy.get(this.selectorsList.requiredMessage).should('contain', 'Required')
    }

    loginWithEmptyUsername(password) {
        cy.get(this.selectorsList.password).type(password)
        cy.get(this.selectorsList.loginButton).click()
        cy.get(this.selectorsList.requiredMessage).should('contain', 'Required')
    }
    
    loginWithEmptyPassword(username) {
        cy.get(this.selectorsList.username).type(username)
        cy.get(this.selectorsList.loginButton).click()
        cy.get(this.selectorsList.requiredMessage).should('contain', 'Required')
    }
}

export default LoginPage
import { MESSAGES as messages } from '../support/constants/messages'

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

    loginWithCredentials(username = null, password = null) {
        if (username) cy.get(this.selectorsList.username).type(username)
        if (password) cy.get(this.selectorsList.password).type(password)
        cy.get(this.selectorsList.loginButton).click()
    }

    checkRedirectionToDashboard() {
        cy.url({ timeout: 10000 }).should('include', '/dashboard')
    }

    // ✅ método só de asserção
    checkInvalidCredentialsMessage() {
        cy.get(this.selectorsList.alertMessage).should('contain', messages.invalidCredentials)
    }

    checkRequiredFieldMessage() {
        cy.get(this.selectorsList.requiredMessage).should('contain', messages.requiredField)
    }
}

export default LoginPage
class LoginPage {
    selectorsList() {
        const selectors = {
            usernameInput: "[name='username']",
            passwordInput: "[name='password']",
            loginButton: "[type='submit']",
            wrongCredentialsError: "[role='alert']",
            emptyFieldsError: ":nth-child(2) > .oxd-input-group > .oxd-text",
        }

        return selectors
    }
    
    accessLoginPage() {
        cy.visit("/auth/login")
    }

    loginWithCredentials(username, password) {
        cy.get(this.selectorsList().usernameInput).type(username)
        cy.get(this.selectorsList().passwordInput).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }
}

export default LoginPage
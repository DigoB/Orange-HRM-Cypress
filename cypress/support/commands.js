import LoginPage from '../pages/page-objects/loginPage.js'

Cypress.Commands.add('login', (username, password) => {
    const loginPage = new LoginPage()
    loginPage.accessLoginPage()
    loginPage.loginWithCredentials(username, password)
    loginPage.checkRedirectionToDashboard()
})
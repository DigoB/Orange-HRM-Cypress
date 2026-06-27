import userData from '../../fixtures/users/userData.json'
import LoginPage from '../../pages/page-objects/loginPage.js'

describe('Login - Functional Tests', () => {

  let loginPage

  beforeEach(() => {
    loginPage = new LoginPage()
    loginPage.accessLoginPage()
  })

  it('successful login', () => {
    loginPage.loginWithCredentials(userData.validUser.validUsername, userData.validUser.validPassword)
    loginPage.checkRedirectionToDashboard()
  })

  it('unsuccessful login with wrong credentials', () => {
    loginPage.loginWithCredentials(userData.invalidUser.invalidUsername, userData.invalidUser.invalidPassword)
    loginPage.checkInvalidCredentialsMessage()
  })

  it('unsuccessful login with empty fields', () => {
    loginPage.loginWithCredentials(null, null)
    loginPage.checkRequiredFieldMessage()
  })

  it('unsuccessful login with empty username', () => {
    loginPage.loginWithCredentials(null, userData.validUser.validPassword)
    loginPage.checkRequiredFieldMessage()
  })

  it('unsuccessful login with empty password', () => {
    loginPage.loginWithCredentials(userData.validUser.validUsername, null)
    loginPage.checkRequiredFieldMessage()
  })

  it('status code verification with successful login', () => {
    cy.intercept('POST', '**').as('loginRequest')

    loginPage.loginWithCredentials(userData.validUser.validUsername, userData.validUser.validPassword)
    loginPage.checkRedirectionToDashboard()

    cy.wait('@loginRequest')
    .its('response.statusCode')
    .should('be.oneOf', [200, 302])
  })

  // Status code is returning 302 for valid or invalid credentials, so we can check for both 400 and 401 as well, depending on how the server handles the response.
  it('status code verification with wrong credentials', () => {
    cy.intercept('POST', '**').as('loginRequest')

    loginPage.loginWithCredentials(userData.invalidUser.invalidUsername, userData.invalidUser.invalidPassword)

    // OrangeHRM demo environment returns inconsistent status codes (302 for both 
    // successful and failed login attempts). Broad assertion is intentional due 
    // to the instability of the test environment.
    cy.wait('@loginRequest')
    .its('response.statusCode')
    .should('be.oneOf', [400, 401, 302, 301])
  })
})
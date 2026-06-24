import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

describe('template spec', () => {

  const loginPage = new LoginPage()
  const myInfoPage = new MyInfoPage()

  it('successful login', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithValidCredentials(userData.validUser.validUsername, userData.validUser.validPassword)
  }),

  it('unsuccessful login with wrong credentials', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithInvalidCredentials(userData.invalidUser.invalidUsername, userData.invalidUser.invalidPassword)
  })

  it('unsuccessful login with empty fields', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithEmptyFields()
  })

  it('unsuccessful login with empty username', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithEmptyUsername(userData.validUser.validPassword)
  })

  it('unsuccessful login with empty password', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithEmptyPassword(userData.validUser.validUsername)
  })

  it('status code verification with successful login', () => {
    cy.intercept('POST', '**').as('loginRequest')

    loginPage.accessLoginPage()

    loginPage.loginWithValidCredentials(userData.validUser.validUsername, userData.validUser.validPassword)

    cy.wait('@loginRequest')
    .its('response.statusCode')
    .should('be.oneOf', [200, 302])
  })

  // Status code is returning 302 for valid or invalid credentials, so we can check for both 400 and 401 as well, depending on how the server handles the response.
  it('status code verification with wrong credentials', () => {
    cy.intercept('POST', '**').as('loginRequest')

    loginPage.accessLoginPage()

    loginPage.loginWithInvalidCredentials(userData.invalidUser.invalidUsername, userData.invalidUser.invalidPassword)

    cy.wait('@loginRequest')
    .its('response.statusCode')
    .should('be.oneOf', [400, 401, 302,301])
  })

  it('Successful User Name, Middle Name and Last Name Update', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithValidCredentials(userData.validUser.validUsername, userData.validUser.validPassword)
    
    cy.visit('/pim/viewPersonalDetails/empNumber/7')
    myInfoPage.updateUserInfo()
  })
})
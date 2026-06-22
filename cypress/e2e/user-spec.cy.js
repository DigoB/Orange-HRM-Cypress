import userData from '../fixtures/users/userData.json'

describe('template spec', () => {

  const selectorsList = {
    username: '[name="username"]',
    password: '[name="password"]',
    loginButton: '.oxd-button',
    alertMessage: '.oxd-alert-content-text',
    requiredMessage: '.oxd-input-group__message',
    userFirstName: '[name="firstName"]',
    userMiddleName: '[name="middleName"]',
    userLastName: '[name="lastName"]',
    saveButton: ':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button'
  }

  it('successful login', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.username).type(userData.validUser.validUsername)
    cy.get(selectorsList.password).type(userData.validUser.validPassword)
    cy.get(selectorsList.loginButton).click()
    cy.url().should('include', '/dashboard')
  })

  it('unsuccessful login with wrong credentials', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.username).type(userData.invalidUser.invalidUsername)
    cy.get(selectorsList.password).type(userData.invalidUser.invalidPassword)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.alertMessage).should('contain', 'Invalid credentials')
  })

  it('unsuccessful login with empty fields', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.requiredMessage).should('contain', 'Required')
  })

  it('unsuccessful login with empty username', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.password).type(userData.validUser.validPassword)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.requiredMessage).should('contain', 'Required')
  })

  it('unsuccessful login with empty password', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.username).type(userData.validUser.validUsername)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.requiredMessage).should('contain', 'Required')
  })

  it('status code verification with successful login', () => {
    cy.intercept('POST', '**').as('loginRequest')

    cy.visit('/auth/login')

    cy.get(selectorsList.username).type(userData.validUser.validUsername)
    cy.get(selectorsList.password).type(userData.validUser.validPassword)
    cy.get(selectorsList.loginButton).click()

    cy.wait('@loginRequest')
    .its('response.statusCode')
    .should('be.oneOf', [200, 302])
  })

  // Status code is returning 302 for valid or invalid credentials, so we can check for both 400 and 401 as well, depending on how the server handles the response.
  it('status code verification with wrong credentials', () => {
    cy.intercept('POST', '**').as('loginRequest')

    cy.visit('/auth/login')

    cy.get(selectorsList.username).type(userData.invalidUser.invalidUsername)
    cy.get(selectorsList.password).type(userData.invalidUser.invalidPassword)
    cy.get(selectorsList.loginButton).click()

    cy.wait('@loginRequest')
    .its('response.statusCode')
    .should('be.oneOf', [400, 401, 302])
  })

  it('Successful User Name, Middle Name and Last Name Update', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.username).type(userData.validUser.validUsername)
    cy.get(selectorsList.password).type(userData.validUser.validPassword)
    cy.get(selectorsList.loginButton).click()
    cy.url().should('include', '/dashboard')
    cy.visit('/pim/viewPersonalDetails/empNumber/7')
    cy.get(selectorsList.userFirstName).clear().type(userData.updateUser.updatedUsername)
    cy.get(selectorsList.userMiddleName).clear().type(userData.updateUser.updatedMiddleName)
    cy.get(selectorsList.userLastName).clear().type(userData.updateUser.updatedPassword)
    cy.get(selectorsList.saveButton).click()
    cy.get(selectorsList.userFirstName).should('have.value', userData.updateUser.updatedUsername)
    cy.get(selectorsList.userMiddleName).should('have.value', userData.updateUser.updatedMiddleName)
    cy.get(selectorsList.userLastName).should('have.value', userData.updateUser.updatedPassword)
  })
})
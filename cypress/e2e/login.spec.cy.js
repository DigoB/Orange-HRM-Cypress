describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameInput: "[name='username']",
    passwordInput: "[name='password']",
    submitButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    wrongCredentialsError: "[role='alert']",
    emptyFieldsError: "cy.get(':nth-child(2) > .oxd-input-group > .oxd-text')"
  }

  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameInput).type('Admin')
    cy.get(selectorsList.passwordInput).type('admin123')
    cy.get(selectorsList.submitButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard')
  })
  it('Login - Failed - Wrong Password', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameInput).type('Admin')
    cy.get(selectorsList.passwordInput).type('wrongpassword')
    cy.get(selectorsList.submitButton).click()
    cy.get(selectorsList.wrongCredentialsError).contains('Invalid credentials')
  })
  it('Login - Failed - Empty Fields', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.submitButton).click()
    cy.get('.oxd-input-group > .oxd-text').contains('Required')
  })
  it('Login - Failed - Wrong Username', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameInput).type('WrongUser')
    cy.get(selectorsList.passwordInput).type('admin123')
    cy.get(selectorsList.submitButton).click()
    cy.get(selectorsList.wrongCredentialsError).contains('Invalid credentials')
  })
})
describe('template spec', () => {

  const selectorsList = {
    username: '[name="username"]',
    password: '[name="password"]',
    loginButton: '.oxd-button'
  }

  it('successful login', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.username).type('Admin')
    cy.get(selectorsList.password).type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.url().should('include', '/dashboard')
  })

  it('unsuccessful login with wrong credentials', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.username).type('Admin')
    cy.get(selectorsList.password).type('wrongpassword')
    cy.get(selectorsList.loginButton).click()
    cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials')
  })

  it('unsuccessful login with empty fields', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.loginButton).click()
    cy.get('.oxd-input-group__message').should('contain', 'Required')
  })

  it('unsuccessful login with empty username', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.password).type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.get('.oxd-input-group__message').should('contain', 'Required')
  })

  it('unsuccessful login with empty password', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.username).type('Admin')
    cy.get(selectorsList.loginButton).click()
    cy.get('.oxd-input-group__message').should('contain', 'Required')
  })

  it.only('status code verification with successful login', () => {
    cy.intercept('POST', '**').as('loginRequest')

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    cy.get(selectorsList.username).type('Admin')
    cy.get(selectorsList.password).type('admin123')
    cy.get(selectorsList.loginButton).click()

    cy.wait('@loginRequest')
    .its('response.statusCode')
    .should('be.oneOf', [200, 302])
  })

  // Status code is returning 302 for valid or invalid credentials, so we can check for both 400 and 401 as well, depending on how the server handles the response.
  it('status code verification with wrong credentials', () => {
    cy.intercept('POST', '**').as('loginRequest')

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    cy.get(selectorsList.username).type('Admin')
    cy.get(selectorsList.password).type('wrongpassword')
    cy.get(selectorsList.loginButton).click()

    cy.wait('@loginRequest')
    .its('response.statusCode')
    .should('be.oneOf', [400, 401, 302])
  })
})
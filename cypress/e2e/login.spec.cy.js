describe('Orange HRM Tests', () => {
  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Admin')
    cy.get("[name='password']").type('admin123')
    cy.get('.oxd-button').click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb-module').contains('Dashboard')
  })
  it('Login - Failed - Wrong Password', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Admin')
    cy.get("[name='password']").type('wrongpassword')
    cy.get("[type='submit']").click()
    cy.get('.oxd-alert-content > .oxd-text').contains('Invalid credentials')
  })
  it('Login - Failed - Empty Fields', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[type='submit']").click()
    cy.get('.oxd-input-group > .oxd-text').contains('Required')
  })
  it('Login - Failed - Wrong Username', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('WrongUser')
    cy.get("[name='password']").type('admin123')
    cy.get("[type='submit']").click()
    cy.get('.oxd-alert-content > .oxd-text').contains('Invalid credentials')
  })
})
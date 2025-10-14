import userData from "../fixtures/users/user-data.json"

describe("Orange HRM Tests", () => {
  const selectorsList = {
    usernameInput: "[name='username']",
    passwordInput: "[name='password']",
    submitButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    wrongCredentialsError: "[role='alert']",
    emptyFieldsError: ":nth-child(2) > .oxd-input-group > .oxd-text",
    dashboardGrid: ".orangehrm-dashboard-grid",
    myInfoButton: ":nth-child(6) > .oxd-main-menu-item",
    firstNameField: "[name='firstName']",
    midlleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateFiedld: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']",};

  it.only("Login - Success", () => {
    cy.visit("/auth/login")
    cy.get(selectorsList.usernameInput).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordInput).type(userData.userSuccess.password)
    cy.get(selectorsList.submitButton).click()
    cy.location("pathname").should("equal", "/web/index.php/dashboard/index")
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type("Teste First")
    //cy.get(selectorsList.firstNameField).should("equal", "Teste First")
    cy.get(selectorsList.midlleNameField).clear().type("Teste Middle")
    //cy.get(selectorsList.midlleNameField).should("equal", "Teste Middle")
    cy.get(selectorsList.lastNameField).clear().type("Teste Last")
    //cy.get(selectorsList.lastNameField).should("equal", "Teste Last")
    cy.get(selectorsList.genericField).eq(3).clear().type("TestEmp")
    cy.get(selectorsList.genericField).eq(4).clear().type("TestOtherID")
    cy.get(selectorsList.genericField).eq(5).clear().type("TestDriversLicense")
    cy.get(selectorsList.dateFiedld).eq(0).clear().type("2025-11-10")
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.dateFiedld).eq(1).clear().type("1984-04-11", { force: true })
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.submitButton).eq(0).click({force: true})
    cy.get("body").should("contain", "Successfully Updated")


  });
  it("Login - Failed - Wrong Username", () => {
    cy.visit("/auth/login");
    cy.get(selectorsList.usernameInput).type(userData.userFail.username)
    cy.get(selectorsList.passwordInput).type(userData.userSuccess.password)
    cy.get(selectorsList.submitButton).click()
    cy.get(selectorsList.wrongCredentialsError).contains("Invalid credentials")
  });
  it("Login - Failed - Wrong Password", () => {
    cy.visit("/auth/login");
    cy.get(selectorsList.usernameInput).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordInput).type(userData.userFail.password)
    cy.get(selectorsList.submitButton).click()
    cy.get(selectorsList.wrongCredentialsError).contains("Invalid credentials")
  });
  it("Login - Failed - Empty Fields", () => {
    cy.visit("/auth/login");
    cy.get(selectorsList.submitButton).click()
    cy.get(".oxd-input-group > .oxd-text").contains("Required")
  });
});

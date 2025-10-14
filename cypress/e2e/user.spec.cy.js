import userData from "../fixtures/users/user-data.json"
import LoginPage from "../pages/loginPage.js"
import DashboardPage from "../pages/dashboardPage.js"
import MyInfoPage from "../pages/myInfoPage.js"

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const myInfoPage = new MyInfoPage()

describe("Orange HRM Tests", () => {

  it.only("Login - Success", () => {
    loginPage.accessLoginPage()
    loginPage.loginWithCredentials(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.validateDashboardPage()
    myInfoPage.clickMyInfo()
    myInfoPage.fillNameFields()
    myInfoPage.fillNationalityField()
    myInfoPage.fillMaritalStatusField()
    myInfoPage.fillIdsAndLicenseFields()
    myInfoPage.fillDateOfBirthAndGenderFields()
    myInfoPage.clickSaveButton()
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

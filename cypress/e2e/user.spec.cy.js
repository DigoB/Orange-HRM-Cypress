import userData from "../fixtures/users/user-data.json"
import LoginPage from "../pages/loginPage.js"
import DashboardPage from "../pages/dashboardPage.js"
import MyInfoPage from "../pages/myInfoPage.js"

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const myInfoPage = new MyInfoPage()

describe("Orange HRM Tests", () => {

  it("Login - Success", () => {
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
  })

  it("Login - Failed - Wrong Username", () => {
    loginPage.accessLoginPage()
    loginPage.loginWithWrongUsername(userData.userFail.username, userData.userSuccess.password)
  })

  it("Login - Failed - Wrong Password", () => {
    loginPage.accessLoginPage()
    loginPage.loginWithWrongPassword(userData.userSuccess.username, userData.userFail.password)
  })

  it("Login - Failed - Empty Fields", () => {
    loginPage.accessLoginPage()
    loginPage.loginWithEmptyFields()
  });
});

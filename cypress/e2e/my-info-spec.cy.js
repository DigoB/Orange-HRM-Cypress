import LoginPage from '../pages/loginPage.js'
import MyInfoPage from '../pages/myInfoPage.js'
import userData from '../fixtures/users/userData.json'

describe('MyInfo - Update Personal Details', () => {

  let loginPage
  let myInfoPage

  beforeEach(() => {
    loginPage = new LoginPage()
    myInfoPage = new MyInfoPage()
    loginPage.accessLoginPage()
    loginPage.loginWithCredentials(userData.validUser.validUsername, userData.validUser.validPassword)
    loginPage.checkRedirectionToDashboard()
  })
 
  it('Successful User Name, Middle Name and Last Name Update', () => {
    myInfoPage.navigateToMyInfo(userData.validUser.validEmployeeId)
    myInfoPage.updateUserInfo({
        firstName: userData.updateUser.firstName,
        middleName: userData.updateUser.middleName,
        lastName: userData.updateUser.lastName,
        employeeId: userData.updateUser.employeeId,
        otherId: userData.updateUser.otherId,
        driverLicense: userData.updateUser.driverLicense,
        licenseExpiryDate: userData.updateUser.licenseExpiryDate
    })
  })
})
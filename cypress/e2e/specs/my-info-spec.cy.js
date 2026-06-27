import LoginPage from '../../pages/page-objects/loginPage.js'
import MyInfoPage from '../../pages/page-objects/myInfoPage.js'
import userData from '../../fixtures/tests-data/users/userData.json'

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
 
  it('Successful personal details update', () => {
    const updateData = {
        firstName: userData.updateUser.firstName,
        middleName: userData.updateUser.middleName,
        lastName: userData.updateUser.lastName,
        employeeId: userData.updateUser.employeeId,
        otherId: userData.updateUser.otherId,
        driverLicense: userData.updateUser.driverLicense,
        licenseExpiryDate: userData.updateUser.licenseExpiryDate
    }

    myInfoPage.navigateToMyInfo(userData.validUser.validEmployeeId)
    myInfoPage.updateUserInfo(updateData)
    myInfoPage.checkUserInfoUpdated(updateData)
  })
})
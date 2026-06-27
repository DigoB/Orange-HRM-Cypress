import MyInfoPage from '../../pages/page-objects/myInfoPage.js'
import userData from '../../fixtures/tests-data/users/userData.json'

describe('MyInfo - Update Personal Details', () => {

  let myInfoPage

  beforeEach(() => {
    myInfoPage = new MyInfoPage()
    cy.login(userData.validUser.validUsername, userData.validUser.validPassword)
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
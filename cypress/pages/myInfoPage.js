import userData from '../fixtures/users/userData.json'

class MyInfoPage {
    selectorsList = {
        userFirstName: '[name="firstName"]',
        userMiddleName: '[name="middleName"]',
        userLastName: '[name="lastName"]',
        employeeId: ':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
        otherId: ':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',
        driverLicense: ':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',
        licenseExpiryDate: ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input',
        saveButton: ':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button',
        closeSuccessMessageButton: '.oxd-toast-close'
  }

  updateUserInfo() {
    cy.get(this.selectorsList.userFirstName).clear().type(userData.updateUser.updatedUsername)
    cy.get(this.selectorsList.userMiddleName).clear().type(userData.updateUser.updatedMiddleName)
    cy.get(this.selectorsList.userLastName).clear().type(userData.updateUser.updatedPassword)
    cy.get(this.selectorsList.employeeId).clear().type(userData.updateUser.updatedEmployeeId)
    cy.get(this.selectorsList.otherId).clear().type(userData.updateUser.updatedOtherId)
    cy.get(this.selectorsList.driverLicense).clear().type(userData.updateUser.updatedDriverLicense)
    cy.get(this.selectorsList.licenseExpiryDate).eq(0).clear().type(userData.updateUser.updatedLicenseExpiryDate)
    cy.get(this.selectorsList.saveButton).click()
    cy.get(this.selectorsList.userFirstName).should('have.value', userData.updateUser.updatedUsername)
    cy.get(this.selectorsList.userMiddleName).should('have.value', userData.updateUser.updatedMiddleName)
    cy.get(this.selectorsList.userLastName).should('have.value', userData.updateUser.updatedPassword)
    cy.get(this.selectorsList.employeeId).should('have.value', userData.updateUser.updatedEmployeeId)
    cy.get(this.selectorsList.otherId).should('have.value', userData.updateUser.updatedOtherId)
    cy.get(this.selectorsList.driverLicense).should('have.value', userData.updateUser.updatedDriverLicense)
    //cy.get(this.selectorsList.licenseExpiryDate).should('have.value', userData.updateUser.updatedLicenseExpiryDate)

    cy.get(this.selectorsList.closeSuccessMessageButton).should('be.visible').click()
    }
}

export default MyInfoPage
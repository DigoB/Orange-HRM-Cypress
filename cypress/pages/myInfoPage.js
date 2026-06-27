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

    navigateToMyInfo(empNumber) {
        cy.visit(`/pim/viewPersonalDetails/empNumber/${empNumber}`)
    }

    updateUserInfo({ firstName, middleName, lastName, employeeId, otherId, driverLicense, licenseExpiryDate }) {
        cy.get(this.selectorsList.userFirstName).clear().type(firstName)
        cy.get(this.selectorsList.userMiddleName).clear().type(middleName)
        cy.get(this.selectorsList.userLastName).clear().type(lastName)
        cy.get(this.selectorsList.employeeId).clear().type(employeeId)
        cy.get(this.selectorsList.otherId).clear().type(otherId)
        cy.get(this.selectorsList.driverLicense).clear().type(driverLicense)
        cy.get(this.selectorsList.licenseExpiryDate).eq(0).clear().type(licenseExpiryDate)
        cy.get(this.selectorsList.saveButton).click()
        cy.contains('Success').should('be.visible')
        cy.get(this.selectorsList.userFirstName).should('have.value', firstName)
        cy.get(this.selectorsList.userMiddleName).should('have.value', middleName)
        cy.get(this.selectorsList.userLastName).should('have.value', lastName)
        cy.get(this.selectorsList.employeeId).should('have.value', employeeId)
        cy.get(this.selectorsList.otherId).should('have.value', otherId)
        cy.get(this.selectorsList.driverLicense).should('have.value', driverLicense)
        cy.get(this.selectorsList.closeSuccessMessageButton).click()
    }
}

export default MyInfoPage
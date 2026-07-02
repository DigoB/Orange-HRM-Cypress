import { MESSAGES as messages } from '../../support/constants/messages'

class MyInfoPage {
    selectorsList = {
        userFirstName: '[name="firstName"]',
        userMiddleName: '[name="middleName"]',
        userLastName: '[name="lastName"]',
        saveButton: ':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button',
        closeSuccessMessageButton: '.oxd-toast-close'
    }

    // Método auxiliar — inputs de texto simples
    getFieldByLabel(label) {
        return cy.contains('label', label)
            .parents('.oxd-input-group')
            .find('.oxd-input')
    }

    // Método auxiliar — inputs de data (estrutura diferente)
    getDateFieldByLabel(label) {
        return cy.contains('label', label)
            .parents('.oxd-input-group')
            .find('.oxd-date-input .oxd-input')
    }

    navigateToMyInfo(empNumber) {
        cy.visit(`/web/index.php/pim/viewPersonalDetails/empNumber/${empNumber}`)
    }

   updateUserInfo({ firstName, middleName, lastName, employeeId, otherId, driverLicense, licenseExpiryDate }) {
        cy.get(this.selectorsList.userFirstName).clear().type(firstName)
        cy.get(this.selectorsList.userMiddleName).clear().type(middleName)
        cy.get(this.selectorsList.userLastName).clear().type(lastName)
        this.getFieldByLabel('Employee Id').clear().type(employeeId)
        this.getFieldByLabel('Other Id').clear().type(otherId)
        this.getFieldByLabel("Driver's License Number").clear().type(driverLicense)
        this.getDateFieldByLabel('License Expiry Date').clear().type(licenseExpiryDate)
        cy.get(this.selectorsList.saveButton).click()
}

    checkUserInfoUpdated({ firstName, middleName, lastName, employeeId, otherId, driverLicense, licenseExpiryDate }) {
        cy.contains(messages.updateSuccess, { timeout: 10000 }).should('be.visible')
        cy.get(this.selectorsList.userFirstName).should('have.value', firstName)
        cy.get(this.selectorsList.userMiddleName).should('have.value', middleName)
        cy.get(this.selectorsList.userLastName).should('have.value', lastName)
        this.getFieldByLabel('Employee Id').should('have.value', employeeId)
        this.getFieldByLabel('Other Id').should('have.value', otherId)
        this.getFieldByLabel("Driver's License Number").should('have.value', driverLicense)
        this.getDateFieldByLabel('License Expiry Date').should('have.value', licenseExpiryDate)
        cy.get(this.selectorsList.closeSuccessMessageButton).click()
    }
}

export default MyInfoPage
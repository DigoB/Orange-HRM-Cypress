import { MESSAGES as messages } from '../../support/constants/messages'

class AddEmployeePage {

    selectorsList = {
        firstName: '[name="firstName"]',
        middleName: '[name="middleName"]',
        lastName: '[name="lastName"]',
        saveButton: '[type="submit"]',
        closeSuccessMessageButton: '.oxd-toast-close'
    }

    navigateToAddEmployee() {
        cy.visit('/web/index.php/pim/addEmployee')
    }

    addEmployee({ firstName, middleName, lastName }) {
        if (firstName) cy.get(this.selectorsList.firstName).type(firstName)
        if (middleName) cy.get(this.selectorsList.middleName).type(middleName)
        if (lastName) cy.get(this.selectorsList.lastName).type(lastName)
        cy.get(this.selectorsList.saveButton).click()
    }

    checkEmployeeAdded({ firstName, middleName, lastName }) {
        cy.url({ timeout: 10000 }).should('include', '/pim/viewPersonalDetails/empNumber/')
        cy.get(this.selectorsList.firstName, { timeout: 10000 }).should('have.value', firstName)
        cy.get(this.selectorsList.middleName).should('have.value', middleName)
        cy.get(this.selectorsList.lastName).should('have.value', lastName)
    }

    checkRequiredFieldMessage() {
        cy.get('.oxd-input-field-error-message').should('contain', messages.requiredField)
    }
}

export default AddEmployeePage
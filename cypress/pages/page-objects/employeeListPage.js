import { MESSAGES as messages } from '../../support/constants/messages'

class EmployeeListPage {

    selectorsList = {
        searchButton: '[type="submit"]',
        resetButton: '[type="reset"]',
    }

    getFieldByLabel(label) {
        return cy.contains('label', label)
            .parents('.oxd-input-group')
            .find('.oxd-input')
    }

    navigateToEmployeeList() {
        cy.visit('/web/index.php/pim/viewEmployeeList')
    }

    searchByEmployeeId(employeeId) {
        this.getFieldByLabel('Employee Id').type(employeeId)
        cy.get(this.selectorsList.searchButton).click()
    }

    resetFilters() {
        cy.get(this.selectorsList.resetButton).click()
    }

    checkRecordsFound() {
        cy.contains('Record', { timeout: 10000 }).should('be.visible')
    }

    checkNoRecordsFound() {
        cy.contains(messages.noRecordsFound, { timeout: 10000 }).should('be.visible')
    }

    checkEmployeeIdInResults(employeeId) {
        cy.get('.oxd-table-body', { timeout: 10000 }).should('contain', employeeId)
    }

    checkFiltersReset() {
        this.getFieldByLabel('Employee Id').should('have.value', '')
    }
}

export default EmployeeListPage
import EmployeeListPage from '../../pages/page-objects/employeeListPage.js'
import userData from '../../fixtures/tests-data/users/userData.json'

describe('PIM - Employee List', () => {

    let employeeListPage

    beforeEach(() => {
        employeeListPage = new EmployeeListPage()
        cy.login(userData.validUser.validUsername, userData.validUser.validPassword)
        employeeListPage.navigateToEmployeeList()
    })

    it('Search by valid Employee Id returns correct employee', () => {
        employeeListPage.searchByEmployeeId(userData.employeeList.validEmployeeId)
        employeeListPage.checkRecordsFound()
        employeeListPage.checkEmployeeIdInResults(userData.employeeList.validEmployeeId)
    })

    it('Search without filters returns all employees', () => {
        cy.get('[type="submit"]').click()
        cy.contains('Records Found', { timeout: 10000 }).should('be.visible')
    })

    it('Search by invalid Employee Id returns no records', () => {
        employeeListPage.searchByEmployeeId(userData.employeeList.invalidEmployeeId)
        employeeListPage.checkNoRecordsFound()
    })

    it('Reset clears all filters', () => {
        employeeListPage.searchByEmployeeId(userData.employeeList.validEmployeeId)
        employeeListPage.resetFilters()
        employeeListPage.checkFiltersReset()
    })
})
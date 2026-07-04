import AddEmployeePage from '../../pages/page-objects/addEmployeePage.js'
import userData from '../../fixtures/tests-data/users/userData.json'

describe('PIM - Add Employee', () => {

    let addEmployeePage

    beforeEach(() => {
        addEmployeePage = new AddEmployeePage()
        cy.login(userData.validUser.validUsername, userData.validUser.validPassword)
        addEmployeePage.navigateToAddEmployee()
    })

    it('Successful employee addition', () => {
        const employeeData = {
            firstName: userData.addEmployee.firstName,
            middleName: userData.addEmployee.middleName,
            lastName: userData.addEmployee.lastName
        }

        addEmployeePage.addEmployee(employeeData)
        addEmployeePage.checkEmployeeAdded(employeeData)
    })

    it('Unsuccessful employee addition without first name', () => {
        addEmployeePage.addEmployee({
            firstName: null,
            middleName: userData.addEmployee.middleName,
            lastName: userData.addEmployee.lastName
        })
        addEmployeePage.checkRequiredFieldMessage()
    })

    it('Unsuccessful employee addition without last name', () => {
        addEmployeePage.addEmployee({
            firstName: userData.addEmployee.firstName,
            middleName: null,
            lastName: null
        })
        addEmployeePage.checkRequiredFieldMessage()
    })
})
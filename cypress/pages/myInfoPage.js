class MyInfoPage {
    selectorsList() {
        const selectors = {
            myInfoButton: ":nth-child(6) > .oxd-main-menu-item",
            firstNameField: "[name='firstName']",
            midlleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateFiedld: "[placeholder='yyyy-dd-mm']",
            dateCloseButton: ".--close",
            submitButton: "[type='submit']",
            dropDownButton: ".oxd-select-text-input",
            radioButton: ".oxd-radio-input--active",
        }
        return selectors
    }

    clickMyInfo() {
        cy.get(this.selectorsList().myInfoButton).click()
    }

    fillNameFields() {
        cy.get(this.selectorsList().firstNameField).clear().type("Teste First")
        cy.get(this.selectorsList().midlleNameField).clear().type("Teste Middle")
        cy.get(this.selectorsList().lastNameField).clear().type("Teste Last")
    }

    fillNationalityField() {
        cy.get('.oxd-select-text-input').eq(0)
            .scrollIntoView()
            .should('be.visible')
            .click({ force: true });
        cy.get('.oxd-select-dropdown')
            .should('be.visible')
            .contains('Brazilian')
            .click()
    }

    fillMaritalStatusField() {
        cy.get('.oxd-select-text-input').eq(1)
            .scrollIntoView()
            .should('be.visible')
            .click({ force: true });
        cy.get('.oxd-select-dropdown')
            .should('be.visible')
            .contains('Married')
            .click();
    }

    fillIdsAndLicenseFields() {
        cy.get(this.selectorsList().genericField).eq(3).clear().type("TestEmp")
        cy.get(this.selectorsList().genericField).eq(4).clear().type("TestOtherID")
        cy.get(this.selectorsList().genericField).eq(5).clear().type("TestDriversLicense")
        cy.get(this.selectorsList().dateFiedld).eq(0).clear().type("2025-11-10")
        cy.get(this.selectorsList().dateCloseButton).click()
    }

    fillDateOfBirthAndGenderFields() {
        cy.get(this.selectorsList().dateFiedld).eq(1).clear().type("1984-04-11", { force: true })
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().radioButton).eq(1).click({ force: true })
    }

    clickSaveButton() {
        cy.get(this.selectorsList().submitButton).eq(0).click({force: true})
        //cy.get("body").should("contain", "Successfully Updated")
    }
}

export default MyInfoPage
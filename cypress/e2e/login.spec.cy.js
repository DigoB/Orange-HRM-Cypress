import userData from "../fixtures/users/user-data.json";

describe("Orange HRM Tests", () => {
  const selectorsList = {
    usernameInput: "[name='username']",
    passwordInput: "[name='password']",
    submitButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    wrongCredentialsError: "[role='alert']",
    emptyFieldsError: "cy.get(':nth-child(2) > .oxd-input-group > .oxd-text')",
    dashboardGrid: ".orangehrm-dashboard-grid",
  };

  it("Login - Success", () => {
    cy.visit("/auth/login");
    cy.get(selectorsList.usernameInput).type(userData.userSuccess.username);
    cy.get(selectorsList.passwordInput).type(userData.userSuccess.password);
    cy.get(selectorsList.submitButton).click();
    cy.location("pathname").should("equal", "/web/index.php/dashboard/index");
    cy.get(selectorsList.dashboardGrid);
  });
  it("Login - Failed - Wrong Username", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get(selectorsList.usernameInput).type(userData.userFail.username);
    cy.get(selectorsList.passwordInput).type(userData.userSuccess.password);
    cy.get(selectorsList.submitButton).click();
    cy.get(selectorsList.wrongCredentialsError).contains("Invalid credentials");
  });
  it("Login - Failed - Wrong Password", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get(selectorsList.usernameInput).type(userData.userSuccess.username);
    cy.get(selectorsList.passwordInput).type(userData.userFail.password);
    cy.get(selectorsList.submitButton).click();
    cy.get(selectorsList.wrongCredentialsError).contains("Invalid credentials");
  });
  it("Login - Failed - Empty Fields", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get(selectorsList.submitButton).click();
    cy.get(".oxd-input-group > .oxd-text").contains("Required");
  });
});

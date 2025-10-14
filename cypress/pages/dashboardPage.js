class DashboardPage {

    selectorsList() {
        const selectorsList = {
            sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
            dashboardGrid: ".orangehrm-dashboard-grid",
    }
        return selectorsList
    }

  validateDashboardPage() {
    cy.location("pathname").should("equal", "/web/index.php/dashboard/index")
    //cy.get(this.selectorsList().dashboardGrid).should("contain", "Dashboard")
  }
}

export default DashboardPage
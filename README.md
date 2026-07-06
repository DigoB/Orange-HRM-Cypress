# 🍊 OrangeHRM - Test Automation Portfolio

![Cypress Tests](https://github.com/DigoB/Orange-HRM-Cypress/actions/workflows/ci.yml/badge.svg?branch=cypress-ci)

End-to-end and API test automation project for the [OrangeHRM](https://opensource-demo.orangehrmlive.com) demo application, built with **Cypress** and **Postman**.

---

## 🛠️ Tech Stack

- [Cypress](https://www.cypress.io/) v15 — End-to-end testing framework
- JavaScript — Test scripting language
- Page Object Model (POM) — Design pattern for test organization
- Fixtures — External test data management
- cypress-mochawesome-reporter — HTML test reports
- GitHub Actions — CI/CD pipeline
- Postman — API testing and automation

---

## ✅ Test Coverage

### E2E Tests (Cypress)

#### Login (`cypress/e2e/specs/user-spec.cy.js`)
| Test Case | Status |
|---|---|
| Successful login with valid credentials | ✅ |
| Unsuccessful login with wrong credentials | ✅ |
| Unsuccessful login with empty fields | ✅ |
| Unsuccessful login with empty username | ✅ |
| Unsuccessful login with empty password | ✅ |
| Status code verification with successful login | ✅ |
| Status code verification with wrong credentials | ✅ |

#### My Info (`cypress/e2e/specs/my-info-spec.cy.js`)
| Test Case | Status |
|---|---|
| Successful personal details update | ✅ |

#### Add Employee (`cypress/e2e/specs/add-employee-spec.cy.js`)
| Test Case | Status |
|---|---|
| Successful employee addition | ✅ |
| Unsuccessful employee addition without first name | ✅ |
| Unsuccessful employee addition without last name | ✅ |

#### Employee List (`cypress/e2e/specs/employee-list-spec.cy.js`)
| Test Case | Status |
|---|---|
| Search by valid Employee Id returns correct employee | ✅ |
| Search without filters returns all employees | ✅ |
| Search by invalid Employee Id returns no records | ✅ |
| Reset clears all filters | ✅ |

### API Tests (Postman)

#### Employees
| Request | Method | Tests |
|---|---|---|
| Get Employee List | GET | 5 |
| Get Employee by ID | GET | 4 |
| Get Employee Personal Details | GET | 4 |
| Create Employee | POST | 4 |

---

## 📁 Project Structure

```
Orange-HRM-Cypress/
├── cypress/
│   ├── e2e/
│   │   └── specs/
│   │       ├── user-spec.cy.js              # Login test suite
│   │       ├── my-info-spec.cy.js           # My Info test suite
│   │       ├── add-employee-spec.cy.js      # Add Employee test suite
│   │       └── employee-list-spec.cy.js     # Employee List test suite
│   ├── fixtures/
│   │   └── tests-data/
│   │       └── users/
│   │           └── userData.json            # Test data
│   ├── pages/
│   │   └── page-objects/
│   │       ├── loginPage.js                 # Login Page Object
│   │       ├── myInfoPage.js                # My Info Page Object
│   │       ├── addEmployeePage.js           # Add Employee Page Object
│   │       └── employeeListPage.js          # Employee List Page Object
│   └── support/
│       ├── commands.js                      # Custom Cypress commands
│       ├── e2e.js
│       └── constants/
│           └── messages.js                  # Centralized assertion messages
└── postman/
    ├── OrangeHRM API.postman_collection.json
    └── OrangeHRM Demo.postman_environment.json
```

---

## ⚙️ Prerequisites

- [Node.js](https://nodejs.org/) v22 or higher
- npm v9 or higher
- [Postman](https://www.postman.com/) — for API tests

---

## 🚀 Getting Started

**1. Clone the repository**
```bash
git clone https://github.com/DigoB/Orange-HRM-Cypress.git
cd Orange-HRM-Cypress
```

**2. Install dependencies**
```bash
npm install
```

**3. Run tests in interactive mode**
```bash
npx cypress open
```

**4. Run tests in headless mode**
```bash
npx cypress run
```

The HTML report will be generated at `cypress/reports/index.html`.

---

## 📮 API Tests (Postman)

The `postman/` folder contains the collection and environment files ready to import.

**To run the API tests:**

1. Open Postman
2. Import `postman/OrangeHRM-API.postman_collection.json`
3. Import `postman/OrangeHRM-Demo.postman_environment.json`
4. Select the `OrangeHRM Demo` environment
5. Update the `token` variable with a valid session cookie from the OrangeHRM demo
6. Run the collection via **Collection Runner**

> ⚠️ The session cookie expires periodically. To get a new one, log in to the OrangeHRM demo in the browser and copy the `orangehrm` cookie value from DevTools → Application → Cookies.

---

## 🔐 Test Data

Test credentials are stored in `cypress/fixtures/tests-data/users/userData.json`.

The application under test is the public OrangeHRM demo:
- **URL:** https://opensource-demo.orangehrmlive.com
- **Default credentials:** `Admin` / `admin123`

> ⚠️ The OrangeHRM demo is a shared public environment and may be unstable at times. Some tests may fail due to environment issues unrelated to the test code.

---

## 🧱 Design Decisions

- **Page Object Model:** All UI interactions are encapsulated in Page Object classes, keeping test specs clean and focused on behavior.
- **Action/Assertion separation:** Page Objects distinguish between action methods (interact with UI) and assertion methods (verify outcomes), improving reusability and failure diagnosis.
- **Custom Commands:** Repetitive flows like login are abstracted into `cy.login()` via `commands.js`, reducing duplication across specs.
- **Fixtures:** Test data is externalized in JSON files, keeping data separate from logic.
- **Constants:** Assertion messages are centralized in `support/constants/messages.js` to avoid hardcoded strings across the codebase.
- **Label-based selectors:** Fields without stable attributes are located via their label text using `.parents('.oxd-input-group')`, avoiding fragile `nth-child` selectors.
- **Status code assertions:** The OrangeHRM demo returns inconsistent HTTP status codes (302 for both successful and failed requests). Broad assertions in status code tests are intentional due to this environment limitation.
- **API authentication via session cookie:** The OrangeHRM API uses session-based authentication. The Postman collection uses the `orangehrm` cookie as an API Key header, stored as an environment variable for easy rotation.

---

## 📊 Reports

Test reports are generated automatically after each run using `cypress-mochawesome-reporter`. The HTML report includes test results, execution time, and screenshots on failure.

In CI, reports are uploaded as artifacts and can be downloaded directly from the GitHub Actions run summary.

---

## 🤖 CI/CD

Tests run automatically on every push and pull request to `main` and `cypress-ci` branches via GitHub Actions.

---

## 👨‍💻 Author

**Rodrigo Braz Carneiro**  
QA Engineer  
[LinkedIn](https://linkedin.com/in/rodrigo-braz-carneiro) • [Email](mailto:qa.rodrigobraz@gmail.com)
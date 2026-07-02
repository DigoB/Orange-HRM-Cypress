# 🍊 OrangeHRM - Cypress Test Automation

![Cypress Tests](https://github.com/DigoB/Orange-HRM-Cypress/actions/workflows/ci.yml/badge.svg?branch=cypress-ci)

Automation project for the [OrangeHRM](https://opensource-demo.orangehrmlive.com) demo application, built with **Cypress** using the **Page Object Model (POM)** pattern.

---

## 🛠️ Tech Stack

- [Cypress](https://www.cypress.io/) v15 — End-to-end testing framework
- JavaScript — Test scripting language
- Page Object Model (POM) — Design pattern for test organization
- Fixtures — External test data management
- cypress-mochawesome-reporter — HTML test reports
- GitHub Actions — CI/CD pipeline

---

## ✅ Test Coverage

### Login (`cypress/e2e/specs/user-spec.cy.js`)
| Test Case | Status |
|---|---|
| Successful login with valid credentials | ✅ |
| Unsuccessful login with wrong credentials | ✅ |
| Unsuccessful login with empty fields | ✅ |
| Unsuccessful login with empty username | ✅ |
| Unsuccessful login with empty password | ✅ |
| Status code verification with successful login | ✅ |
| Status code verification with wrong credentials | ✅ |

### My Info (`cypress/e2e/specs/my-info-spec.cy.js`)
| Test Case | Status |
|---|---|
| Successful personal details update | ✅ |

---

## 📁 Project Structure

```
cypress/
├── e2e/
│   └── specs/
│       ├── user-spec.cy.js         # Login test suite
│       └── my-info-spec.cy.js      # My Info test suite
├── fixtures/
│   └── tests-data/
│       └── users/
│           └── userData.json       # Test data
├── pages/
│   └── page-objects/
│       ├── loginPage.js            # Login Page Object
│       └── myInfoPage.js           # My Info Page Object
└── support/
    ├── commands.js                 # Custom Cypress commands
    ├── e2e.js
    └── constants/
        └── messages.js             # Centralized assertion messages
```

---

## ⚙️ Prerequisites

- [Node.js](https://nodejs.org/) v22 or higher
- npm v9 or higher

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
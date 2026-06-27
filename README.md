# 🍊 OrangeHRM - Cypress Test Automation

Automation project for the [OrangeHRM](https://opensource-demo.orangehrmlive.com) demo application, built with **Cypress** using the **Page Object Model (POM)** pattern.

---

## 🛠️ Tech Stack

- [Cypress](https://www.cypress.io/) — End-to-end testing framework
- JavaScript — Test scripting language
- Page Object Model (POM) — Design pattern for test organization
- Fixtures — External test data management

---

## ✅ Test Coverage

### Login (`cypress/e2e/login.spec.cy.js`)
| Test Case | Status |
|---|---|
| Successful login with valid credentials | ✅ |
| Unsuccessful login with wrong credentials | ✅ |
| Unsuccessful login with empty fields | ✅ |
| Unsuccessful login with empty username | ✅ |
| Unsuccessful login with empty password | ✅ |
| Status code verification with successful login | ✅ |
| Status code verification with wrong credentials | ✅ |

### My Info (`cypress/e2e/myInfo.spec.cy.js`)
| Test Case | Status |
|---|---|
| Successful update of personal details (first name, middle name, last name) | ✅ |

---

## 📁 Project Structure

```
cypress/
├── e2e/
│   ├── login.spec.cy.js       # Login test suite
│   └── myInfo.spec.cy.js      # My Info test suite
├── fixtures/
│   └── users/
│       └── userData.json      # Test data
├── pages/
│   ├── loginPage.js           # Login Page Object
│   └── myInfoPage.js          # My Info Page Object
└── support/
    ├── commands.js
    └── constants/
        └── messages.js        # Centralized assertion messages
```

---

## ⚙️ Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

---

## 🚀 Getting Started

**1. Clone the repository**
```bash
git clone https://github.com/seu-usuario/orange-hrm-cypress.git
cd orange-hrm-cypress
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

---

## 🔐 Test Data

Test credentials are stored in `cypress/fixtures/users/userData.json`.

The application under test is the public OrangeHRM demo:
- **URL:** https://opensource-demo.orangehrmlive.com
- **Default credentials:** `Admin` / `admin123`

> ⚠️ The OrangeHRM demo is a shared public environment and may be unstable at times. Some tests may fail due to environment issues unrelated to the test code.

---

## 🧱 Design Decisions

- **Page Object Model:** All UI interactions are encapsulated in Page Object classes, keeping test specs clean and focused on behavior.
- **Fixtures:** Test data is externalized in JSON files, keeping data separate from logic.
- **Constants:** Assertion messages are centralized in `support/constants/messages.js` to avoid hardcoded strings across the codebase.
- **Status code assertions:** The OrangeHRM demo returns inconsistent HTTP status codes (302 for both successful and failed requests). Broad assertions in status code tests are intentional due to this environment limitation.

---

## 👨‍💻 Author

**Rodrigo Braz Carneiro**  
QA Engineer  
[LinkedIn](https://linkedin.com/in/rodrigo-braz-carneiro) • [Email](mailto:qa.rodrigobraz@gmail.com)

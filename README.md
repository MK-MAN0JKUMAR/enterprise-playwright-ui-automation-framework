# 🚀 Playwright Enterprise UI Automation Framework

A **production-grade, multi-application UI automation platform** built using Playwright and TypeScript.

This project is designed as an **automation system**, not just a test suite — focusing on scalability, maintainability, and engineering discipline.

---

# 📌 Goal

Most automation frameworks fail when:

* test count grows
* multiple applications need support
* teams scale
* CI becomes unstable

This framework solves that by enforcing:

* strict architecture boundaries
* reusable components
* deterministic behavior
* parallel-safe execution

---

# 🧱 Architecture Overview

```text
Tests
↓
Fixtures (Dependency Injection)
↓
Flow Layer (Business Logic)
↓
Page Objects (UI Behavior)
↓
Component Factory (Enforcement Layer)
↓
Reusable Components
↓
UIElement (Execution Engine)
↓
Selector Engine (Validation + Healing)
↓
Playwright
```

## Key Features

- Multi-application support (Ecommerce + OrangeHRM)
- Page Object Model
- Component Object Model
- Flow layer abstraction
- Deterministic test data builders
- Environment configuration system
- Parallel execution
- Playwright traces, screenshots and videos
- Allure reporting
- CI/CD ready structure
- Clean domain separation

## Architecture

# 🧪 Test Structure

```
playwright-ui-automation-framework
├─ config                               
│  ├─ applications
│  │  ├─ ecommerce.config.ts        
│  │  └─ orangehrm.config.ts        
│  ├─ environments
│  │  ├─ dev.env.ts                 
│  │  ├─ qa.env.ts                  
│  │  └─ stage.env.ts               
│  ├─ framework.config.ts           
│  └─ playwright.config.ts          
├─ package-lock.json
├─ package.json
├─ README.md
├─ reports
│  ├─ allure-report
│  ├─ allure-results
│  ├─ playwright-report
│  ├─ screenshots
│  ├─ traces
│  └─ videos
├─ scripts
├─ src
│  ├─ applications
│  │  ├─ ecommerce
│  │  │  ├─ components
│  │  │  │  └─ ProductCard.ts
│  │  │  ├─ data
│  │  │  │  ├─ builders
│  │  │  │  │  └─ EcommerceUserBuilder.ts
│  │  │  │  └─ factories
│  │  │  │     └─ EcommerceUserFactory.ts
│  │  │  ├─ flows
│  │  │  │  ├─ CheckoutFlow.ts
│  │  │  │  ├─ LoginFlow.ts
│  │  │  │  └─ SearchProductFlow.ts
│  │  │  └─ pages
│  │  │     ├─ BasePage.ts
│  │  │     ├─ CartPage.ts
│  │  │     ├─ CheckoutPage.ts
│  │  │     ├─ HomePage.ts
│  │  │     ├─ LoginPage.ts
│  │  │     └─ ProductPage.ts
│  │  └─ orangehrm
│  │     ├─ components
│  │     ├─ data
│  │     │  ├─ builders
│  │     │  │  └─ EmployeeBuilder.ts
│  │     │  └─ factories
│  │     │     └─ EmployeeFactory.ts
│  │     ├─ flows
│  │     │  ├─ EmployeeManagementFlow.ts
│  │     │  ├─ LeaveFlow.ts
│  │     │  └─ LoginFlow.ts
│  │     └─ pages
│  │        ├─ AdminPage.ts
│  │        ├─ BasePage.ts
│  │        ├─ DashboardPage.ts
│  │        ├─ EmployeePage.ts
│  │        ├─ LeavePage.ts
│  │        └─ LoginPage.ts
│  ├─ data
│  │  └─ DataContext.ts
│  ├─ domain
│  │  └─ models
│  │     ├─ Employee.ts
│  │     └─ User.ts
│  └─ framework
│     ├─ components
│     │  ├─ Button.ts
│     │  ├─ Dropdown.ts
│     │  ├─ InputField.ts
│     │  ├─ Modal.ts
│     │  └─ Table.ts
│     ├─ constants
│     │  └─ FrameworkConstants.ts
│     ├─ elements
│     │  └─ UIElement.ts
│     ├─ errors
│     │  └─ FrameworkError.ts
│     ├─ fixtures
│     │  ├─ baseTest.ts
│     │  └─ flowFixtures.ts
│     ├─ observability
│     │  ├─ ScreenshotManager.ts
│     │  ├─ TraceManager.ts
│     │  └─ VideoManager.ts
│     ├─ reporting
│     │  ├─ AllureReporter.ts
│     │  └─ Logger.ts
│     ├─ retry
│     │  └─ RetryHandler.ts
│     ├─ selectors
│     │  └─ SelectorEngine.ts
│     ├─ utils
│     │  ├─ DateUtils.ts
│     │  └─ WaitUtils.ts
│     └─ validation
│        └─ UIValidator.ts
├─ tests
│  ├─ ecommerce
│  │  ├─ regression
│  │  │  ├─ checkout.spec.ts
│  │  │  └─ search-product.spec.ts
│  │  ├─ smoke
│  │  │  └─ login.smoke.spec.ts
│  │  └─ ui
│  │     └─ cart.spec.ts
│  └─ orangehrm
│     ├─ regression
│     │  ├─ employee-management.spec.ts
│     │  └─ leave.spec.ts
│     ├─ smoke
│     │  └─ login.smoke.spec.ts
│     └─ ui
│        └─ dashboard.spec.ts
└─ tsconfig.json

```

---

# 🧠 Key Design Principles

### 1. Tests are Business-Level

```ts
test("login", async ({ orangehrmLoginFlow }) => {
  await orangehrmLoginFlow.login();
});
```

✔ No Playwright usage
✔ No selectors
✔ No page objects

---

### 2. Strict Abstraction Enforcement

* UIElement cannot be instantiated directly
* All elements must be created via ComponentFactory

```ts
if (!UIElement.allowCreation) {
  throw new Error("UIElement must be created via ComponentFactory only");
}
```

---

### 3. Flow-Driven Architecture

Flows represent business actions:

```
LoginFlow
CheckoutFlow
EmployeeManagementFlow
```

✔ No UI logic in tests
✔ No business logic in pages

---

### 4. Component-Based Design

Reusable components:

```
Button
InputField
Dropdown
Modal
Table
```

✔ Eliminates selector duplication
✔ Improves maintainability

---

# 🌐 Multi-Application Support

The framework supports multiple applications without architectural changes.

---

## 🛒 Ecommerce (AutomationExercise)

https://automationexercise.com

Modules:

```
Login
Search Product
Cart
Checkout
```

Selector Strategy:

```
data-qa attributes
```

---

## 🧑‍💼 OrangeHRM

https://opensource-demo.orangehrmlive.com

Modules:

```
Login
Dashboard
Employee Management
Leave
```

Selector Strategy:

```
ARIA roles
placeholder
accessible names
```

---

# ⚙️ Core Framework Modules

## 🔹 UIElement (Execution Engine)

Handles:

* click, fill, hover, select
* retry logic
* logging
* Allure integration
* wait handling

---

## 🔹 ComponentFactory

Centralized element creation.

Example:

```ts
factory.inputByDataQa("login-email");
factory.buttonByRole("button", "Login");
```

✔ Prevents direct locator usage
✔ Enforces selector strategy

---

## 🔹 Selector Engine

Supports:

```
data-testid
data-qa
role
placeholder
text
css (fallback)
```

Includes:

* SelectorValidator
* SelectorFallback
* SelectorHealer (auto-healing support)

---

## 🔹 BasePage

Provides:

* navigation handling
* component factory injection
* common utilities

---

## 🔹 RetryHandler

Centralized retry logic:

```
configurable retries
failure handling
logging
```

---

## 🔹 Observability Layer

Captures:

```
screenshots
traces
videos (optional)
logs
```

Modules:

```
ScreenshotManager
TraceManager
VideoManager
```

---

## 🔹 Reporting

```
Playwright HTML Report
Allure Report
```

---

# 🧪 Test Data Strategy

Builder Pattern:

```
EcommerceUserBuilder
EmployeeBuilder
```

Factories:

```
EcommerceUserFactory
EmployeeFactory
```

Shared context:

```
DataContext
```

✔ Deterministic
✔ Reusable
✔ Parallel-safe

---

# ⚙️ Configuration System

Supports dynamic configuration:

```
TEST_APP
TEST_ENV
```

Example:

```bash
TEST_APP=orangehrm TEST_ENV=dev
```

Config files:

```
config/environments/*
config/applications/*
```

---


# ▶️ Execution Commands

Run all tests:

```bash
npm test
```

Run specific app:

```bash
npm run test:ecommerce
npm run test:orangehrm
```

Run smoke tests:

```bash
npm run test:ecommerce:smoke
npm run test:orangehrm:smoke
```

---

# 🚀 CI/CD Pipeline

GitHub Actions pipeline:

```
.github/workflows/playwright-ui-tests.yml
```

Features:

* parallel execution (matrix: app × suite)
* Playwright browser setup
* artifact upload
* failure-based debugging

---

## ⚡ CI Optimization

To reduce pipeline time:

✔ Artifacts uploaded only on failure
✔ ZIP compression used
✔ Videos disabled (optional)

---

# 📊 Observability Strategy

On failure, the framework captures:

```
screenshots
traces
logs
```

Artifacts are zipped and uploaded in CI.

---

# 🔒 Engineering Rules (Strict)

```
❌ No direct Playwright locator usage in tests
❌ No UIElement creation outside factory
❌ No business logic in pages
❌ No selectors inside tests
❌ No global mutable state
```

---

# ⚠️ Known Limitations

```
Selector enforcement not strict yet
Data isolation improvements pending
Auto-healing needs tuning
```

---

# 🔜 Next Improvements

```
Strict selector enforcement layer
Parallel-safe DataContext
Navigation-aware flows
Advanced retry strategies
```

---

# 🧠 What This Project Demonstrates

* Designing automation systems (not scripts)
* Multi-application architecture
* Scalable test frameworks
* Playwright internals understanding
* CI/CD integration
* Engineering discipline in automation

---

# 📎 Tech Stack

```
Playwright
TypeScript
Node.js
Allure Reporting
GitHub Actions
ESLint
Prettier
```

---

# 🧠 Final Thought

This project is not about testing features.

It’s about building a system that can test **any feature, across multiple applications, reliably at scale**.



---

# Author

Manoj Kumar
SDET | Automation Engineer

Technology Stack
Java | Rest Assured | TestNG | WireMock | Maven | Allure | CI/CD (GitHub Actions, Jenkins)

---


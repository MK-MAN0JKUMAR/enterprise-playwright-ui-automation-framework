# Enterprise Playwright UI Automation Framework

A production-style UI automation framework built with **Playwright + TypeScript** following enterprise SDET architecture principles.

This framework demonstrates how large product companies structure scalable automation platforms rather than simple test scripts.

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

Test Layer

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

# Author

Manoj Kumar
SDET | Automation Engineer

Technology Stack
Java | Rest Assured | TestNG | WireMock | Maven | Allure | CI/CD (GitHub Actions, Jenkins)

---


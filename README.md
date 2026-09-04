# automation-test-playwright-ts

End-to-end test automation suite built with [Playwright](https://playwright.dev/) and TypeScript, following the Page Object Model (POM) pattern.

---

## Tech Stack

- [Playwright](https://playwright.dev/) — browser automation framework
- [TypeScript](https://www.typescriptlang.org/) — strongly typed JavaScript
- Node.js — runtime environment

---

## Project Structure

```
├── pages/                  # Page Object classes
│   ├── HomePage.ts
│   ├── UseCasesPage.ts
│   └── QuotePage.ts
├── selectors/              # Centralised element selectors
│   ├── home.selectors.ts
│   ├── use-cases.selectors.ts
│   └── quote.selectors.ts
├── tests/                  # Test specs
│   └── demo.spec.ts
├── playwright.config.ts    # Playwright configuration
└── tsconfig.json           # TypeScript configuration
```

---

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (bundled with Node.js)

---

## Setup

Install dependencies and Playwright browsers:

```bash
npm install
npx playwright install
```

---

## Running Tests

| Command | Description |
|---|---|
| `npx playwright test` | Run all tests |
| `npx playwright test tests/demo.spec.ts` | Run a specific test file |
| `npx playwright test --project=chromium` | Run tests on Chromium only |
| `npx playwright test --ui` | Open interactive UI mode |
| `npx playwright test --debug` | Run in debug mode |
| `npx playwright show-report` | Open the HTML test report |

> Tests run in **headed mode** (browser visible) by default. To run headlessly, set `headless: true` in `playwright.config.ts`.

---

## Configuration

Key settings in [`playwright.config.ts`](playwright.config.ts):

| Setting | Value |
|---|---|
| Test directory | `./tests` |
| Browser | Chromium (Desktop Chrome) |
| Headless | `false` |
| Retries (CI) | 2 |
| Reporter | HTML |
| Trace | On first retry |

---

## Test Coverage

| Test | Description |
|---|---|
| `Request a quote form submission` | Navigates from the home page through the Use Cases section and submits the quote request form with sample data |

---

## CI

On CI, the following environment variable behaviours apply automatically:

- `forbidOnly` is enabled — prevents accidental `.only` left in code
- `retries` set to **2**
- `workers` set to **1** (sequential execution)

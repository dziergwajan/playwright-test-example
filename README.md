# FinTech App Playwright Test Framework Example

This repository contains an example of an end-to-end testing framework for a FinTech web application. The framework is built using [Playwright](https://playwright.dev/) and TypeScript.

---

## Architecture & Framework Design

The test framework is designed to avoid duplication and abstract away complexities:

1. **Page Object Model (POM)** (`/pages`): Web elements and interactions are encapsulated into individual classes (`LandingPage`, `LoginPage`, `DashboardPage`). This separates the test action definitions from the actual tests, making logic reusable and maintainable.
2. **Page Manager** (`/pages/PageManager.ts`): Instead of instantiating every page class individually in tests, the `PageManager` coordinates access to all page objects.
3. **Custom Fixtures** (`/fixtures/baseTest.ts`): Built on top of Playwright's native `test.extend`, the custom fixture instantiates the `PageManager` (`app`) and directly injects it into every test along with default test data (`defaultUser`).
4. **Data Management** (`/types` & `.env`): Test data (e.g. user credentials) is strictly typed via TypeScript interfaces and entirely managed via Environment Variables (`.env`) to ensure security and scalability.

---

## Test data prerequisites

To maintain test reliability and performance, this example assumes the use of a whitelisted test account that bypasses any MFA (Multi-Factor Authentication) and 'Remember This Device' fingerprinting. In a real-world scenario, this is achieved by using a dedicated service account with MFA and fingerprinting disabled or by injecting an automation-specific bypass header in the staging environment.

---

## Running the Tests

### Option 1: Running Locally (Without Docker)

You will need [Node.js](https://nodejs.org/) installed on your machine (LTS version is recommended). If you use `nvm`, you can install and use the LTS version by running:
```bash
nvm install --lts
nvm use --lts
```

**1. Install dependencies:**
```bash
npm install
```

**2. Set up Environment Variables:**
Copy the example environment file and configure it with your test account credentials and the target application URL:
```bash
cp .env.example .env
```
*(Open the `.env` file, replace `your_email@example.com` and `your_password_here` with actual test account credentials, and replace the placeholder `BASE_URL` with the actual URL of the application you want to test)*

**3. Install Playwright Browsers:**
```bash
npx playwright install
```

**4. Run the test suite:**
```bash
# Run tests headlessly in the background
npx playwright test

# Run tests in UI mode (recommended for debugging)
npx playwright test --ui

# Run tests headed (shows the browser opening)
npx playwright test --headed
```

---

### Option 2: Running via Docker

Running the tests via Docker removes the need to install dependencies (Node.js and Playwright) on your machine. It also guarantees execution consistency regardless of the host operating system.

**1. Build the Docker Image:**
```bash
docker build -t fintech-tests .
```

**2. Run the tests in the container:**
You must pass the `.env` file (or the environment variable directly) to the container so the tests can authenticate:
```bash
# Run the test suite headlessly with the .env file
docker run --rm --env-file .env fintech-tests
```

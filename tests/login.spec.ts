import { test, expect } from '../fixtures/baseTest';

test('Login and verify portfolio value', async ({ page, app, defaultUser }) => {
  await page.goto('/');
  await app.landingPage.verifyLandingPage();
  await app.landingPage.proceedToLogin();
  await app.loginPage.verifyLoginPage();
  await app.loginPage.login(defaultUser);
  await app.dashboardPage.verifyDashboardPage();
  await app.dashboardPage.verifyPortfolioValueIsACorrectNumber();
});
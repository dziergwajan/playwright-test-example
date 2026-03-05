import { expect, type Locator, type Page } from '@playwright/test';

export class LandingPage {
  readonly page: Page;
  private readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginButton = page.getByTestId('Log in').first();
  }

  async verifyLandingPage() {
    await expect(this.loginButton).toBeVisible();
  }

  async proceedToLogin() {
    await this.loginButton.click();
  }
}
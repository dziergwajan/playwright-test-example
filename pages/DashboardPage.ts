import { expect, type Locator, type Page } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  private readonly portfolioValue: Locator;

  constructor(page: Page) {
    this.page = page;
    this.portfolioValue = page.getByTestId('portfolio-value');
  }

  async verifyDashboardPage() {
    await expect(this.portfolioValue).toBeVisible({ timeout: 10000 });
  }

  async verifyPortfolioValueIsACorrectNumber() {
    const portfolioValue = this.portfolioValue.locator('.sr-only');
    // Validates portfolio value starts with a number (including 0, and optional commas or dots)
    await expect(portfolioValue).toHaveText(/^[0-9]+([.,][0-9]+)?/);
  }
}
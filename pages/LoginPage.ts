import { expect, type Locator, type Page } from '@playwright/test';
import { type User } from '../types/user';

export class LoginPage {
  readonly page: Page;
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('input[name="username"]')
    this.passwordInput = page.locator('input[name="password"]')
    this.loginButton = page.locator('button[type="submit"]');
  }

  async verifyLoginPage() {
    await expect(this.usernameInput).toBeVisible();;
    await expect(this.passwordInput).toBeVisible();
    await expect(this.loginButton).toBeVisible();
  }

  async login(user: User) {
    await this.usernameInput.click();
    await this.usernameInput.fill(user.username);
    await this.passwordInput.fill(user.password);
    await this.loginButton.click();
  }
}
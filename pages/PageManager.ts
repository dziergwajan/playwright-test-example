import { Page } from '@playwright/test';
import { LandingPage } from '../pages/LandingPage';
import { LoginPage } from './LoginPage';
import { DashboardPage } from './DashboardPage';

export class PageManager {
  readonly landingPage: LandingPage;
  readonly loginPage: LoginPage;
  readonly dashboardPage: DashboardPage;

  constructor(page: Page) {
    this.landingPage = new LandingPage(page);
    this.loginPage = new LoginPage(page);
    this.dashboardPage = new DashboardPage(page);
  }
}
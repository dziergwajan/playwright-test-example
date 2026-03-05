import { test as base } from '@playwright/test';
import { PageManager } from '../pages/PageManager';
import { type User } from '../types/user';

export const test = base.extend<{
  app: PageManager;
  defaultUser: User
}>({
  app: async ({ page }, use) => {
    const app = new PageManager(page);
    await use(app);
  },
  defaultUser: async ({ }, use) => {
    // Constructs the user from environment variables
    const user: User = {
      username: process.env.FINTECH_USERNAME || 'MISSING_ENV_USERNAME',
      password: process.env.FINTECH_PASSWORD || 'MISSING_ENV_PASSWORD',
    };
    await use(user);
  },
});

export { expect } from '@playwright/test';
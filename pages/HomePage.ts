import { Page, expect } from '@playwright/test';
import { homeSelectors } from '../selectors/home.selectors';

export class HomePage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('https://astroflow.wingflows.com/');
  }

  async verifyHeroTitleIsVisible() {
    await expect(this.page.locator(homeSelectors.heroTitle)).toBeVisible();
  }

    async clickRequestAQuote() {
    await this.page.getByRole('link', { name: homeSelectors.requestQuoteLink }).first().click();
  }

  async clickUseCasesTab() {
    await this.page.getByRole('link', { name: homeSelectors.useCasesLink }).first().click();
  }

   async clickExploreCapabilities() {
    await this.page.getByRole('link', { name: homeSelectors.exploreCapabilitiesLink }).click();
  }
}

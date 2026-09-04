import { Page } from '@playwright/test';
import { CapabilitiesSelectors } from '../selectors/Capabilities.selectors';
export class CapabilitiesPage {
  constructor(private page: Page) {}

async scrollToBottom() {
    await this.page.evaluate(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }));
    await this.page.waitForTimeout(800);
  }

    async clickRequestAQuote() {
        await this.page.getByRole('main').getByRole('link', { name: CapabilitiesSelectors.requestAQuoteButton1 }).click();
    }
      }
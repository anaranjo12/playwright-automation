import { Page } from '@playwright/test';
import { useCasesSelectors } from '../selectors/use-cases.selectors';

export class UseCasesPage {
  constructor(private page: Page) {}

  async scrollToBottom() {
    await this.page.evaluate(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }));
    await this.page.waitForTimeout(800);
  }

  async clickRequestAQuote() {
    // Targets the main CTA button in the page body (not the nav "Request Quote")
    await this.page.getByRole('link', { name: useCasesSelectors.requestAQuoteButton }).first().click();
  }
}

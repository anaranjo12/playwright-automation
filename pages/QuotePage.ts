import { Page, expect } from '@playwright/test';
import { quoteSelectors } from '../selectors/quote.selectors';

export interface QuoteFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  industry: string;
  timeline: string;
  volume: string;
  details: string;
}

export class QuotePage {
  constructor(private page: Page) {}

  async verifyPageHeadingIsVisible() {
    await expect(this.page.locator(quoteSelectors.pageHeading)).toBeVisible();
  }

  async fillForm(data: QuoteFormData) {
    await this.page.locator(quoteSelectors.firstNameInput).fill(data.firstName);
    await this.page.locator(quoteSelectors.lastNameInput).fill(data.lastName);
    await this.page.locator(quoteSelectors.emailInput).fill(data.email);
    await this.page.locator(quoteSelectors.phoneInput).fill(data.phone);
    await this.page.locator(quoteSelectors.companyInput).fill(data.company);
    await this.page.locator(quoteSelectors.industrySelect).selectOption({ value: data.industry });
    await this.page.locator(quoteSelectors.technologyCheckbox).click();
    await this.page.locator(quoteSelectors.timelineSelect).selectOption(data.timeline);
    await this.page.locator(quoteSelectors.volumeInput).fill(data.volume);
    await this.page.locator(quoteSelectors.detailsTextarea).fill(data.details);
  }

  async submitForm() {
    await this.page.getByRole('button', { name: quoteSelectors.submitButton }).click();
  }
}

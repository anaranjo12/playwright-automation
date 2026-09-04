import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { UseCasesPage } from '../pages/UseCasesPage';
import { QuotePage } from '../pages/QuotePage';

const quoteFormData = {
  firstName: 'Name Example',
  lastName: 'Last Name Example',
  email: 'test@playwright.dev',
  phone: '9123123123',
  company: 'Playwright',
  industry: 'technology',
  timeline: '3-6-months',
  volume: '10000',
  details: 'Test example request',
};

test('Request a quote form submission', async ({ page }) => {
  const homePage = new HomePage(page);
  const useCasesPage = new UseCasesPage(page);
  const quotePage = new QuotePage(page);

  await homePage.navigate();
  await homePage.verifyHeroTitleIsVisible();
  await homePage.clickUseCasesTab();

  await useCasesPage.scrollToBottom();
  await useCasesPage.clickRequestAQuote();

  await quotePage.verifyPageHeadingIsVisible();
  await quotePage.fillForm(quoteFormData);
  //await quotePage.submitForm();
});
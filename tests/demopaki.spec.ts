import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { QuotePage } from '../pages/QuotePage';
import { CapabilitiesPage } from '../pages/CapabilitiesPage';

const quoteFormData = {
  firstName: 'Name ',
  lastName: 'Last Name ',
  email: 'test@playwright.dev',
  phone: '2222222',
  company: 'Playwright',
  industry: 'technology',
  timeline: '3-6-months',
  volume: '10000',
  details: 'test example',
};

test('Request a quote form Capabilities page', async ({ page }) => {
  const homePage = new HomePage(page);
  const capabilitiesPage = new CapabilitiesPage(page);
  const quotePage = new QuotePage(page);

  await homePage.navigate();
  await homePage.verifyHeroTitleIsVisible();
  await homePage.clickExploreCapabilities();

  await capabilitiesPage.scrollToBottom();
  await capabilitiesPage.clickRequestAQuote();

  await quotePage.verifyPageHeadingIsVisible();
  await quotePage.fillForm(quoteFormData);
  //await quotePage.submitForm();
});
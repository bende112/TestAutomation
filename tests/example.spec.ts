import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://adminbom.smobilpay.integration.maviance.info/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("smobilpay 2.0");
});

test('User login and entered amount', async ({ page }) => {
  await page.goto('https://adminbom.smobilpay.integration.maviance.info/login');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('vbwebagent');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('1234.Com');
  await page.getByLabel('Sign In').click();
  await page.getByTestId('remittance_send-menu-item').click();
  await page.getByLabel('Sender Sends *').fill('10000');
  await page.getByTestId('recipient_country').locator('#country-select-demo').click();
  await page.getByText('BeninXOF').click();
  await page.getByLabel('Select Delivery Method *').click();
  await page.getByRole('option', { name: 'Mobile Money' }).click();
  await page.getByLabel('Select Delivery Channel *').click();
  await page.getByRole('option', { name: 'MTN MoMo' }).click();
  await page.getByLabel('Recipient Mobile Money Number *').click();
  await page.getByLabel('Recipient Mobile Money Number *').fill('2334444545');
  await page.getByRole('heading', { name: '10,000 XAF' }).click();
  await page.getByTestId('button').click();
});

test('user enter details ', async ({ page}) => {
  await page.goto('https://adminbom.smobilpay.integration.maviance.info/login');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('vbwebagent');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('1234.Com');
  await page.getByLabel('Sign In').click();
  await page.getByTestId('remittance_send-menu-item').click();
  await page.getByLabel('Sender Sends *').fill('10000');
  await page.getByTestId('recipient_country').locator('#country-select-demo').click();
  await page.getByText('BeninXOF').click();
  await page.getByLabel('Select Delivery Method *').click();
  await page.getByRole('option', { name: 'Mobile Money' }).click();
  await page.getByLabel('Select Delivery Channel *').click();
  await page.getByRole('option', { name: 'MTN MoMo' }).click();
  await page.getByLabel('Recipient Mobile Money Number *').click();
  await page.getByLabel('Recipient Mobile Money Number *').fill('4324243424');
  await page.getByText('Sender Sends *Sender Sends *CountryCountryExchange Rate1 XAF = 0.9598').click();
  await page.getByRole('option', { name: 'MTN MoMo' }).click();
  await page.getByRole('heading', { name: '10,000 XAF' }).click();
  await page.getByTestId('button').click();
  await page.getByLabel('First Name *').click();
  await page.getByLabel('First Name *').fill('bende');
  await page.getByLabel('Last Name *').click();
  await page.getByLabel('Last Name *').fill('nku');
  await page.locator('div:nth-child(2) > div > div:nth-child(7)').click();
  await page.getByLabel('City *').click();
  await page.getByLabel('City *').fill('benin');
  await page.getByLabel('State *').click();
  await page.getByLabel('State *').fill('fe');
  await page.getByLabel('Phone Number *').click();
  await page.getByLabel('Phone Number *').fill('34233443423');
  await page.locator('div:nth-child(2) > div > div:nth-child(7)').click();
  await page.getByRole('button', { name: 'Next' }).click();
});







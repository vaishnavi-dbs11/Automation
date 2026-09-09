import { test , expect } from '@playwright/test';

test('First Playwright test', async ({ page }) => {
    await page.goto('https://sso.teachable.com/secure/9521/identity/sign_up/otp?wizard_id=MNzKDk0FVJR_KI8bYxdEgRjgDHdHMOC0sLVlVfJFt2YYQiGQYdn6ENphJ-wNW8meGvpWgH1KbN7niAUoJ2nuag');
    await page.locator('#name').fill('Vaishnavi');
    await page.getByTestId('email-input').fill('gvaarts1501@gmail.com');
    await page.getByRole('checkbox', { name: /I agree/i }).check();
    await page.getByRole('button', { name: 'Send Code' }).click();
    await page.pause();
});


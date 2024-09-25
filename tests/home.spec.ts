import { test, expect } from '@playwright/test';

test.describe('Home', () => {
    test('Open HomePage and Verify title', async ({ page}) => {
        
    //open url
    await page.goto('https://practice.sdetunicorns.com/');
    
    //verify url
    await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
    })
    
    
})

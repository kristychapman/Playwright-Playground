import { test, expect } from '@playwright/test';
import LoginPage from '../pages/login.page';
import { type } from 'os';

test.describe('LogintoKits', () => {
    let loginPage: LoginPage;

    test('Open HomePage and log in', async ({ page}) => {
      loginPage = new LoginPage(page) 
      
    //login
    loginPage.kitsurl
    loginPage.logIntoKits
     
    //verify login
    
    //await expect(userId).toBe()
})
})
    test('Open HomePage and Verify title', async ({ page}) => {
        
    //open url
    await page.goto('https://practice.sdetunicorns.com/');
    
    //verify url
    await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
    })
test('Open About page and verify title', async ({ page}) => {
    
    //open url
    await page.goto('https://practice.sdetunicorns.com/about/');
    //verify page
    await expect(page).toHaveTitle('About – Practice E-Commerce Site');
})
test('Click Get Started button using CSS Selector', async ({ page}) => {
    //Open URL
    await page.goto('https://practice.sdetunicorns.com/');
    //click the button
    await page.locator('#get-started').click();
    //verify url has #get-started
    await expect(page).toHaveURL(/.*#get-started/);
 })
 test('Verify heading text is visible using text selector', async ({ page}) => {
    //Open URL
    await page.goto('https://practice.sdetunicorns.com/');
    //find the text locator
    const headingText = page.locator('text=Think different. Make different')
    //verify heading text is visible
    await expect(headingText).toBeVisible();
 })
 test('Verify search icon is visible using xpath selector', async ({ page}) => {
    //Open URL
    await page.goto('https://practice.sdetunicorns.com/');
    //find the search icon
    const searchIcon = page.locator('//div[@class="zak-header-actions zak-header-actions--desktop"]//a[@class="zak-header-search__toggle"]')
    //verify search icon is visible
    await expect(searchIcon).toBeVisible();
})
test('Verify text of all links', async ({ page}) => {
    const expectedLinks = [
        "Home",
        "About",
        "Shop",
        "Blog",
        "Contact",
        "My account",
    ];
    //Open URL
    await page.goto('https://practice.sdetunicorns.com/');
    //find the nav links
    const navLinks = page.locator('#primary-menu li[id*=menu]')
    //verify nav links text
    expect(await navLinks.allTextContents()).toEqual(expectedLinks);
})
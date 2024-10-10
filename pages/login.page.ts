import { expect, Locator, Page } from '@playwright/test';


export default class LoginPage
{
    
    fill(userNmfield: Locator, user: Locator) {
        throw new Error('Method not implemented.');
    }
    userIdfield: Locator;
    url: any;
    page: Page;
    userNmfield: Locator;
    passWdfield: Locator;
    logInButton: Locator;
    user: string;
    pass: string;
    userId: string;
    
    constructor(page: Page){
        this.page;
        this.url = 
        this.userNmfield = page.getByText("lgnBase_UserName");
        this.passWdfield = page.getByText("lgnBase_Password");
        this.logInButton = page.getByText("lgnBase_LoginButton");
        this.userIdfield = page.getByText("lblUserId");
        this.user = "kchapman";
        this.pass = "MaxandMia11408!";
        this.userId = "Chapman, Kristy"
    }
    async kitsurl(){
        await this.page.goto('https://t-sit2-kits.kpers.org/wfmLogin.aspx');
    }
    async logIntoKits () {
        await this.url
        await this.userNmfield.fill(this.user);
        await this.passWdfield.fill(this.pass);
        await this.logInButton.click();
        await expect(this.userIdfield).toContain(this.userId);
    }



    }
   






    

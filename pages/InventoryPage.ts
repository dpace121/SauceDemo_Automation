import {Page, Locator} from '@playwright/test';

export class InventoryPage{
    readonly page: Page;
    readonly menuButton: Locator;
    readonly logoutLink: Locator;

    constructor(page: Page){
        this.page = page;
        this.menuButton = page.getByRole('button',{name:'Open Menu'});
        this.logoutLink = page.getByRole('link',{name:'Logout'});
    }
    async logout(){
        await this.menuButton.click();
        await this.logoutLink.click();
    }
}
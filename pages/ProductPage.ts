import { Page, Locator } from '@playwright/test';

export class ProductsPage {

    readonly page: Page;
    readonly productsTitle: Locator;
    readonly cartButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productsTitle = page.getByText('Products');
        this.cartButton = page.locator('.shopping_cart_link');
    }

    async addProductToCart(productName: string) {
        await this.page
        .locator(`[data-test="add-to-cart-${productName}"]`)
            .click();;
    }

    async openCart() {
        await this.cartButton.click();
    }
}
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
        const product = this.page
        .locator(`[data-test="inventory-item"]`)
        .filter({ hasText: productName });

        await product.getByRole('button', { name: 'Add to cart' }).click();

    }

    async openCart() {
        await this.cartButton.click();
    }
}
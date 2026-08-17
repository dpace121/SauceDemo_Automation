import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.ts';
import { ProductsPage } from '../pages/ProductPage.ts';
import loginData from '../test-data/loginData.json';


test('Add product to cart', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);

    await loginPage.gotoLoginPage();

    await loginPage.login(
        loginData.valid_user.username,
        loginData.valid_user.password
    );

    await expect(productsPage.productsTitle).toBeVisible();

    await productsPage.addProductToCart('sauce-labs-backpack');

    await productsPage.openCart();

});

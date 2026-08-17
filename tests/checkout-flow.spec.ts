import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import loginData from '../test-data/loginData.json';

test('Complete end-to-end purchase flow', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.gotoLoginPage();
    await loginPage.login(loginData.valid_user.username, loginData.valid_user.password);

    await productsPage.addProductToCart('Sauce Labs Backpack');
    await productsPage.openCart();

    await cartPage.proceedToCheckout();

    await checkoutPage.fillCheckoutInformation('John', 'Smith', '122312');
    await checkoutPage.completeOrder();
    
    await expect(page.locator('[data-test="complete-header"]')).toHaveText('Thank you for your order!');
    
    await checkoutPage.returnToProducts();
});
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.ts';
import { InventoryPage } from '../pages/InventoryPage.ts';
import loginData from '../test-data/loginData.json';


test('Valid Login', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();

    await loginPage.login(
        loginData.valid_user.username,
        loginData.valid_user.password
    );

    await expect(page).toHaveURL(
        'https://www.saucedemo.com/inventory.html'
    );

});

test('Invalid Login', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();

    await loginPage.login(
        loginData.invalid_user.username,
        loginData.invalid_user.password
    );

    await expect(loginPage.errorMessage).toBeVisible();

});
test('Valid username and invalid password', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();

    await loginPage.login(
        loginData.valid_user.username,
        loginData.invalid_user.password
    );

    await expect(loginPage.errorMessage).toBeVisible();

});
test('Invalid username and valid password', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();

    await loginPage.login(
        loginData.invalid_user.username,
        loginData.valid_user.password
    );

    await expect(loginPage.errorMessage).toBeVisible();

});
test('Blank username', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();

    await loginPage.login(
        loginData.blank_username.username,
        loginData.blank_username.password
    );

    await expect(loginPage.errorMessage).toBeVisible();

});
test('Blank password', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();

    await loginPage.login(
        loginData.blank_password.username,
        loginData.blank_password.password
    );

    await expect(loginPage.errorMessage).toBeVisible();

});
test('Logout', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.gotoLoginPage();

    await loginPage.login(
        loginData.valid_user.username,
        loginData.valid_user.password
    );

    await expect(page).toHaveURL(
        'https://www.saucedemo.com/inventory.html'
    );

    await inventoryPage.logout();

    await expect(page).toHaveURL(
        'https://www.saucedemo.com/'
    );

});

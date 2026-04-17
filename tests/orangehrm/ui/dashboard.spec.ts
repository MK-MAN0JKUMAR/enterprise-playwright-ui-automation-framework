import { LoginDataFactory } from "@applications/orangehrm/data/factories/LoginDataFactory";
import { test } from "@framework/fixtures/flowFixtures";

/*
test("dashboard should be visible after login", async ({ orangehrmLoginFlow }) => {

    await orangehrmLoginFlow.login(
        LoginDataFactory.defaultUser()
    );

});

test("login should fail with invalid user", async ({ orangehrmLoginFlow }) => {

    await orangehrmLoginFlow.login(
        LoginDataFactory.invalidUser()
    );

});
*/

test("admin page should be visible", async ({
    orangehrmLoginFlow,
    adminFlow
}) => {

    await orangehrmLoginFlow.login(
        LoginDataFactory.defaultUser()
    );

    await adminFlow.openAdmin();

});
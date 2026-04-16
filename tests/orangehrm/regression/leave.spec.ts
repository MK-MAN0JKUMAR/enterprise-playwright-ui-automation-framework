import { LoginDataFactory } from "@applications/orangehrm/data/factories/LoginDataFactory";
import { test } from "@framework/fixtures/flowFixtures";

test("should apply leave", async ({
    orangehrmLoginFlow,
    leaveFlow
}) => {

    await orangehrmLoginFlow.login(
        LoginDataFactory.defaultUser()
    );

    await leaveFlow.applyLeave();

});
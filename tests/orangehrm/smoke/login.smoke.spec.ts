import { test } from "@framework/fixtures/flowFixtures";
import { LoginFlow } from "@applications/orangehrm/flows/LoginFlow";

type Fixtures = {
  orangehrmLoginFlow: LoginFlow;
};

test("orangehrm login", async ({ orangehrmLoginFlow }: Fixtures) => {

  await orangehrmLoginFlow.login();

});
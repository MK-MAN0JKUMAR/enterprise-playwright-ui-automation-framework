import { test } from "../../../src/framework/fixtures/flowFixtures";
import { LoginFlow } from "../../../src/applications/orangehrm/flows/LoginFlow";

type Fixtures = {
  orangehrmLoginFlow: LoginFlow;
};

test("orangehrm login", async ({ orangehrmLoginFlow }: Fixtures) => {

  await orangehrmLoginFlow.login();

});
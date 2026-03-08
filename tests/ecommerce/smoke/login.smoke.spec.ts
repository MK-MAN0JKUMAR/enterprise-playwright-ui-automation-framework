import { test } from "../../../src/framework/fixtures/flowFixtures";
import { LoginFlow } from "../../../src/applications/ecommerce/flows/LoginFlow";

type Fixtures = {
  ecommerceLoginFlow: LoginFlow;
};

test("ecommerce login", async ({ ecommerceLoginFlow }: Fixtures) => {

  await ecommerceLoginFlow.login(
    "automation.test@example.com",
    "Test@123"
  );

});
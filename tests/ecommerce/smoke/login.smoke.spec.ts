import { test } from "@framework/fixtures/flowFixtures";
import { LoginFlow } from "@applications/ecommerce/flows/LoginFlow";

type Fixtures = {
  ecommerceLoginFlow: LoginFlow;
};

test("ecommerce login", async ({ ecommerceLoginFlow }: Fixtures) => {

  await ecommerceLoginFlow.login(
    "automation.test@example.com",
    "Test@123"
  );

});
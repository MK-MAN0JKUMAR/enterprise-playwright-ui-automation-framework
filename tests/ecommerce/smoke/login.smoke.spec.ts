import { LoginDataFactory } from "@applications/ecommerce/data/factories/LoginDataFactory";
import { LoginFlow } from "@applications/ecommerce/flows/LoginFlow";
import { test } from "@framework/fixtures/flowFixtures";


type Fixtures = {
  ecommerceLoginFlow: LoginFlow;
};

test("ecommerce login", async ({ ecommerceLoginFlow }: Fixtures) => {

  const user = LoginDataFactory.defaultUser();
  await ecommerceLoginFlow.login(user);

});
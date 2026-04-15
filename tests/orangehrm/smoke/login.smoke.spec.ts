import { LoginDataFactory } from "@applications/orangehrm/data/factories/LoginDataFactory";
import { LoginFlow } from "@applications/orangehrm/flows/LoginFlow";
import { test } from "@framework/fixtures/flowFixtures";


type Fixtures = {
  orangehrmLoginFlow: LoginFlow;
};

test("orangehrm login", async ({ orangehrmLoginFlow }: Fixtures) => {

  const user = LoginDataFactory.defaultUser();
  await orangehrmLoginFlow.login(user);

});
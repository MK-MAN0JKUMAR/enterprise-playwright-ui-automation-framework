import { pageTest } from "./pageFixtures";

import { LoginFlow as EcommerceLoginFlow } from "../../applications/ecommerce/flows/LoginFlow";
import { LoginFlow as OrangeLoginFlow } from "../../applications/orangehrm/flows/LoginFlow";

type FlowFixtures = {

  ecommerceLoginFlow: EcommerceLoginFlow;
  orangehrmLoginFlow: OrangeLoginFlow;

};

export const test = pageTest.extend<FlowFixtures>({

  ecommerceLoginFlow: async ({ ecommerceLoginPage }, use) => {

    await use(new EcommerceLoginFlow(ecommerceLoginPage));

  },

  orangehrmLoginFlow: async ({ orangehrmLoginPage, orangeDashboardPage }, use) => {

    await use(new OrangeLoginFlow(
      orangehrmLoginPage,
      orangeDashboardPage
    ));

  }

});
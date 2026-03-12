import { pageTest } from "./pageFixtures";

import { LoginFlow as EcommerceLoginFlow } from "../../applications/ecommerce/flows/LoginFlow";
import { LoginFlow as OrangehrmLoginFlow } from "../../applications/orangehrm/flows/LoginFlow";

type FlowFixtures = {

  ecommerceLoginFlow: EcommerceLoginFlow;

  orangehrmLoginFlow: OrangehrmLoginFlow;

};

export const test = pageTest.extend<FlowFixtures>({

  ecommerceLoginFlow: async ({ ecommerceLoginPage }, use) => {

    const loginFlow = new EcommerceLoginFlow(ecommerceLoginPage);

    await use(loginFlow);

  },

  orangehrmLoginFlow: async (
    { orangehrmLoginPage, orangehrmDashboardPage },
    use
  ) => {

    const loginFlow = new OrangehrmLoginFlow(
      orangehrmLoginPage,
      orangehrmDashboardPage
    );

    await use(loginFlow);

  }

});
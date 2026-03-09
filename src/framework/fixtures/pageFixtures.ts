import { baseTest } from "./baseTest";

import { LoginPage as EcommerceLoginPage } from "../../applications/ecommerce/pages/LoginPage";

import { LoginPage as OrangeLoginPage } from "../../applications/orangehrm/pages/LoginPage";
import { DashboardPage } from "../../applications/orangehrm/pages/DashboardPage";

type PageFixtures = {

  ecommerceLoginPage: EcommerceLoginPage;

  orangehrmLoginPage: OrangeLoginPage;
  orangeDashboardPage: DashboardPage;

};

export const pageTest = baseTest.extend<PageFixtures>({

  ecommerceLoginPage: async ({ page }, use) => {
    await use(new EcommerceLoginPage(page));
  },

  orangehrmLoginPage: async ({ page }, use) => {
    await use(new OrangeLoginPage(page));
  },

  orangeDashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  }

});
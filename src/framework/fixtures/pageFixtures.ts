import { baseTest } from "./baseTest";

import { LoginPage as EcommerceLoginPage } from "../../applications/ecommerce/pages/LoginPage";

import { LoginPage as OrangeLoginPage } from "../../applications/orangehrm/pages/LoginPage";
import { DashboardPage as OrangeDashboardPage } from "../../applications/orangehrm/pages/DashboardPage";

type PageFixtures = {

  ecommerceLoginPage: EcommerceLoginPage;

  orangehrmLoginPage: OrangeLoginPage;
  orangehrmDashboardPage: OrangeDashboardPage;

};

export const pageTest = baseTest.extend<PageFixtures>({

  ecommerceLoginPage: async ({ page }, use) => {

    const loginPage = new EcommerceLoginPage(page);

    await use(loginPage);

  },

  orangehrmLoginPage: async ({ page }, use) => {

    const loginPage = new OrangeLoginPage(page);

    await use(loginPage);

  },

  orangehrmDashboardPage: async ({ page }, use) => {

    const dashboardPage = new OrangeDashboardPage(page);

    await use(dashboardPage);

  }

});
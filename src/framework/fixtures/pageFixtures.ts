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

  ecommerceLoginPage: async ({ page, appConfig }, use) => {

    await use(new EcommerceLoginPage(page, appConfig));
  },

  orangehrmLoginPage: async ({ page, appConfig }, use) => {

    await use(new OrangeLoginPage(page, appConfig));

  },

  orangehrmDashboardPage: async ({ page, appConfig }, use) => {

    const dashboardPage = new OrangeDashboardPage(page, appConfig);

    await use(dashboardPage);

  }

});
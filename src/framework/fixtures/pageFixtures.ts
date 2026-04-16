import { baseTest } from "./baseTest";

import { LoginPage as EcommerceLoginPage } from "@applications/ecommerce/pages/LoginPage";

import { LoginPage as OrangeLoginPage } from "@applications/orangehrm/pages/LoginPage";
import { DashboardPage as OrangeDashboardPage } from "@applications/orangehrm/pages/DashboardPage";
import { AdminPage as OrangeAdminPage } from "@applications/orangehrm/pages/AdminPage";
import { EmployeePage as OrangeEmployeePage } from "@applications/orangehrm/pages/EmployeePage";
import { LeavePage as OrangeLeavePage } from "@applications/orangehrm/pages/LeavePage";

type PageFixtures = {

  // Ecommerce
  ecommerceLoginPage: EcommerceLoginPage;

  // OrangeHRM
  orangehrmLoginPage: OrangeLoginPage;
  orangehrmDashboardPage: OrangeDashboardPage;
  orangehrmAdminPage: OrangeAdminPage;
  orangehrmEmployeePage: OrangeEmployeePage;
  orangehrmLeavePage: OrangeLeavePage;

};

export const pageTest = baseTest.extend<PageFixtures>({

  // ------------------ ECOMMERCE ------------------

  ecommerceLoginPage: async ({ page, appConfig }, use) => {
    await use(new EcommerceLoginPage(page, appConfig));
  },

  // ------------------ ORANGEHRM ------------------

  orangehrmLoginPage: async ({ page, appConfig }, use) => {
    await use(new OrangeLoginPage(page, appConfig));
  },

  orangehrmDashboardPage: async ({ page, appConfig }, use) => {
    await use(new OrangeDashboardPage(page, appConfig));
  },

  orangehrmAdminPage: async ({ page, appConfig }, use) => {
    await use(new OrangeAdminPage(page, appConfig));
  },

  orangehrmEmployeePage: async ({ page, appConfig }, use) => {
    await use(new OrangeEmployeePage(page, appConfig));
  },

  orangehrmLeavePage: async ({ page, appConfig }, use) => {
    await use(new OrangeLeavePage(page, appConfig));
  }

});
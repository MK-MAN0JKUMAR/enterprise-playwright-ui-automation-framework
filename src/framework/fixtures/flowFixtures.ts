import { pageTest } from "./pageFixtures";

import { LoginFlow as EcommerceLoginFlow } from "@applications/ecommerce/flows/LoginFlow";
import { LoginFlow as OrangehrmLoginFlow } from "@applications/orangehrm/flows/LoginFlow";

import { EmployeeManagementFlow } from "@applications/orangehrm/flows/EmployeeManagementFlow";
import { LeaveFlow } from "@applications/orangehrm/flows/LeaveFlow";
import { AdminFlow } from "@applications/orangehrm/flows/AdminFlow";

type FlowFixtures = {

  // Login flows
  ecommerceLoginFlow: EcommerceLoginFlow;
  orangehrmLoginFlow: OrangehrmLoginFlow;

  // Future flows (orangehrm)
  employeeManagementFlow: EmployeeManagementFlow;
  leaveFlow: LeaveFlow;
  adminFlow: AdminFlow;

};

export const test = pageTest.extend<FlowFixtures>({

  // ------------------ ECOMMERCE ------------------

  ecommerceLoginFlow: async ({ ecommerceLoginPage }, use) => {

    const flow = new EcommerceLoginFlow(ecommerceLoginPage);

    await use(flow);

  },

  // ------------------ ORANGEHRM-LoginPage ------------------

  orangehrmLoginFlow: async (
    { orangehrmLoginPage, orangehrmDashboardPage },
    use
  ) => {

    const flow = new OrangehrmLoginFlow(
      orangehrmLoginPage,
      orangehrmDashboardPage
    );

    await use(flow);

  },


  // ------------------ ORANGEHRM-ADMIN FLOW ------------------

  adminFlow: async (
    { orangehrmDashboardPage, orangehrmAdminPage },
    use
  ) => {

    const flow = new AdminFlow(
      orangehrmDashboardPage,
      orangehrmAdminPage
    );

    await use(flow);

  },

  // ------------------ ORANGEHRM-EMPLOYEE MANAGEMENT ------------------

  employeeManagementFlow: async (
    {
      orangehrmDashboardPage,
      orangehrmAdminPage,
      orangehrmEmployeePage
    },
    use
  ) => {

    const flow = new EmployeeManagementFlow(
      orangehrmDashboardPage,
      orangehrmAdminPage,
      orangehrmEmployeePage
    );

    await use(flow);

  },

  // ------------------ ORANGEHRM-LEAVE FLOW ------------------

  leaveFlow: async (
    {
      orangehrmDashboardPage,
      orangehrmLeavePage
    },
    use
  ) => {

    const flow = new LeaveFlow(
      orangehrmDashboardPage,
      orangehrmLeavePage
    );

    await use(flow);

  }

});
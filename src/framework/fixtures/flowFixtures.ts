import { Page } from "@playwright/test";
import { baseTest } from "./baseTest";

import { LoginFlow as EcommerceLoginFlow } from "../../applications/ecommerce/flows/LoginFlow";

import { LoginFlow as OrangeLoginFlow } from "../../applications/orangehrm/flows/LoginFlow";
import { EmployeeManagementFlow } from "../../applications/orangehrm/flows/EmployeeManagementFlow";
import { LeaveFlow } from "../../applications/orangehrm/flows/LeaveFlow";

type FlowFixtures = {

  ecommerceLoginFlow: EcommerceLoginFlow;

  orangehrmLoginFlow: OrangeLoginFlow;
  employeeManagementFlow: EmployeeManagementFlow;
  leaveFlow: LeaveFlow;

};

export const test = baseTest.extend<FlowFixtures>({
  
  ecommerceLoginFlow: async ({ page }: { page: Page }, use: (flow: EcommerceLoginFlow) => Promise<void>) => {
    await use(new EcommerceLoginFlow(page));
  },

  orangehrmLoginFlow: async ({ page }: { page: Page }, use: (flow: OrangeLoginFlow) => Promise<void>) => {
    await use(new OrangeLoginFlow(page));
  },

  employeeManagementFlow: async ({ page }: { page: Page }, use: (flow: EmployeeManagementFlow) => Promise<void>) => {
    await use(new EmployeeManagementFlow(page));
  },

  leaveFlow: async ({ page }: { page: Page }, use: (flow: LeaveFlow) => Promise<void>) => {
    await use(new LeaveFlow(page));
  }

});

export { expect } from "@playwright/test";
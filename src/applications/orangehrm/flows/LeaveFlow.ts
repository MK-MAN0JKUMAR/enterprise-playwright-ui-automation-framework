import { DashboardPage } from "@applications/orangehrm/pages/DashboardPage";
import { LeavePage } from "@applications/orangehrm/pages/LeavePage";

export class LeaveFlow {

  constructor(
    private dashboardPage: DashboardPage,
    private leavePage: LeavePage
  ) { }

  async applyLeave(): Promise<void> {

    await this.dashboardPage.waitForDashboard();

    await this.leavePage.openLeaveModule();

    await this.leavePage.applyLeave();

  }

}
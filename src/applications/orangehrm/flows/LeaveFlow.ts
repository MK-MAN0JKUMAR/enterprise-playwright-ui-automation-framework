import { Page } from "@playwright/test";
import { DashboardPage } from "../pages/DashboardPage";
import { LeavePage } from "../pages/LeavePage";

export class LeaveFlow {

  private dashboardPage: DashboardPage;
  private leavePage: LeavePage;

  constructor(private page: Page) {
    this.dashboardPage = new DashboardPage(page);
    this.leavePage = new LeavePage(page);
  }

  async applyLeave(): Promise<void> {

    await this.dashboardPage.waitForDashboard();

    await this.leavePage.openLeaveModule();

    await this.leavePage.applyLeave();

  }

}
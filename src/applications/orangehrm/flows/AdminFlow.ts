import { AdminPage } from "@applications/orangehrm/pages/AdminPage";
import { DashboardPage } from "@applications/orangehrm/pages/DashboardPage";

export class AdminFlow {

  constructor(
    private dashboardPage: DashboardPage,
    private adminPage: AdminPage
  ) {}

  async openAdmin(): Promise<void> {

    await this.dashboardPage.waitForDashboard();

    await this.adminPage.openAdminModule();

  }

}
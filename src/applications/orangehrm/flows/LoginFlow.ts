import { LoginPage } from "@applications/orangehrm/pages/LoginPage";
import { DashboardPage } from "@applications/orangehrm/pages/DashboardPage";

export class LoginFlow {

  constructor(
    private loginPage: LoginPage,
    private dashboardPage: DashboardPage
  ) {}

  async login(): Promise<void> {

    await this.loginPage.open();
    await this.loginPage.login();

    await this.dashboardPage.waitForDashboard();

  }

}
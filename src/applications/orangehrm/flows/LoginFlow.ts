import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";

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
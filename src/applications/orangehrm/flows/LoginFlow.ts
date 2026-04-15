import { DashboardPage } from "@applications/orangehrm/pages/DashboardPage";
import { LoginPage } from "@applications/orangehrm/pages/LoginPage";
import { LoginData } from "@domain/models/LoginData";


export class LoginFlow {

  constructor(
    private loginPage: LoginPage,
    private dashboardPage: DashboardPage
  ) { }

  async login(data: LoginData): Promise<void> {

    await this.loginPage.open();
    await this.loginPage.login(data.username, data.password);

    await this.dashboardPage.waitForDashboard();

  }

}
import { Page } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";

export class LoginFlow {

  private loginPage: LoginPage;
  private dashboardPage: DashboardPage;

  constructor(private page: Page) {

    this.loginPage = new LoginPage(page);
    this.dashboardPage = new DashboardPage(page);

  }

  async login(): Promise<void> {

    await this.loginPage.open();
    await this.loginPage.login();

    await this.dashboardPage.waitForDashboard();

  }

}
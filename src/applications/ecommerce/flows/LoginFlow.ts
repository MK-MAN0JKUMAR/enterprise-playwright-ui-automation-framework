import { Page } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

export class LoginFlow {

  private loginPage: LoginPage;

  constructor(private page: Page) {

    this.loginPage = new LoginPage(page);

  }

  async login(email: string, password: string): Promise<void> {

    await this.loginPage.open();

    await this.loginPage.login(email, password);

  }

}
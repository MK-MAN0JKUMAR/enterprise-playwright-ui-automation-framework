import { LoginPage } from "../pages/LoginPage";

export class LoginFlow {

  constructor(private loginPage: LoginPage) {}

  async login(email: string, password: string): Promise<void> {

    await this.loginPage.open();
    await this.loginPage.login(email, password);

  }

}
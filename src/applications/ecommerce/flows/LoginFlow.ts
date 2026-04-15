import { LoginPage } from "@applications/ecommerce/pages/LoginPage";
import { LoginData } from "@domain/models/LoginData";


export class LoginFlow {

  constructor(private loginPage: LoginPage) { }

  async login(data: LoginData): Promise<void> {

    await this.loginPage.open();
    await this.loginPage.login(data.username, data.password);

  }

}
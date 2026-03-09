import { Page } from "@playwright/test";
import { BasePage } from "@framework/pages/BasePage";
import { InputField } from "@framework/components/InputField";
import { Button } from "@framework/components/Button";
import { appConfig } from "../../../../config/framework.config";

export class LoginPage extends BasePage {

  private emailInput: InputField;
  private passwordInput: InputField;
  private loginButton: Button;

  constructor(page: Page) {

    super(page);

    this.emailInput = this.components.inputByDataQa("login-email");
    this.passwordInput = this.components.inputByDataQa("login-password");
    this.loginButton = this.components.buttonByDataQa("login-button");

  }

  async open(): Promise<void> {

    if (!appConfig.routes?.login) {
      throw new Error("Login route not defined in config");
    }

    await this.navigate(appConfig.routes.login);

  }

  async login(email: string, password: string): Promise<void> {

    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();

  }

}
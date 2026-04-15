import { FrameworkConfigType } from "@config/framework.config";
import { Button } from "@framework/components/Button";
import { InputField } from "@framework/components/InputField";
import { BasePage } from "@framework/pages/BasePage";
import { Page } from "@playwright/test";

export class LoginPage extends BasePage {

  private emailInput!: InputField;
  private passwordInput!: InputField;
  // private loginButton!: Button;

  constructor(page: Page, config: FrameworkConfigType) {
    super(page, config);
  }

  protected async onInit(): Promise<void> {

    this.emailInput = this.components.inputByDataQa("login-email");
    this.passwordInput = this.components.inputByDataQa("login-password");

  }

  private async getLoginButton(): Promise<Button> {

    return await this.components.smartButtonByDataQa("login-button", "Login");

  }

  async open(): Promise<void> {

    if (!this.config.routes?.login) {
      throw new Error("Login route not defined in config");
    }

    await this.navigate(this.config.routes.login);

  }

  async login(email: string, password: string): Promise<void> {

    await this.init();

    const loginButton = await this.getLoginButton();


    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await loginButton.click();

  }

}
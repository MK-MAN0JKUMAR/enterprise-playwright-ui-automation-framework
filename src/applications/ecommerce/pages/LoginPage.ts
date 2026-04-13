import { FrameworkConfigType } from "@config/framework.config";
import { Button } from "@framework/components/Button";
import { InputField } from "@framework/components/InputField";
import { BasePage } from "@framework/pages/BasePage";
import { Page } from "@playwright/test";

export class LoginPage extends BasePage {

  private emailInput!: InputField;
  private passwordInput!: InputField;
  private loginButton!: Button;

  constructor(page: Page, config: FrameworkConfigType) {
    super(page, config);

    // this.emailInput = this.components.inputByDataQa("login-email");
    // this.passwordInput = this.components.inputByDataQa("login-password");
    // this.loginButton = this.components.buttonByDataQa("login-button");
  }

  protected async onInit(): Promise<void> {

    this.emailInput = this.components.inputByDataQa("login-email");

    this.passwordInput = this.components.inputByDataQa("login-password");

    // async-safe smart selector
    this.loginButton = await this.components.smartButtonByDataQa("login-button", "Login");

  }

  async open(): Promise<void> {

    if (!this.config.routes?.login) {
      throw new Error("Login route not defined in config");
    }

    await this.navigate(this.config.routes.login);

  }

  async login(email: string, password: string): Promise<void> {

    await this.init();

    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();

  }

}
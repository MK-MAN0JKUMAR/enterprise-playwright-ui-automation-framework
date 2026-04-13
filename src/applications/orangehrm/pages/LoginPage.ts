import { Page } from "@playwright/test";
import { BasePage } from "@framework/pages/BasePage";
import { InputField } from "@framework/components/InputField";
import { Button } from "@framework/components/Button";
import { FrameworkConfigType } from "@config/framework.config";

export class LoginPage extends BasePage {

  private username: InputField;
  private password: InputField;
  private loginButton: Button;

  constructor(page: Page, config: FrameworkConfigType) {
    super(page, config);

    this.username = this.components.inputByPlaceholder("Username");
    this.password = this.components.inputByPlaceholder("Password");
    this.loginButton = this.components.buttonByRole("button", "Login");
  }

  async open(): Promise<void> {

    await this.navigate("");

  }

  async login(): Promise<void> {

    if (!this.config.credentials) {
      throw new Error("Credentials not defined in application config");
    }

    await this.username.fill(this.config.credentials.username);
    await this.password.fill(this.config.credentials.password);
    await this.loginButton.click();

  }

}
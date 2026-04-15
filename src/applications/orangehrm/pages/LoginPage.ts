import { FrameworkConfigType } from "@config/framework.config";
import { Button } from "@framework/components/Button";
import { InputField } from "@framework/components/InputField";
import { BasePage } from "@framework/pages/BasePage";
import { Page } from "@playwright/test";

export class LoginPage extends BasePage {

  private username!: InputField;
  private password!: InputField;
  private loginButton!: Button;

  constructor(page: Page, config: FrameworkConfigType) {
    super(page, config);
  }

  protected async onInit(): Promise<void> {

    this.username = this.components.inputByPlaceholder("Username");
    this.password = this.components.inputByPlaceholder("Password");
    this.loginButton = this.components.buttonByRole("button", "Login");

  }

  async open(): Promise<void> {

    if (!this.config.routes?.login) {
      throw new Error("Login route not defined in config");
    }

    await this.navigate(this.config.routes.login);

  }

  async login(username: string, password: string): Promise<void> {

    await this.init();

    await this.username.fill(username);
    await this.password.fill(password);

    await this.loginButton.click();

  }

}
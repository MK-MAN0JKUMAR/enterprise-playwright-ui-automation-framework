import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { UIElement } from "../../../framework/elements/UIElement";
import { InputField } from "../../../framework/components/InputField";
import { Button } from "../../../framework/components/Button";
import { SelectorEngine } from "../../../framework/selectors/SelectorEngine";
import { appConfig } from "../../../../config/framework.config";

export class LoginPage extends BasePage {

  private emailInput: InputField;
  private passwordInput: InputField;
  private loginButton: Button;

  constructor(page: Page) {
    super(page);

    this.emailInput = new InputField(
      new UIElement(
        SelectorEngine.byCss(page, 'input[data-qa="login-email"]')
      )
    );

    this.passwordInput = new InputField(
      new UIElement(
        SelectorEngine.byCss(page, 'input[data-qa="login-password"]')
      )
    );

    this.loginButton = new Button(
      new UIElement(
        SelectorEngine.byCss(page, 'button[data-qa="login-button"]')
      )
    );
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
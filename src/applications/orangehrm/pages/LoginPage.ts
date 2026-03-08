import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { UIElement } from "../../../framework/elements/UIElement";
import { InputField } from "../../../framework/components/InputField";
import { Button } from "../../../framework/components/Button";
import { SelectorEngine } from "../../../framework/selectors/SelectorEngine";
import { appConfig } from "../../../../config/framework.config";

export class LoginPage extends BasePage {

  private username: InputField;
  private password: InputField;
  private loginButton: Button;

  constructor(page: Page) {
    super(page);

    this.username = new InputField(
      new UIElement(
        SelectorEngine.byPlaceholder(page, "Username")
      )
    );

    this.password = new InputField(
      new UIElement(
        SelectorEngine.byPlaceholder(page, "Password")
      )
    );

    this.loginButton = new Button(
      new UIElement(
        SelectorEngine.byRole(page, "button", "Login")
      )
    );
  }

  async open(): Promise<void> {

    await this.navigate("/");

  }

  async login(): Promise<void> {

    if (!appConfig.credentials) {
      throw new Error("Credentials not defined in application config");
    }

    await this.username.fill(appConfig.credentials.username);
    await this.password.fill(appConfig.credentials.password);
    await this.loginButton.click();

  }

}
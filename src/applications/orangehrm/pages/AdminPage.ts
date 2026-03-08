import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { UIElement } from "../../../framework/elements/UIElement";
import { Button } from "../../../framework/components/Button";
import { SelectorEngine } from "../../../framework/selectors/SelectorEngine";

export class AdminPage extends BasePage {

  private adminMenu: Button;

  constructor(page: Page) {
    super(page);

    this.adminMenu = new Button(
      new UIElement(
        SelectorEngine.byRole(page, "link", "Admin")
      )
    );
  }

  async openAdminModule(): Promise<void> {

    await this.adminMenu.click();
    await this.waitForPageLoad();

  }

}
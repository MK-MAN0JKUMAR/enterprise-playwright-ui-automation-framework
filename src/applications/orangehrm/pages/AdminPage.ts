import { Page } from "@playwright/test";
import { BasePage } from "@framework/pages/BasePage";
import { UIElement } from "../../../framework/elements/UIElement";
import { Button } from "../../../framework/components/Button";
import { SelectorEngine } from "../../../framework/selectors/SelectorEngine";

export class AdminPage extends BasePage {

  private adminMenu: Button;

  constructor(page: Page) {
    super(page);

    this.adminMenu = this.components.buttonByDataQa("menu-admin");
  }

  async openAdminModule(): Promise<void> {
    await this.adminMenu.click();
    await this.waitForPageLoad();
  }

}
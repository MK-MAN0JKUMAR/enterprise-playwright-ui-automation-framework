import { BasePage } from "@framework/pages/BasePage";
import { Page } from "@playwright/test";
import { Button } from "@framework/components/Button";
import { FrameworkConfigType } from "@config/framework.config";

export class AdminPage extends BasePage {

  private adminMenu: Button;

  constructor(page: Page, config: FrameworkConfigType) {
    super(page, config);

    this.adminMenu = this.components.buttonByDataQa("menu-admin");
  }

  async openAdminModule(): Promise<void> {
    await this.adminMenu.click();
    await this.waitForPageLoad();
  }

}
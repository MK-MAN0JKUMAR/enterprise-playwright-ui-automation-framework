import { FrameworkConfigType } from "@config/framework.config";
import { Button } from "@framework/components/Button";
import { BasePage } from "@framework/pages/BasePage";
import { Page } from "@playwright/test";

export class AdminPage extends BasePage {

  private adminMenu!: Button;

  constructor(page: Page, config: FrameworkConfigType) {
    super(page, config);
  }

  protected async onInit(): Promise<void> {

    this.adminMenu = this.components.buttonByDataQa("menu-admin");
  
  }

  async openAdminModule(): Promise<void> {

    await this.init();
    await this.adminMenu.click();
  
  }
}
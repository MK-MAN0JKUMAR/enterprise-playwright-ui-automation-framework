import { FrameworkConfigType } from "@config/framework.config";
import { Button } from "@framework/components/Button";
import { UIElement } from "@framework/elements/UIElement";
import { BasePage } from "@framework/pages/BasePage";
import { Page } from "@playwright/test";

export class AdminPage extends BasePage {

  private adminMenu!: Button;
  private adminHeader!: UIElement;

  constructor(page: Page, config: FrameworkConfigType) {
    super(page, config);
  }

  protected async onInit(): Promise<void> {

    // real selector (stable)
    this.adminMenu = this.components.buttonByRole("link", "Admin");

    // validation element
    this.adminHeader = this.components.elementByRole("heading", "Admin");

  }

  async openAdminModule(): Promise<void> {

    await this.init();

    await this.adminMenu.click();

    // validation page is loaded
    await this.adminHeader.waitForVisible();

  }

}

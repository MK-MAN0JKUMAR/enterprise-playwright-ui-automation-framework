import { Button } from "@framework/components/Button";
import { BasePage } from "@framework/pages/BasePage";
import { Page } from "@playwright/test";
import { FrameworkConfigType } from "@config/framework.config";


export class LeavePage extends BasePage {

  private leaveMenu: Button;
  private applyButton: Button;

  constructor(page: Page, config: FrameworkConfigType) {

    super(page, config);

    this.leaveMenu = this.components.buttonByDataQa("menu-leave");
    this.applyButton = this.components.buttonByDataQa("apply-leave");

  }

  async openLeaveModule(): Promise<void> {

    await this.leaveMenu.click();
    await this.waitForPageLoad();

  }

  async applyLeave(): Promise<void> {
    await this.applyButton.click();
  }

}
import { Page } from "@playwright/test";
import { BasePage } from "@framework/pages/BasePage";
import { Button } from "@framework/components/Button";

export class LeavePage extends BasePage {

  private leaveMenu: Button;
  private applyButton: Button;

  constructor(page: Page) {

    super(page);

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
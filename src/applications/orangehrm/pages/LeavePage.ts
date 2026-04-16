import { FrameworkConfigType } from "@config/framework.config";
import { Button } from "@framework/components/Button";
import { BasePage } from "@framework/pages/BasePage";
import { Page } from "@playwright/test";


export class LeavePage extends BasePage {

  private leaveMenu!: Button;
  private applyButton!: Button;

  constructor(page: Page, config: FrameworkConfigType) {
    super(page, config);
  }

  protected async onInit(): Promise<void> {

    this.leaveMenu = this.components.buttonByDataQa("menu-leave");
    this.applyButton = this.components.buttonByDataQa("apply-leave");
  
  }

  async openLeaveModule(): Promise<void> {

    await this.init();

    await this.leaveMenu.click();

  }

  async applyLeave(): Promise<void> {

    await this.init();

    await this.applyButton.click();

  }

}
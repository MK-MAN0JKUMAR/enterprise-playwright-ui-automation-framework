import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { UIElement } from "../../../framework/elements/UIElement";
import { Button } from "../../../framework/components/Button";
import { SelectorEngine } from "../../../framework/selectors/SelectorEngine";

export class LeavePage extends BasePage {

  private leaveMenu: Button;
  private applyButton: Button;

  constructor(page: Page) {
    super(page);

    this.leaveMenu = new Button(
      new UIElement(
        SelectorEngine.byRole(page, "link", "Leave")
      )
    );

    this.applyButton = new Button(
      new UIElement(
        SelectorEngine.byRole(page, "button", "Apply")
      )
    );
  }

  async openLeaveModule(): Promise<void> {

    await this.leaveMenu.click();
    await this.waitForPageLoad();

  }

  async applyLeave(): Promise<void> {

    await this.applyButton.click();

  }

}
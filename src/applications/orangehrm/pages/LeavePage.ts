import { FrameworkConfigType } from "@config/framework.config";
import { Button } from "@framework/components/Button";
import { Dropdown } from "@framework/components/Dropdown";
import { InputField } from "@framework/components/InputField";
import { UIElement } from "@framework/elements/UIElement";
import { BasePage } from "@framework/pages/BasePage";
import { Page } from "@playwright/test";

export class LeavePage extends BasePage {

  private leaveMenu!: Button;
  private applyNavButton!: Button;

  private leaveHeader!: UIElement;
  private applyButton!: Button;

  private leaveTypeDropdown!: Dropdown;
  private fromDateIcon!: UIElement;
  private commentBox!: InputField;

  private successMessage!: UIElement;

  constructor(page: Page, config: FrameworkConfigType) {
    super(page, config);
  }

  protected async onInit(): Promise<void> {

    // navigation
    this.leaveMenu = this.components.buttonByRole("link", "Leave");
    this.applyNavButton = this.components.buttonByRole("link", "Apply");

    // page validation
    this.leaveHeader = this.components.elementByRole("heading", "Leave");

    // actions
    this.applyButton = this.components.buttonByRole("button", "Apply");

    this.leaveTypeDropdown = this.components.dropdownByCss(
      'div.oxd-input-group:has(label:has-text("Leave Type")) .oxd-select-text--arrow'
    );

    this.fromDateIcon = this.components.elementByCss(
      'div.oxd-input-group:has(label:has-text("From Date")) .oxd-icon'
    );

    this.commentBox = this.components.inputByCss("textarea");

    this.successMessage = this.components.elementByText("Successfully Saved");

  }

  async openLeaveModule(): Promise<void> {

    await this.init();

    await this.leaveMenu.click();

    await this.leaveHeader.waitForVisible();

  }

  async openApplyLeave(): Promise<void> {

    await this.applyNavButton.click();

  }

  // /*
  async applyLeave(): Promise<void> {

    await this.init();

    await this.openApplyLeave();

    // select leave type
    await this.leaveTypeDropdown.open();

    await this.components
      .elementByRole("option", "US - Personal")
      .click();


    //not working from here check when we have time
    // select date
    await this.fromDateIcon.click();

    await this.components.elementByText("24").click();

    // comment
    await this.commentBox.fill("Urgent work");

    // submit
    await this.applyButton.click();

    // validation - success message
    await this.successMessage.waitForVisible();

  }
  // */

}

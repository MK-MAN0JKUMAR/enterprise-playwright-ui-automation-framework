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
      ".oxd-select-text--arrow"
    );

    this.fromDateIcon = this.components.elementByCss(
      ".oxd-date-input .oxd-icon"
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

  /*
  async applyLeave(): Promise<void> {

    await this.init();

    await this.openLeaveModule();

    await this.openApplyLeave();

    // select leave type
    // await this.leaveTypeDropdown.click();
    await this.components.elementByCss(".oxd-select-text--arrow").click();

    await this.components
      .elementByRole("option", "CAN - FMLA")
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
  */

}


/*
-click on leave list from dashboard 
  await page.getByRole('link', { name: 'Leave' }).click();

-Verify the leave page is loaded by checking the presence of the heading
  await page.getByRole('heading', { name: 'Leave', exact: true }).click();

-click on apply button
  await page.getByRole('link', { name: 'Apply' }).click();

-click on the leave type dropdown 
  await page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').click();

  -apply for CAN - FMLA leave type
  await page.getByRole('option', { name: 'CAN - FMLA' }).click();

-verify leave availability message is displayed
  await page.getByText('Day(s)').click();

 - select from date 
  await page.locator('.oxd-icon.bi-calendar').first().click();
  
  - select 24th from the calendar
  await page.getByText('24').click();
  
  - select input box for comments and enter "Urgent work"
  await page.locator('textarea').click();
  await page.locator('textarea').fill('Urgent work');
  
  - click on apply button to submit the leave request
  await page.getByRole('button', { name: 'Apply' }).click();
  
- verify the success message is displayed
  await page.getByText('Successfully Saved').click();
  
-click on My Leave for check on navbar
  await page.getByRole('listitem').filter({ hasText: 'My Leave' }).click();
  
- verify the applied leave request is displayed in the list any thing but more then 1 record should not be there as we have applied only one leave request
  await page.getByText('(1) Records Found').click();

*/
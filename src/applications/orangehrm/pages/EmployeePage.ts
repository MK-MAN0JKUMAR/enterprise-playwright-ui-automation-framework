import { FrameworkConfigType } from "@config/framework.config";
import { Employee } from "@domain/models/Employee";
import { Button } from "@framework/components/Button";
import { InputField } from "@framework/components/InputField";
import { UIElement } from "@framework/elements/UIElement";
import { BasePage } from "@framework/pages/BasePage";
import { Page } from "@playwright/test";

export class EmployeePage extends BasePage {

  private pimMenu!: Button;
  private addEmployeeNav!: Button;

  private firstNameInput!: InputField;
  private lastNameInput!: InputField;
  private saveButton!: Button;

  private addEmployeeHeader!: UIElement;
  private successMessage!: UIElement;

  private employeeIdInput!: InputField;
  private employeeIdError!: UIElement;

  constructor(page: Page, config: FrameworkConfigType) {
    super(page, config);
  }

  protected async onInit(): Promise<void> {

    // navigation
    this.pimMenu = this.components.buttonByRole("link", "PIM");
    this.addEmployeeNav = this.components.buttonByRole("link", "Add Employee");

    // form
    this.firstNameInput = this.components.inputByPlaceholder("First Name");
    this.lastNameInput = this.components.inputByPlaceholder("Last Name");

    this.saveButton = this.components.buttonByRole("button", "Save");

    // validation
    this.addEmployeeHeader = this.components.elementByRole("heading", "Add Employee");
    this.successMessage = this.components.elementByText("Successfully Saved");

    this.employeeIdInput = this.components.inputByCss('div.oxd-input-group:has(label.oxd-label:has-text("Employee Id")) input.oxd-input');
    this.employeeIdError = this.components.elementByText("Employee Id already exists");

  }

  async addEmployee(employee: Employee): Promise<void> {

    await this.init();

    // step 1: open PIM
    await this.pimMenu.click();

    // step 2: click add employee
    await this.addEmployeeNav.click();

    // step 3: validate page
    await this.addEmployeeHeader.waitForVisible();

    // step 4: fill form
    await this.firstNameInput.fill(employee.firstName);
    await this.lastNameInput.fill(employee.lastName);

    let currentId = await this.employeeIdInput.value();


    if (!currentId) {
      throw new Error("Employee ID field is empty");
    }

    let numericId = Number(currentId);
    if (isNaN(numericId)) {
      throw new Error(`Employee ID is not numeric: ${currentId}`);
    }

    const maxAttempts = 5;

    for (let i = 0; i < maxAttempts; i++) {

      await this.employeeIdInput.fill(String(numericId + i));

      await this.saveButton.click();

      // small stabilization (only if needed)
      await this.page.waitForTimeout(300);

      // if error visible → retry
      if (await this.employeeIdError.exists()) {
        continue;
      }

      // success
      await this.successMessage.waitForVisible();
      return;

    }

    throw new Error("Unable to create employee: all Employee IDs already exist");


    // step 5: save
    await this.saveButton.click();

    // step 6: success validation
    await this.successMessage.waitForVisible();

  }

}

import { FrameworkConfigType } from "@config/framework.config";
import { Employee } from "@domain/models/Employee";
import { Button } from "@framework/components/Button";
import { InputField } from "@framework/components/InputField";
import { BasePage } from "@framework/pages/BasePage";
import { Page } from "@playwright/test";

export class EmployeePage extends BasePage {

  private addEmployeeButton: Button;
  private firstNameInput: InputField;
  private lastNameInput: InputField;
  private saveButton: Button;

  constructor(page: Page, config: FrameworkConfigType) {
    super(page, config);

    this.addEmployeeButton = this.components.buttonByDataQa("add-employee");

    this.firstNameInput = this.components.inputByPlaceholder("First Name");
    this.lastNameInput = this.components.inputByPlaceholder("Last Name");

    this.saveButton = this.components.buttonByDataQa("save-employee");
  }

  async addEmployee(employee: Employee): Promise<void> {

    await this.addEmployeeButton.click();

    await this.firstNameInput.fill(employee.firstName);
    await this.lastNameInput.fill(employee.lastName);

    await this.saveButton.click();

  }

}
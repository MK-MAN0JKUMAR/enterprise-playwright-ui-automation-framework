import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { UIElement } from "../../../framework/elements/UIElement";
import { InputField } from "../../../framework/components/InputField";
import { Button } from "../../../framework/components/Button";
import { SelectorEngine } from "../../../framework/selectors/SelectorEngine";
import { Employee } from "../../../domain/models/Employee";

export class EmployeePage extends BasePage {

  private addEmployeeButton: Button;
  private firstNameInput: InputField;
  private lastNameInput: InputField;
  private saveButton: Button;

  constructor(page: Page) {
    super(page);

    this.addEmployeeButton = new Button(
      new UIElement(
        SelectorEngine.byRole(page, "button", "Add")
      )
    );

    this.firstNameInput = new InputField(
      new UIElement(
        SelectorEngine.byPlaceholder(page, "First Name")
      )
    );

    this.lastNameInput = new InputField(
      new UIElement(
        SelectorEngine.byPlaceholder(page, "Last Name")
      )
    );

    this.saveButton = new Button(
      new UIElement(
        SelectorEngine.byRole(page, "button", "Save")
      )
    );
  }

  async addEmployee(employee: Employee): Promise<void> {

    await this.addEmployeeButton.click();

    await this.firstNameInput.fill(employee.firstName);
    await this.lastNameInput.fill(employee.lastName);

    await this.saveButton.click();

  }

}
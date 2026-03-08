import { Employee } from "../../../../domain/models/Employee";

export class EmployeeBuilder {

  private firstName = "Automation";
  private lastName = "Engineer";
  private employeeId?: string;

  withFirstName(firstName: string): EmployeeBuilder {
    this.firstName = firstName;
    return this;
  }

  withLastName(lastName: string): EmployeeBuilder {
    this.lastName = lastName;
    return this;
  }

  withEmployeeId(id: string): EmployeeBuilder {
    this.employeeId = id;
    return this;
  }

  build(): Employee {
    return new Employee(
      this.firstName,
      this.lastName,
      this.employeeId
    );
  }

}
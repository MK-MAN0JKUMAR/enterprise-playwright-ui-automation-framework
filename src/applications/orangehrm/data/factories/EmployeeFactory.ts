import { EmployeeBuilder } from "../builders/EmployeeBuilder";
import { Employee } from "../../../../domain/models/Employee";

export class EmployeeFactory {

  static newEmployee(): Employee {
    return new EmployeeBuilder().build();
  }

  static namedEmployee(name: string): Employee {
    return new EmployeeBuilder()
      .withFirstName(name)
      .build();
  }

}
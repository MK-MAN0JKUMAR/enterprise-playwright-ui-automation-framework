import { DashboardPage } from "@applications/orangehrm/pages/DashboardPage";
import { AdminPage } from "@applications/orangehrm/pages/AdminPage";
import { EmployeePage } from "@applications/orangehrm/pages/EmployeePage";
import { Employee } from "@domain/models/Employee";

export class EmployeeManagementFlow {

  constructor(
    private dashboardPage: DashboardPage,
    private adminPage: AdminPage,
    private employeePage: EmployeePage
  ) { }

  async createEmployee(employee: Employee): Promise<void> {

    await this.dashboardPage.waitForDashboard();
    
    await this.employeePage.addEmployee(employee);

  }

}
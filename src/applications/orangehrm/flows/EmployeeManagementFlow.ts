import { Page } from "@playwright/test";
import { DashboardPage } from "../pages/DashboardPage";
import { AdminPage } from "../pages/AdminPage";
import { EmployeePage } from "../pages/EmployeePage";
import { Employee } from "../../../domain/models/Employee";

export class EmployeeManagementFlow {

  private dashboardPage: DashboardPage;
  private adminPage: AdminPage;
  private employeePage: EmployeePage;

  constructor(private page: Page) {
    this.dashboardPage = new DashboardPage(page);
    this.adminPage = new AdminPage(page);
    this.employeePage = new EmployeePage(page);
  }

  async createEmployee(employee: Employee): Promise<void> {

    await this.dashboardPage.waitForDashboard();

    await this.adminPage.openAdminModule();

    await this.employeePage.addEmployee(employee);

  }

}
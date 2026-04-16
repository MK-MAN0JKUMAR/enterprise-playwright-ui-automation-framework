import { EmployeeFactory } from "@applications/orangehrm/data/factories/EmployeeFactory";
import { LoginDataFactory } from "@applications/orangehrm/data/factories/LoginDataFactory";
import { test } from "@framework/fixtures/flowFixtures";

test("create employee", async ({
    orangehrmLoginFlow,
    employeeManagementFlow
}) => {

    await orangehrmLoginFlow.login(
        LoginDataFactory.defaultUser()
    );

    const employee = EmployeeFactory.newEmployee();

    await employeeManagementFlow.createEmployee(employee);

});
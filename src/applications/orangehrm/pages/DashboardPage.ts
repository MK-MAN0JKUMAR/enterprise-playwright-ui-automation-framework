import { UIElement } from "@framework/elements/UIElement";
import { BasePage } from "@framework/pages/BasePage";
import { Page } from "@playwright/test";
import { FrameworkConfigType } from "@config/framework.config";

export class DashboardPage extends BasePage {

  private dashboardHeader: UIElement;

  constructor(page: Page, config: FrameworkConfigType) {
    super(page, config);

    this.dashboardHeader = this.components.elementByRole("heading", "Dashboard");
  }

  async waitForDashboard(): Promise<void> {
    await this.dashboardHeader.waitForVisible();
  }

}

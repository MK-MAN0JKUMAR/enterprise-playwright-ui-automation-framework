import { FrameworkConfigType } from "@config/framework.config";
import { UIElement } from "@framework/elements/UIElement";
import { BasePage } from "@framework/pages/BasePage";
import { Page } from "@playwright/test";

export class DashboardPage extends BasePage {

  private dashboardHeader!: UIElement;

  constructor(page: Page, config: FrameworkConfigType) {
    super(page, config);
  }

  protected async onInit(): Promise<void> {
  
    this.dashboardHeader = this.components.elementByRole("heading", "Dashboard");
  
  }

  async waitForDashboard(): Promise<void> {
  
    await this.init();
    await this.dashboardHeader.waitForVisible();
  
  }
}
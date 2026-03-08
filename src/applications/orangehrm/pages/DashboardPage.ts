import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { UIElement } from "../../../framework/elements/UIElement";
import { SelectorEngine } from "../../../framework/selectors/SelectorEngine";

export class DashboardPage extends BasePage {

  private dashboardHeader: UIElement;

  constructor(page: Page) {
    super(page);

    this.dashboardHeader = new UIElement(
      SelectorEngine.byRole(page, "heading", "Dashboard")
    );
  }

  async waitForDashboard(): Promise<void> {
    await this.dashboardHeader.waitForVisible();
  }

}
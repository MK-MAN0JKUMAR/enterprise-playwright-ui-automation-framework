import { Page } from "@playwright/test";
import { appConfig } from "../../../../config/framework.config";

export abstract class BasePage {

  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  protected async navigate(path: string): Promise<void> {

    const url = `${appConfig.baseUrl}${path}`;

    await this.page.goto(url);

    await this.page.waitForLoadState("domcontentloaded");

  }

  protected async waitForPageLoad(): Promise<void> {
    await this.page.waitForLoadState("domcontentloaded");
  }

  async getCurrentUrl(): Promise<string> {
    return this.page.url();
  }

}
import { Page } from "@playwright/test";
import { appConfig } from "../../../config/framework.config";
import { ComponentFactory } from "../factories/ComponentFactory";

export abstract class BasePage {

  protected page: Page;
  protected components: ComponentFactory;

  constructor(page: Page) {
    this.page = page;
    this.components = new ComponentFactory(page);
  }

  // protected async navigate(path: string = ""): Promise<void> {

  //   const url = path
  //     ? `${appConfig.baseUrl}${path}`
  //     : appConfig.baseUrl;

  //   await this.page.goto(url, { waitUntil: "domcontentloaded" });
  //   await this.waitForPageLoad();
  // }

  protected async navigate(path: string = ""): Promise<void> {

  const url = path
    ? `${appConfig.baseUrl}${path}`
    : appConfig.baseUrl;

  await this.page.goto(url, {
    waitUntil: "commit",
    timeout: 60000
  });

}

  protected async waitForPageLoad(): Promise<void> {
    await this.page.waitForLoadState("domcontentloaded");
  }

  protected async waitForNetworkIdle(): Promise<void> {
    await this.page.waitForLoadState("networkidle");
  }

  async getCurrentUrl(): Promise<string> {
    return this.page.url();
  }

}
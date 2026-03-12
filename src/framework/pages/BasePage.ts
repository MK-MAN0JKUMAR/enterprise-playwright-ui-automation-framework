import { Page } from "@playwright/test";
import { appConfig } from "../../../config/framework.config";

import { ComponentFactory } from "../factories/ComponentFactory";
import { FrameworkConstants } from "../constants/FrameworkConstants";
import { RetryHandler } from "../retry/RetryHandler";
import { Logger } from "../reporting/Logger";

export abstract class BasePage {

  protected page: Page;
  protected components: ComponentFactory;

  constructor(page: Page) {

    this.page = page;
    this.components = new ComponentFactory(page);

  }

  protected async navigate(path: string = ""): Promise<void> {

    const url = path
      ? `${appConfig.baseUrl}${path}`
      : appConfig.baseUrl;

    Logger.info(`Navigating to ${url}`);

    await RetryHandler.retry(async () => {

      await this.page.goto(url, {
        waitUntil: "domcontentloaded",
        timeout: FrameworkConstants.NAVIGATION_TIMEOUT
      });

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
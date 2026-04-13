import { Page } from "@playwright/test";

import { ComponentFactory } from "../factories/ComponentFactory";
import { FrameworkConstants } from "../constants/FrameworkConstants";
import { RetryHandler } from "../retry/RetryHandler";
import { Logger } from "../reporting/Logger";
import { FrameworkConfigType } from "@config/framework.config";

export abstract class BasePage {

  protected page: Page;
  protected components: ComponentFactory;
  protected config: FrameworkConfigType;

  constructor(page: Page, config: FrameworkConfigType) {

    this.page = page;
    this.config = config;
    this.components = new ComponentFactory(page);

  }

  protected async navigate(path: string = ""): Promise<void> {

    const url = path
      ? `${this.config.baseUrl}${path}`
      : this.config.baseUrl;

    Logger.info(`Navigating to ${url}`);

    await RetryHandler.retry(async () => {

      await this.page.goto(url, {
        waitUntil: "domcontentloaded",
        timeout: FrameworkConstants.NAVIGATION_TIMEOUT
      });

    }, FrameworkConstants.RETRY_ATTEMPTS);

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
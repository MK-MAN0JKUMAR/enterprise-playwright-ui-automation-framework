import { Page } from "@playwright/test";
import { ComponentFactory } from "../factories/ComponentFactory";
import { FrameworkConstants } from "../constants/FrameworkConstants";
import { RetryHandler } from "../retry/RetryHandler";
import { Logger } from "../reporting/Logger";
import { FrameworkConfigType } from "../../../config/framework.config";

export abstract class BasePage {

  protected page: Page;
  protected components: ComponentFactory;
  protected config: FrameworkConfigType;

  private initialized = false;

  constructor(page: Page, config: FrameworkConfigType) {

    this.page = page;
    this.components = new ComponentFactory(page);
    this.config = config;

  }

  /**
   * Force initialization before usage
   */
  protected async init(): Promise<void> {

    if (!this.initialized) {
      await this.onInit();
      this.initialized = true;
    }

  }

  /**
   * Child pages override this
   */
  protected async onInit(): Promise<void> {
    // override in child
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

    });

  }

  protected async waitForPageLoad(): Promise<void> {
    await this.page.waitForLoadState("domcontentloaded");
  }

  protected async waitForNetworkIdle(): Promise<void> {
    await this.page.waitForLoadState("networkidle");
  }

}
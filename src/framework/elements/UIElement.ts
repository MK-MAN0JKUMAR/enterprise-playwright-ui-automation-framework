import { expect, Locator, Page } from "@playwright/test";
import { FrameworkConstants } from "../constants/FrameworkConstants";
import { Logger } from "../reporting/Logger";
import { RetryHandler } from "../retry/RetryHandler";

export class UIElement {

  constructor(
    private locator: Locator,
    private description: string
  ) { }

  /**
   * Internal action wrapper
   */
  private async performAction(
    actionName: string,
    action: () => Promise<void>
  ): Promise<void> {

    Logger.info(`UIElement action: ${actionName} | element: ${this.description}`);

    await this.waitForVisible();

    await RetryHandler.retry(async () => {

      await this.locator.scrollIntoViewIfNeeded();

      await action();

    }, FrameworkConstants.RETRY_ATTEMPTS);

  }

  /**
   * Smart click handles navigation and SPA transitions
   */
  async smartClick(): Promise<void> {

    const page: Page = this.locator.page();

    Logger.info(`SmartClick on element: ${this.description}`);

    await this.waitForVisible();

    await RetryHandler.retry(async () => {

      await Promise.all([
        this.locator.click({ timeout: FrameworkConstants.DEFAULT_TIMEOUT }),

        page.waitForLoadState("domcontentloaded", {
          timeout: FrameworkConstants.DEFAULT_TIMEOUT
        }).catch(() => {
          // ignore if no navigation
        })

      ]);

    }, FrameworkConstants.RETRY_ATTEMPTS);

  }

  /**
   * Standard click
   */
  async click(): Promise<void> {

    await this.performAction("click", async () => {

      await this.locator.click({
        timeout: FrameworkConstants.DEFAULT_TIMEOUT
      });

    });

  }

  async fill(value: string): Promise<void> {

    await this.performAction(`fill value=${value}`, async () => {

      await this.locator.fill(value, {
        timeout: FrameworkConstants.DEFAULT_TIMEOUT
      });

    });

  }

  async type(value: string): Promise<void> {

    await this.performAction(`type value=${value}`, async () => {

      await this.locator.type(value, {
        timeout: FrameworkConstants.DEFAULT_TIMEOUT
      });

    });

  }

  async hover(): Promise<void> {

    await this.performAction("hover", async () => {

      await this.locator.hover({
        timeout: FrameworkConstants.DEFAULT_TIMEOUT
      });

    });

  }

  async select(value: string): Promise<void> {

    await this.performAction(`select value=${value}`, async () => {

      await this.locator.selectOption(value, {
        timeout: FrameworkConstants.DEFAULT_TIMEOUT
      });

    });

  }

  /**
   * Safe getters
   */
  async text(): Promise<string> {

    const text = await this.locator.textContent();

    return text ?? "";

  }

  async value(): Promise<string> {

    return await this.locator.inputValue();

  }

  async exists(): Promise<boolean> {

    const count = await this.locator.count();

    return count > 0;

  }

  async isVisible(): Promise<boolean> {

    return await this.locator.isVisible();

  }

  /**
   * Wait utilities
   */
  async waitForVisible(): Promise<void> {

    await expect(this.locator).toBeVisible({
      timeout: FrameworkConstants.DEFAULT_TIMEOUT
    });

  }

  async waitForHidden(): Promise<void> {

    await expect(this.locator).toBeHidden({
      timeout: FrameworkConstants.DEFAULT_TIMEOUT
    });

  }

  async waitForText(text: string): Promise<void> {

    await expect(this.locator).toHaveText(text, {
      timeout: FrameworkConstants.DEFAULT_TIMEOUT
    });

  }

}
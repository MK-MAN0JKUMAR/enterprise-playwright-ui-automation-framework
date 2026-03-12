import { Locator, expect } from "@playwright/test";
import { FrameworkConstants } from "../constants/FrameworkConstants";
import { RetryHandler } from "../retry/RetryHandler";
import { Logger } from "../reporting/Logger";

export class UIElement {

  constructor(private locator: Locator) {}

  /**
   * Core wrapper for all element actions
   */
  private async performAction(
    actionName: string,
    action: () => Promise<void>
  ): Promise<void> {

    Logger.info(`UIElement action: ${actionName}`);

    await this.waitForVisible();

    await RetryHandler.retry(async () => {

      await this.locator.scrollIntoViewIfNeeded();

      await action();

    }, FrameworkConstants.RETRY_ATTEMPTS);

  }

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
   * Safe text retrieval
   */
  async text(): Promise<string> {

    const text = await this.locator.textContent();

    return text ?? "";

  }

  /**
   * Input value retrieval
   */
  async value(): Promise<string> {

    return await this.locator.inputValue();

  }

  /**
   * Element existence check
   */
  async exists(): Promise<boolean> {

    const count = await this.locator.count();

    return count > 0;

  }

  /**
   * Visibility check without waiting
   */
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
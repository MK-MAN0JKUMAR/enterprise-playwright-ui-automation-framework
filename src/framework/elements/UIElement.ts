import { expect, Locator, Page } from "@playwright/test";
import { allure } from "allure-playwright";
import { FrameworkConstants } from "@framework/constants/FrameworkConstants";
import { Logger } from "@framework/reporting/Logger";
import { RetryHandler } from "@framework/retry/RetryHandler";

export class UIElement {

  private static allowCreation = false;

  static enableFactoryCreation() {
    this.allowCreation = true;
  }

  static disableFactoryCreation() {
    this.allowCreation = false;
  }

  constructor(
    private locator: Locator,
    private description: string
  ) {
    if (!UIElement.allowCreation) {
      throw new Error(
        "UIElement must be created via ComponentFactory only"
      );
    }
  }

  /**
   * Internal action wrapper
   */


  private async performAction(
    actionName: string,
    action: () => Promise<void>
  ): Promise<void> {

    const stepName = `${actionName} → ${this.description}`;

    await allure.step(stepName, async () => {

      Logger.info(`UIElement action: ${actionName} | element: ${this.description}`);

      try {

        await this.locator.waitFor({ state: "visible" });

        await RetryHandler.retry(async () => {

          await this.locator.scrollIntoViewIfNeeded();

          await action();

        }, FrameworkConstants.RETRY_ATTEMPTS);

      } catch (error) {

        Logger.error(`UIElement failed: ${actionName} | element: ${this.description}`);

        throw error;

      }

    });

  }

  async smartClick(): Promise<void> {

    const page: Page = this.locator.page();

    const stepName = `smartClick → ${this.description}`;

    await allure.step(stepName, async () => {

      Logger.info(`SmartClick on element: ${this.description}`);

      await this.locator.waitFor({ state: "visible" });

      await RetryHandler.retry(async () => {

        await Promise.all([
          this.locator.click({ timeout: FrameworkConstants.DEFAULT_TIMEOUT }),
          page.waitForLoadState("domcontentloaded", {
            timeout: FrameworkConstants.DEFAULT_TIMEOUT
          }).catch(() => { })
        ]);

      }, FrameworkConstants.RETRY_ATTEMPTS);

    });

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
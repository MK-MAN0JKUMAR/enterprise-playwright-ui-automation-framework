import { Locator, expect } from "@playwright/test";
import { FrameworkConstants } from "../constants/FrameworkConstants";
import { RetryHandler } from "../retry/RetryHandler";
import { Logger } from "../reporting/Logger";

export class UIElement {

  constructor(private locator: Locator) {}

  async click(): Promise<void> {

    await RetryHandler.retry(async () => {

      Logger.info("Clicking element");

      await this.waitForVisible();

      await this.locator.click();

    });

  }

  async fill(value: string): Promise<void> {

    Logger.info(`Filling value: ${value}`);

    await this.waitForVisible();

    await this.locator.fill(value);

  }

  async type(value: string): Promise<void> {

    Logger.info(`Typing value: ${value}`);

    await this.waitForVisible();

    await this.locator.type(value);

  }

  async hover(): Promise<void> {

    Logger.info("Hovering element");

    await this.waitForVisible();

    await this.locator.hover();

  }

  async select(value: string): Promise<void> {

    Logger.info(`Selecting option: ${value}`);

    await this.waitForVisible();

    await this.locator.selectOption(value);

  }

  async text(): Promise<string | null> {

    await this.waitForVisible();

    return await this.locator.textContent();

  }

  async value(): Promise<string> {

    await this.waitForVisible();

    return await this.locator.inputValue();

  }

  async isVisible(): Promise<boolean> {

    return await this.locator.isVisible();

  }

  async exists(): Promise<boolean> {

    const count = await this.locator.count();

    return count > 0;

  }

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
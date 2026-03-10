import { Locator } from "@playwright/test";
import { FrameworkConstants } from "../constants/FrameworkConstants";
import { RetryHandler } from "../retry/RetryHandler";
import { Logger } from "../reporting/Logger";

export class UIElement {

  constructor(private locator: Locator) {}

  private async performAction(actionName: string, action: () => Promise<void>) {

    await RetryHandler.retry(async () => {

      Logger.info(`UIElement action: ${actionName}`);

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

      await this.locator.type(value);

    });

  }

  async hover(): Promise<void> {

    await this.performAction("hover", async () => {

      await this.locator.hover();

    });

  }

  async select(value: string): Promise<void> {

    await this.performAction(`select value=${value}`, async () => {

      await this.locator.selectOption(value);

    });

  }

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

}
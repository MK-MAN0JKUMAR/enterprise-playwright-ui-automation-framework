import { Page, Locator } from "@playwright/test";

export class WaitUtils {

  static async waitForPageLoad(page: Page): Promise<void> {
    await page.waitForLoadState("domcontentloaded");
  }

  static async waitForNetworkIdle(page: Page): Promise<void> {
    await page.waitForLoadState("networkidle");
  }

  static async waitForElement(locator: Locator): Promise<void> {
    await locator.waitFor({ state: "visible" });
  }

}
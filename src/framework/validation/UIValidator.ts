import { expect, Locator } from "@playwright/test";

export class UIValidator {

  static async expectVisible(locator: Locator): Promise<void> {
    await expect(locator).toBeVisible();
  }

  static async expectHidden(locator: Locator): Promise<void> {
    await expect(locator).toBeHidden();
  }

  static async expectText(locator: Locator, text: string): Promise<void> {
    await expect(locator).toHaveText(text);
  }

  static async expectContainsText(locator: Locator, text: string): Promise<void> {
    await expect(locator).toContainText(text);
  }

  static async expectValue(locator: Locator, value: string): Promise<void> {
    await expect(locator).toHaveValue(value);
  }

}
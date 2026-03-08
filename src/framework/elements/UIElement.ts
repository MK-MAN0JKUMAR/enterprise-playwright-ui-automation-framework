import { Locator, expect } from "@playwright/test";

export class UIElement {

  private locator: Locator;

  constructor(locator: Locator) {
    this.locator = locator;
  }

  async click(): Promise<void> {
    await this.locator.click();
  }

  async doubleClick(): Promise<void> {
    await this.locator.dblclick();
  }

  async fill(value: string): Promise<void> {
    await this.locator.fill(value);
  }

  async type(value: string): Promise<void> {
    await this.locator.type(value);
  }

  async hover(): Promise<void> {
    await this.locator.hover();
  }

  async check(): Promise<void> {
    await this.locator.check();
  }

  async uncheck(): Promise<void> {
    await this.locator.uncheck();
  }

  async select(value: string): Promise<void> {
    await this.locator.selectOption(value);
  }

  async text(): Promise<string | null> {
    return await this.locator.textContent();
  }

  async value(): Promise<string> {
    return await this.locator.inputValue();
  }

  async isVisible(): Promise<boolean> {
    return await this.locator.isVisible();
  }

  async isHidden(): Promise<boolean> {
    return await this.locator.isHidden();
  }

  async exists(): Promise<boolean> {
    return await this.locator.count().then(c => c > 0);
  }

  async waitForVisible(): Promise<void> {
    await expect(this.locator).toBeVisible();
  }

  async waitForHidden(): Promise<void> {
    await expect(this.locator).toBeHidden();
  }

  async waitForText(text: string): Promise<void> {
    await expect(this.locator).toHaveText(text);
  }

}
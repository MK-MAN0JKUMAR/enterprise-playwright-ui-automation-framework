import { Page, Locator } from "@playwright/test";
import { Logger } from "../reporting/Logger";

export class SelectorFallback {

  static async resolve(
    page: Page,
    strategies: (() => Locator)[]
  ): Promise<Locator> {

    for (let i = 0; i < strategies.length; i++) {

      const locator = strategies[i]();

      const count = await locator.count();

      if (count > 0) {

        if (i > 0) {
          Logger.warn(`Fallback selector used (index ${i})`);
        }

        return locator;

      }

    }

    throw new Error("All selector strategies failed");

  }

}
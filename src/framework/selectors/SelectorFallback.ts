import { Page, Locator } from "@playwright/test";
import { Logger } from "../reporting/Logger";
import { SelectorHealer } from "./SelectorHealer";

export class SelectorFallback {

  static async resolve(
    page: Page,
    strategies: (() => Locator)[],
    healValue?: string
  ): Promise<Locator> {

    for (let i = 0; i < strategies.length; i++) {

      const locator = strategies[i]();

      if (await locator.count() > 0) {

        if (i > 0) {
          Logger.warn(`Fallback selector used (index ${i})`);
        }

        return locator;

      }

    }

    // Auto-healing attempt
    if (healValue) {

      const healed = await SelectorHealer.heal(page, healValue);

      if (healed) {
        Logger.warn(`Selector healed dynamically`);
        return healed;
      }

    }

    throw new Error("All selector strategies failed");

  }

}
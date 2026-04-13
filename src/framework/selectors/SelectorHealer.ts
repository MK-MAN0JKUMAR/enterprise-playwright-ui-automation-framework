import { Locator, Page } from "@playwright/test";
import { Logger } from "@framework/reporting/Logger";

export class SelectorHealer {

    /**
     * Try to auto-heal selector using heuristics
     */
    static async heal(
        page: Page,
        failedValue: string
    ): Promise<Locator | null> {

        Logger.warn(`Attempting selector healing for: ${failedValue}`);

        // Strategy 1 → partial attribute match
        const partial = page.locator(`[data-qa*="${failedValue}"]`);
        if (await partial.count() > 0) {
            Logger.warn(`Healed using partial match: ${failedValue}`);
            return partial.first();
        }

        // Strategy 2 → text similarity
        const textMatch = page.getByText(failedValue, { exact: false });
        if (await textMatch.count() > 0) {
            Logger.warn(`Healed using text match: ${failedValue}`);
            return textMatch.first();
        }

        // Strategy 3 → button fallback
        const buttonMatch = page.getByRole("button", { name: failedValue });
        if (await buttonMatch.count() > 0) {
            Logger.warn(`Healed using role button: ${failedValue}`);
            return buttonMatch.first();
        }

        Logger.error(`Healing failed for: ${failedValue}`);

        return null;

    }

}
import { Locator, Page } from "@playwright/test";
import { SelectorFallback } from "./SelectorFallback";
import { SelectorValidator } from "./SelectorValidator";

export class SelectorEngine {

  /**
   * Preferred selector: data-testid
   */
  static byTestId(page: Page, id: string): Locator {

    SelectorValidator.validate("testId", id);

    return page.getByTestId(id);

  }

  /**
   * Ecommerce selector strategy
   */
  static byDataQa(page: Page, value: string): Locator {

    SelectorValidator.validate("data-qa", value);

    return page.locator(`[data-qa="${value}"]`);

  }

  static byRole(
    page: Page,
    role: Parameters<Page["getByRole"]>[0],
    name?: string
  ): Locator {

    SelectorValidator.validate("role", String(role));

    if (name) {
      return page.getByRole(role, { name, exact: true })
    }

    return page.getByRole(role);

  }

  /**
   * aria-label selector
   */
  static byAriaLabel(page: Page, label: string): Locator {

    SelectorValidator.validate("aria-label", label);

    return page.locator(`[aria-label="${label}"]`);

  }

  /**
   * placeholder selector
   */
  static byPlaceholder(page: Page, text: string): Locator {

    SelectorValidator.validate("placeholder", text);

    return page.getByPlaceholder(text);

  }

  /**
   * visible text selector
   */
  static byText(page: Page, text: string): Locator {

    SelectorValidator.validate("text", text);

    return page.getByText(text);

  }

  /**
   * CSS selector (last resort)
   */
  static byCss(page: Page, selector: string): Locator {

    SelectorValidator.validate("css", selector);

    return page.locator(selector);

  }


  static async smartDataQa(
    page: Page,
    value: string,
    fallbackText?: string
  ): Promise<Locator> {

    return await SelectorFallback.resolve(page, [

      // Primary
      () => page.locator(`[data-qa="${value}"]`),

      // Fallback 1 → role button with same name
      () => fallbackText
        ? page.getByRole("button", { name: fallbackText })
        : page.locator("invalid"),

      // Fallback 2 → text match
      () => fallbackText
        ? page.getByText(fallbackText)
        : page.locator("invalid")
    ], fallbackText || value);  //healing input

  }

}
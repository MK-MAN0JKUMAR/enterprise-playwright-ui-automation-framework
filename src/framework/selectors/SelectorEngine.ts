import { Page, Locator } from "@playwright/test";

export class SelectorEngine {

  /**
   * Preferred selector: data-testid
   */
  static byTestId(page: Page, id: string): Locator {
    return page.getByTestId(id);
  }

  /**
   * ARIA role selector
   */
  static byRole(page: Page, role: string, name?: string): Locator {
    if (name) {
      return page.getByRole(role as any, { name });
    }
    return page.getByRole(role as any);
  }

  /**
   * aria-label selector
   */
  static byAriaLabel(page: Page, label: string): Locator {
    return page.locator(`[aria-label="${label}"]`);
  }

  /**
   * placeholder selector
   */
  static byPlaceholder(page: Page, text: string): Locator {
    return page.getByPlaceholder(text);
  }

  /**
   * visible text selector
   */
  static byText(page: Page, text: string): Locator {
    return page.getByText(text);
  }

  /**
   * CSS selector (last resort)
   */
  static byCss(page: Page, selector: string): Locator {
    return page.locator(selector);
  }

  static byDataQa(page: Page, value: string): Locator {
    return page.locator(`[data-qa="${value}"]`);
  }

}
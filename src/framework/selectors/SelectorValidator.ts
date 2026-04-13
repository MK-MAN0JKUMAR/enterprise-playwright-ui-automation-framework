export class SelectorValidator {

  static validate(type: string, value: string): void {

    // Empty selector
    if (!value || value.trim().length === 0) {
      throw new Error(`Empty selector provided for type: ${type}`);
    }

    // Block fragile CSS
    if (type === "css") {

      if (
        value.includes("nth-child") ||
        value.includes(">") ||
        value.includes(":nth")
      ) {
        throw new Error(`Fragile CSS selector not allowed: ${value}`);
      }

      // Warn for class-based selectors
      if (value.startsWith(".")) {
        console.warn(`Weak CSS selector (class-based): ${value}`);
      }
    }

  }

}
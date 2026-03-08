import { Locator } from "@playwright/test";

export class Table {

  constructor(private rows: Locator) {}

  async rowCount(): Promise<number> {
    return await this.rows.count();
  }

  async getCellText(rowIndex: number, columnLocator: string): Promise<string | null> {

    const row = this.rows.nth(rowIndex);
    const cell = row.locator(columnLocator);

    return await cell.textContent();
  }

}
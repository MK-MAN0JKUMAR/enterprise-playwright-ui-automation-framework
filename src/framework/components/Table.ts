import { UIElement } from "../elements/UIElement";

export class Table {

  constructor(private element: UIElement) {}

  async rowCount(): Promise<number> {
    const exists = await this.element.exists();
    return exists ? 1 : 0;
  }

  async isVisible(): Promise<boolean> {
    return await this.element.isVisible();
  }

  async getText(): Promise<string | null> {
    return await this.element.text();
  }

}
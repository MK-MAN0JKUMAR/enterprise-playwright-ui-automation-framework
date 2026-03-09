import { UIElement } from "../elements/UIElement";

export class Button {

  constructor(private element: UIElement) {}

  async click(): Promise<void> {
    await this.element.click();
  }

  async isVisible(): Promise<boolean> {
    return await this.element.isVisible();
  }

  async getText(): Promise<string | null> {
    return await this.element.text();
  }

}
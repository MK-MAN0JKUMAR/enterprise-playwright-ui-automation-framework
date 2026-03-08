import { UIElement } from "../elements/UIElement";

export class InputField {

  constructor(private element: UIElement) {}

  async fill(value: string): Promise<void> {
    await this.element.fill(value);
  }

  async type(value: string): Promise<void> {
    await this.element.type(value);
  }

  async clear(): Promise<void> {
    await this.element.fill("");
  }

  async value(): Promise<string> {
    return await this.element.value();
  }

  async isVisible(): Promise<boolean> {
    return await this.element.isVisible();
  }

}
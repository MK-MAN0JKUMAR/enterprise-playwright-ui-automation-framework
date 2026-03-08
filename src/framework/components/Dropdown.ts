import { UIElement } from "../elements/UIElement";

export class Dropdown {

  constructor(private element: UIElement) {}

  async select(value: string): Promise<void> {
    await this.element.select(value);
  }

  async getValue(): Promise<string> {
    return await this.element.value();
  }

}
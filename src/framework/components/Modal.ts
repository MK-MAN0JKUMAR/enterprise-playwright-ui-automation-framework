import { UIElement } from "../elements/UIElement";

export class Modal {

  constructor(
    private container: UIElement,
    private closeButton?: UIElement
  ) {}

  async waitForOpen(): Promise<void> {
    await this.container.waitForVisible();
  }

  async waitForClose(): Promise<void> {
    await this.container.waitForHidden();
  }

  async close(): Promise<void> {
    if (this.closeButton) {
      await this.closeButton.click();
    }
  }

}
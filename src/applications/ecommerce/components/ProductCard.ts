import { Page } from "@playwright/test";
import { UIElement } from "../../../framework/elements/UIElement";
import { Button } from "../../../framework/components/Button";
import { SelectorEngine } from "../../../framework/selectors/SelectorEngine";

export class ProductCard {

  private addToCartButton: Button;

  constructor(page: Page) {

    this.addToCartButton = new Button(
      new UIElement(
        SelectorEngine.byCss(page, '.add-to-cart')
      )
    );

  }

  async addToCart(): Promise<void> {

    await this.addToCartButton.click();

  }

}
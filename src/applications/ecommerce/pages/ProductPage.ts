import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { UIElement } from "../../../framework/elements/UIElement";
import { Button } from "../../../framework/components/Button";
import { SelectorEngine } from "../../../framework/selectors/SelectorEngine";

export class ProductPage extends BasePage {

  private addToCartButton: Button;

  constructor(page: Page) {

    super(page);

    this.addToCartButton = new Button(
      new UIElement(
        SelectorEngine.byCss(page, '.btn.btn-default.cart')
      )
    );

  }

  async addToCart(): Promise<void> {

    await this.addToCartButton.click();

  }

}
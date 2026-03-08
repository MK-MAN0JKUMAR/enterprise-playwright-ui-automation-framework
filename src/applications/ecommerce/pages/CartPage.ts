import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { UIElement } from "../../../framework/elements/UIElement";
import { Button } from "../../../framework/components/Button";
import { SelectorEngine } from "../../../framework/selectors/SelectorEngine";

export class CartPage extends BasePage {

  private checkoutButton: Button;

  constructor(page: Page) {

    super(page);

    this.checkoutButton = new Button(
      new UIElement(
        SelectorEngine.byCss(page, '.check_out')
      )
    );

  }

  async proceedToCheckout(): Promise<void> {

    await this.checkoutButton.click();

  }

}
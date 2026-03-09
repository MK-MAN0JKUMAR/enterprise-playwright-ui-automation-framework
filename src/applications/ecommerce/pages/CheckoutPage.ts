import { Page } from "@playwright/test";
import { BasePage } from "@framework/pages/BasePage";
import { UIElement } from "../../../framework/elements/UIElement";
import { Button } from "../../../framework/components/Button";
import { SelectorEngine } from "../../../framework/selectors/SelectorEngine";

export class CheckoutPage extends BasePage {

  private placeOrderButton: Button;

  constructor(page: Page) {

    super(page);

    this.placeOrderButton = new Button(
      new UIElement(
        SelectorEngine.byCss(page, '.check_out')
      )
    );

  }

  async placeOrder(): Promise<void> {

    await this.placeOrderButton.click();

  }

}
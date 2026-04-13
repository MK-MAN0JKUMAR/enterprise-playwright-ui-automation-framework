import { FrameworkConfigType } from "@config/framework.config";
import { BasePage } from "@framework/pages/BasePage";
import { Page } from "@playwright/test";
import { Button } from "@framework/components/Button";


export class CartPage extends BasePage {

  private checkoutButton: Button;

  constructor(page: Page, config: FrameworkConfigType) {

    super(page, config);

    this.checkoutButton = this.components.buttonByCss('.check_out');

  }

  async proceedToCheckout(): Promise<void> {

    await this.checkoutButton.click();

  }

}
import { Button } from "@framework/components/Button";
import { BasePage } from "@framework/pages/BasePage";
import { Page } from "@playwright/test";
import { FrameworkConfigType } from "config/framework.config";



export class CheckoutPage extends BasePage {

  private placeOrderButton: Button;

  constructor(page: Page, config: FrameworkConfigType) {

    super(page, config);

    this.placeOrderButton = this.components.buttonByCss('.check_out');

  }

  async placeOrder(): Promise<void> {

    await this.placeOrderButton.click();

  }

}
import { Button } from "@framework/components/Button";
import { BasePage } from "@framework/pages/BasePage";
import { Page } from "@playwright/test";
import { FrameworkConfigType } from "config/framework.config";



export class ProductPage extends BasePage {

  private addToCartButton: Button;

  constructor(page: Page, config: FrameworkConfigType) {

    super(page, config);

    this.addToCartButton = this.components.buttonByCss('.btn.btn-default.cart');

  }

  async addToCart(): Promise<void> {

    await this.addToCartButton.click();

  }

}
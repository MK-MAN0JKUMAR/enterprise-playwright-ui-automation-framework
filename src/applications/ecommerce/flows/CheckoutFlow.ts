import { Page } from "@playwright/test";
import { ProductPage } from "@applications/ecommerce/pages/ProductPage";
import { CartPage } from "@applications/ecommerce/pages/CartPage";
import { CheckoutPage } from "@applications/ecommerce/pages/CheckoutPage";

export class CheckoutFlow {

  private productPage: ProductPage;
  private cartPage: CartPage;
  private checkoutPage: CheckoutPage;

  constructor(private page: Page) {

    this.productPage = new ProductPage(page);
    this.cartPage = new CartPage(page);
    this.checkoutPage = new CheckoutPage(page);

  }

  async checkoutProduct(): Promise<void> {

    await this.productPage.addToCart();

    await this.cartPage.proceedToCheckout();

    await this.checkoutPage.placeOrder();

  }

}
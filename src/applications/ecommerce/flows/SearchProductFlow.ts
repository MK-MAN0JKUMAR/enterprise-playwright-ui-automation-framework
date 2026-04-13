import { Page } from "@playwright/test";
import { HomePage } from "@applications/ecommerce/pages/HomePage";

export class SearchProductFlow {

  private homePage: HomePage;

  constructor(private page: Page) {

    this.homePage = new HomePage(page);

  }

  async searchProduct(product: string): Promise<void> {

    await this.homePage.searchProduct(product);

  }

}
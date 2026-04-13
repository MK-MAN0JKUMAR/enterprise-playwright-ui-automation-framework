import { BasePage } from "@framework/pages/BasePage";
import { Page } from "@playwright/test";
import { FrameworkConfigType } from "@config/framework.config";
import { Button } from "@framework/components/Button";
import { InputField } from "@framework/components/InputField";

export class HomePage extends BasePage {

  private searchInput: InputField;
  private searchButton: Button;

  constructor(page: Page, config: FrameworkConfigType) {

    super(page, config);

    this.searchInput = this.components.inputByCss('input[name="search"]');
    this.searchButton = this.components.buttonByCss('button[type="submit"]');

  }

  async searchProduct(product: string): Promise<void> {

    await this.searchInput.fill(product);
    await this.searchButton.click();

  }

}
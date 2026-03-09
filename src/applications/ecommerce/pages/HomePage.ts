import { Page } from "@playwright/test";
import { BasePage } from "@framework/pages/BasePage";
import { UIElement } from "../../../framework/elements/UIElement";
import { InputField } from "../../../framework/components/InputField";
import { Button } from "../../../framework/components/Button";
import { SelectorEngine } from "../../../framework/selectors/SelectorEngine";

export class HomePage extends BasePage {

  private searchInput: InputField;
  private searchButton: Button;

  constructor(page: Page) {

    super(page);

    this.searchInput = new InputField(
      new UIElement(
        SelectorEngine.byCss(page, 'input[name="search"]')
      )
    );

    this.searchButton = new Button(
      new UIElement(
        SelectorEngine.byCss(page, 'button[type="submit"]')
      )
    );

  }

  async searchProduct(product: string): Promise<void> {

    await this.searchInput.fill(product);

    await this.searchButton.click();

  }

}
import { Locator, Page } from "@playwright/test";

import { UIElement } from "@framework/elements/UIElement";
import { SelectorEngine } from "@framework/selectors/SelectorEngine";

import { Button } from "@framework/components/Button";
import { Dropdown } from "@framework/components/Dropdown";
import { InputField } from "@framework/components/InputField";
import { Modal } from "@framework/components/Modal";
import { Table } from "@framework/components/Table";
export class ComponentFactory {

  constructor(private page: Page) { }

  /**
   * Internal helper to create UIElement
   */
  private element(locator: Locator, description: string): UIElement {

    UIElement.enableFactoryCreation();

    const element = new UIElement(locator, description);

    UIElement.disableFactoryCreation();

    return element;
  }

  inputByDataQa(value: string): InputField {

    return new InputField(
      this.element(
        SelectorEngine.byDataQa(this.page, value),
        `input[data-qa="${value}"]`
      )
    );

  }

  buttonByDataQa(value: string): Button {

    return new Button(
      this.element(
        SelectorEngine.byDataQa(this.page, value),
        `button[data-qa="${value}"]`
      )
    );

  }

  inputByPlaceholder(value: string): InputField {

    return new InputField(
      this.element(
        SelectorEngine.byPlaceholder(this.page, value),
        `input placeholder="${value}"`
      )
    );

  }

  buttonByRole(
    role: Parameters<Page["getByRole"]>[0],
    name: string
  ): Button {

    return new Button(
      this.element(
        SelectorEngine.byRole(this.page, role, name),
        `role=${role} name="${name}"`
      )
    );

  }

  dropdownByDataQa(value: string): Dropdown {

    return new Dropdown(
      this.element(
        SelectorEngine.byDataQa(this.page, value),
        `dropdown[data-qa="${value}"]`
      )
    );

  }

  tableByCss(selector: string): Table {

    return new Table(
      this.element(
        SelectorEngine.byCss(this.page, selector),
        `table selector="${selector}"`
      )
    );

  }

  modalByRole(
    role: Parameters<Page["getByRole"]>[0],
    name: string
  ): Modal {

    return new Modal(
      this.element(
        SelectorEngine.byRole(this.page, role, name),
        `modal role=${role} name="${name}"`
      )
    );

  }

  elementByRole(
    role: Parameters<Page["getByRole"]>[0],
    name: string
  ): UIElement {

    return this.element(
      SelectorEngine.byRole(this.page, role, name),
      `role=${role} name="${name}"`
    );

  }

  // ---------- GENERIC ELEMENTS ----------

  elementByCss(selector: string): UIElement {

    return this.element(
      SelectorEngine.byCss(this.page, selector),
      `css="${selector}"`
    );

  }

  elementByText(text: string): UIElement {

    return this.element(
      SelectorEngine.byText(this.page, text),
      `text="${text}"`
    );

  }

  elementByTestId(id: string): UIElement {

    return this.element(
      SelectorEngine.byTestId(this.page, id),
      `testId="${id}"`
    );

  }


  // ---------- INPUT FALLBACKS ----------

  inputByCss(selector: string): InputField {

    return new InputField(
      this.element(
        SelectorEngine.byCss(this.page, selector),
        `input css="${selector}"`
      )
    );

  }


  // ---------- BUTTON FALLBACKS ----------

  buttonByCss(selector: string): Button {

    return new Button(
      this.element(
        SelectorEngine.byCss(this.page, selector),
        `button css="${selector}"`
      )
    );

  }


  // ---------- DROPDOWN FALLBACK ----------

  dropdownByCss(selector: string): Dropdown {

    return new Dropdown(
      this.element(
        SelectorEngine.byCss(this.page, selector),
        `dropdown css="${selector}"`
      )
    );

  }

  async smartButtonByDataQa(
    value: string,
    fallbackText?: string
  ): Promise<Button> {

    const locator = await SelectorEngine.smartDataQa(
      this.page,
      value,
      fallbackText
    );

    return new Button(
      this.element(
        locator,
        `smart-button[data-qa="${value}"]`
      )
    );

  }

}
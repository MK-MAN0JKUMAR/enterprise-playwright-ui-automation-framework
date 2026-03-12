import { Locator, Page } from "@playwright/test";

import { UIElement } from "../elements/UIElement";
import { SelectorEngine } from "../selectors/SelectorEngine";

import { Button } from "../components/Button";
import { Dropdown } from "../components/Dropdown";
import { InputField } from "../components/InputField";
import { Modal } from "../components/Modal";
import { Table } from "../components/Table";

export class ComponentFactory {

  constructor(private page: Page) { }

  private element(locator: Locator): UIElement {

    return new UIElement(locator);

  }

  inputByDataQa(value: string): InputField {

    return new InputField(
      this.element(
        SelectorEngine.byDataQa(this.page, value)
      )
    );

  }

  buttonByDataQa(value: string): Button {

    return new Button(
      this.element(
        SelectorEngine.byDataQa(this.page, value)
      )
    );

  }

  inputByPlaceholder(value: string): InputField {

    return new InputField(
      this.element(
        SelectorEngine.byPlaceholder(this.page, value)
      )
    );

  }

  buttonByRole(
    role: Parameters<Page["getByRole"]>[0],
    name: string
  ): Button {

    return new Button(
      this.element(
        SelectorEngine.byRole(this.page, role, name)
      )
    );

  }

  dropdownByDataQa(value: string): Dropdown {

    return new Dropdown(
      this.element(
        SelectorEngine.byDataQa(this.page, value)
      )
    );

  }

  tableByCss(selector: string): Table {

    return new Table(
      this.element(
        SelectorEngine.byCss(this.page, selector)
      )
    );

  }

  modalByRole(
    role: Parameters<Page["getByRole"]>[0],
    name: string
  ): Modal {

    return new Modal(
      this.element(
        SelectorEngine.byRole(this.page, role, name)
      )
    );

  }

}
import { Page } from "@playwright/test";
import { UIElement } from "../elements/UIElement";
import { SelectorEngine } from "../selectors/SelectorEngine";

import { InputField } from "../components/InputField";
import { Button } from "../components/Button";
import { Dropdown } from "../components/Dropdown";
import { Table } from "../components/Table";
import { Modal } from "../components/Modal";

export class ComponentFactory {

  constructor(private page: Page) {}

  inputByDataQa(value: string): InputField {
    return new InputField(
      new UIElement(
        SelectorEngine.byDataQa(this.page, value)
      )
    );
  }

  buttonByDataQa(value: string): Button {
    return new Button(
      new UIElement(
        SelectorEngine.byDataQa(this.page, value)
      )
    );
  }

  inputByPlaceholder(value: string): InputField {
    return new InputField(
      new UIElement(
        SelectorEngine.byPlaceholder(this.page, value)
      )
    );
  }

  buttonByRole(role: string, name: string): Button {
    return new Button(
      new UIElement(
        SelectorEngine.byRole(this.page, role, name)
      )
    );
  }

  dropdownByDataQa(value: string): Dropdown {
    return new Dropdown(
      new UIElement(
        SelectorEngine.byDataQa(this.page, value)
      )
    );
  }

  tableByCss(selector: string): Table {
    return new Table(
      new UIElement(
        SelectorEngine.byCss(this.page, selector)
      )
    );
  }

  modalByRole(role: string, name: string): Modal {
    return new Modal(
      new UIElement(
        SelectorEngine.byRole(this.page, role, name)
      )
    );
  }

}
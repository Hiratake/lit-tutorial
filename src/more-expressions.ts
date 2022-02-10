import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("more-expressions")
export class MoreExpressions extends LitElement {
  @property()
  checked: boolean = false;

  render() {
    return html`
      <div>
        <!-- TODO: Add expression to input. -->
        <input type="text" value="Hello there." ?disabled=${!this.checked} />
      </div>
      <label>
        <input type="checkbox" @change=${this.setChecked} /> Enable editing
      </label>
    `;
  }

  setChecked(event: Event) {
    this.checked = (event.target as HTMLInputElement).checked;
  }
}

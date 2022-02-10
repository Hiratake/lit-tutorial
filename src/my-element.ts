import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("my-element")
export class MyElement extends LitElement {
  // Add a reactive property
  @property()
  message: string = "Hello again.";

  render() {
    return html`<p>${this.message}</p> `;
  }
}

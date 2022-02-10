import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("name-tag")
export class NameTag extends LitElement {
  @property()
  name: string = "Your name here";

  render() {
    // TODO: Add declarative event listener to input.
    return html`
      <p>Hello, ${this.name}</p>
      <input placeholder="Enter your name" @input=${this.changeName} />
    `;
  }

  // TODO: Add event handler method.
  changeName(event: Event) {
    const input = event.target as HTMLInputElement;
    this.name = input.value;
  }
}

import { LitElement, html, css } from 'lit';
import "../elements/chat-message";

class ChatFrame extends LitElement {
  render() {
    return html`
        <section>
            <chat-message></chat-message>
        </section>
    `;
  }

  static styles = css`
    section {
        margin: 10px;
    }
  `;
}

customElements.define('chat-frame', ChatFrame);

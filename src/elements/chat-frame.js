import { LitElement, html, css } from 'lit';

class ChatFrame extends LitElement {
  render() {
    return html`
        <section>
            CHAT CHAT CHAT
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

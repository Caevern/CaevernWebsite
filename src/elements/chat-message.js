import { LitElement, html, css } from 'lit';
import "./profile-button";

class ChatMessage extends LitElement {
  static properties = {
    messageText: { type: String },
  };

  constructor() {
    super();

    this.messageText = 'Undefined';
  }

  render() {
    return html`
        <section>
            <profile-button profileType="profile"></profile-button>
            <div>
                <a href="server">Username</a>
                <span>${this.messageText}</span>
            </div>
        </section>
    `;
  }

  static styles = css`
    section {
        width: 100%;
        border-radius: 10px;
        display: flex;
        align-items: start;
        padding: 10px;
        gap: 10px;
        background-color: rgba(0, 0, 0, 0);
    }
    section:hover {
        background-color: var(--primary-message-bg-color);
    }

    div {
        display: flex;
        flex-direction: column;
    }

    a {
        text-decoration: none;
        color: var(--primary-text-color);
    }
    span {
        color: var(--secondary-text-color);
    }
  `;
}

customElements.define('chat-message', ChatMessage);

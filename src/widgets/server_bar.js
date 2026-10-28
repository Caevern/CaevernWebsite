import { LitElement, html, css } from 'lit';
import "../elements/profile-button";

class ServerBar extends LitElement {
  render() {
    return html`
        <section>
            <profile-button profileType="home"></profile-button>
            <profile-button profileType="server"></profile-button>
        </section>
    `;
  }

  static styles = css`
    section {
        background-color: var(--frame-bg-color);
        height: 100vh;
        width: 40px;
        padding: 10px;
        gap: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
  `;
}

customElements.define('server-bar', ServerBar);

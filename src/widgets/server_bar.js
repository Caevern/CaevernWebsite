import { LitElement, html, css } from 'lit';

class ServerBar extends LitElement {
  render() {
    return html`
        <section>
            a
        </section>
    `;
  }

  static styles = css`
    section {
        background-color: var(--frame-bg-color);
        height: 100vh;
        width: 100px;
    }
  `;
}

customElements.define('server-bar', ServerBar);

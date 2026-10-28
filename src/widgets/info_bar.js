import { LitElement, html, css } from 'lit';

class InfoBar extends LitElement {
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
        height: 40px;
        right: 100%;
    }
  `;
}

customElements.define('info-bar', InfoBar);

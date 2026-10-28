import { LitElement, html, css } from 'lit';

class InfoBar extends LitElement {
  static properties = {
    channelName: { type: String },
  };

  constructor() {
    super();

    this.channelName = 'General';
  }

  render() {
    return html`
        <section>
            <span>${this.channelName}</span>
        </section>
    `;
  }

  static styles = css`
    section {
        background-color: var(--frame-bg-color);
        height: 60px;
        right: 100%;
        display: flex;
        align-items: center;
        padding-left: 10px;
    }
  `;
}

customElements.define('info-bar', InfoBar);

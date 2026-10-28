import { LitElement, html, css } from 'lit';

class ProfileButton extends LitElement {
  static properties = {
    profileType: { type: String },
  };

  constructor() {
    super();

    this.profileType = 'server';
  }

  #getProfileImage() {
    switch(this.profileType) {
      case "server":
        return html`<img alt="Friends Icon" src="/src/assets/icons/server.svg">`;
      break;
      case "friend":
        return html`<img alt="Friends Icon" src="/src/assets/icons/person.svg">`;
      break;
      default:
        return html`<img alt="Friends Icon" src="/src/assets/icons/favorite.svg">`;
    }
  }

  #getProfileRedirect() {
    switch(this.profileType) {
      case "server":
        return "/server";
      break;
      case "friend":
        return "/profile";
      break;
      default:
        return "/";
    }
  }

  render() {
    return html`
        <a href="${this.#getProfileRedirect()}"><div>${this.#getProfileImage()}</div></a>
    `;
  }

  static styles = css`
    div {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        border-radius: 100%;
        justify-content: center;
        background-color: var(--primary-profile-bg-color);
    }
  `;
}

customElements.define('profile-button', ProfileButton);

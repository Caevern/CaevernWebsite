import { LitElement, html } from 'lit';
import "../frames/chat-frame";

class ServerPage extends LitElement {
  constructor() {
    super();

    this.socket = null;
    this.#startWebsocketConnection();
  }

  #startWebsocketConnection() {
    this.socket = new WebSocket("ws://127.0.0.1:3000/ws");

    this.socket.addEventListener("open", () => {
      console.log("Connected!");
    });

    this.socket.addEventListener("message", (event) => {
      const data = JSON.parse(event.data);
      console.log("Received:", data);
    });

    this.socket.addEventListener("close", () => {
      console.log("Disconnected");
    });
  }

  render() {
    return html`
        <chat-frame></chat-frame>
    `;
  }
}

customElements.define('server-page', ServerPage);

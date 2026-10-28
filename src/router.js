import { Router } from '@vaadin/router';
import "./pages/landing_page";
import "./pages/server_page";

const contentElement = document.querySelector("#content");
const router = new Router(contentElement);

router.setRoutes([
  { path: "/", component: "landing-page" },
  { path: "/server", component: "server-page" },
]);

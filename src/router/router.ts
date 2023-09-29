import { initWelcome } from "src/pages/welcome";
import { initStep1 } from "src/pages/step-1";
import { initThankYou } from "src/pages/thank-you";

const routes = [
  {
    path: /\/welcome/,
    component: initWelcome,
  },
  {
    path: /\/step-1/,
    component: initStep1,
  },
  {
    path: /\/thank-you/,
    component: initThankYou,
  },
];

export function initRouter(container: HTMLElement) {
  function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
  }

  function handleEvents() {
    const startButton = document.querySelector("#start-button");
    startButton?.addEventListener("click", () => {
      goTo("/step-1");
    });

    const continueButton = document.querySelector("#continue-button");
    continueButton?.addEventListener("click", () => {
      goTo("/thank-you");
    });

    const backButton = document.querySelector("#back-button");
    backButton?.addEventListener("click", () => {
      goTo("/welcome");
    });

    const endButton = document.querySelector("#end-button");
    endButton?.addEventListener("click", () => {
      goTo("/welcome");
    });
  }

  function handleRoute(route) {
    for (const r of routes) {
      if (r.path.test(route)) {
        const el = r.component({ goTo: goTo });
        if (container.firstChild) {
          container.firstChild.remove();
        }
        container.appendChild(el);
      }
      handleEvents();
      window.scrollTo(0, 0);
    }
  }
  handleRoute(location.pathname);
}

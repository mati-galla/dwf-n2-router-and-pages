import { initRouter } from "./router/router";
import { initHeaderCE } from "./components/header";
import { initTitleCE } from "src/components/title";
import { initBodyTextCE } from "src/components/body-text";
import { initLargeTextCE } from "src/components/large-text";
import { initTextInputCE } from "src/components/text-input";
import { initSelectCE } from "src/components/select";
import { initFilledButtonCE } from "src/components/filled-button";
import { initOutlinedButtonCE } from "src/components/outlined-button";
import { initFooterCE } from "./components/footer";

(function () {
  initHeaderCE();
  initTitleCE();
  initBodyTextCE();
  initLargeTextCE();
  initTextInputCE();
  initSelectCE();
  initFilledButtonCE();
  initOutlinedButtonCE();
  initFooterCE();

  const welcome = /\/welcome/;
  const step1 = /\/step-1/;
  const thankYou = /\/thank-you/;
  if (
    !welcome.test(location.pathname) &&
    !step1.test(location.pathname) &&
    !thankYou.test(location.pathname)
  ) {
    location.pathname = "/welcome";
  }
  const container = document.querySelector<HTMLElement>(".main-container");
  if (!container) throw new ReferenceError('Class "container" not found.');
  initRouter(container);
})();

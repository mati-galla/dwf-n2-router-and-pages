export function initOutlinedButtonCE() {
  class OutlinedButtonCE extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      const textoOriginal = this.textContent;
      var shadow = this.attachShadow({ mode: "open" });
      var style = document.createElement("style");
      style.innerHTML = `
      .root {
        width: 100%;
        height: 55px;
        border-radius: 4px;
        border: 2px solid #000;
        background: none;
        font-family: "Poppins", sans-serif;
        font-size: 22px;
        font-weight: 500;
        cursor: pointer;
      }      
      `;

      var button = document.createElement("button");
      button.classList.add("root");
      button.textContent = textoOriginal;

      shadow.appendChild(style);
      shadow.appendChild(button);
    }
  }
  customElements.define("outlined-button-ce", OutlinedButtonCE);
}

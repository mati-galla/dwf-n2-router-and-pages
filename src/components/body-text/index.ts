export function initBodyTextCE() {
  class BodyTextCE extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      const textoOriginal = this.textContent;
      this.textContent = "";
      var shadow = this.attachShadow({ mode: "open" });
      var style = document.createElement("style");
      style.innerHTML = `
      .root {
        width: 100%;
      }      
      
      .root p {
        font-family: 'Poppins', sans-serif;
        font-size: 18px;
        font-weight: 400;
      }
      `;

      var div = document.createElement("div");
      var p = document.createElement("p");
      div.classList.add("root");
      p.textContent = textoOriginal;
      div.appendChild(p);

      shadow.appendChild(style);
      shadow.appendChild(div);
    }
  }
  customElements.define("body-text-ce", BodyTextCE);
}

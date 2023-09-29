export function initTitleCE() {
  class TitleCE extends HTMLElement {
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
        margin-top: 40px;
      }      
      
      .root h1 {
        font-family: 'Poppins', sans-serif;
        font-size: 46px;
        font-weight: 700;
      }
      `;

      var div = document.createElement("div");
      var h1 = document.createElement("h1");
      div.classList.add("root");
      h1.textContent = textoOriginal;
      div.appendChild(h1);

      shadow.appendChild(style);
      shadow.appendChild(div);
    }
  }
  customElements.define("title-ce", TitleCE);
}

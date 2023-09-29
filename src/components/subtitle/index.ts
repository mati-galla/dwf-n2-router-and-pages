export function initSubtitleCE() {
  class SubtitleCE extends HTMLElement {
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
      
      .root h2 {
        font-family: 'Poppins', sans-serif;
        font-size: 38px;
        font-weight: 700;
      }
      `;

      var div = document.createElement("div");
      var h2 = document.createElement("h2");
      div.classList.add("root");
      h2.textContent = textoOriginal;
      div.appendChild(h2);

      shadow.appendChild(style);
      shadow.appendChild(div);
    }
  }
  customElements.define("subtitle-ce", SubtitleCE);
}

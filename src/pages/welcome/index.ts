export function initWelcome(params) {
  const div = document.createElement("div");
  div.innerHTML = `
  <title-ce> Te damos la bienvenida a esta página</title-ce>

  <div class="body-text-container">
    <body-text-ce>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
      veniam ea suscipit minima, iusto, ipsum tempore repellat amet
      obcaecati tenetur tempora quos sint natus aperiam voluptatem maiores
      officia labore atque?
    </body-text-ce>
  </div>

  <div class="name-form">
    <large-text-ce> Para continuar ingresá tu nombre </large-text-ce>

    <div class="name-form__row">
      <text-input-ce>Nombre</text-input-ce>
    </div>

    <filled-button-ce id="start-button"> Comenzar </filled-button-ce>
  </div>
  `;

  return div;
}

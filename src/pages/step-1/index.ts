export function initStep1(params) {
  const div = document.createElement("div");
  div.innerHTML = `
  <title-ce>Necesitamos algunos datos más</title-ce>

  <div class="data-form">
    <div class="data-form__row">
      <text-input-ce>Email</text-input-ce>
    </div>

    <div class="data-form__row">
      <text-input-ce>Comida favorita</text-input-ce>
    </div>

    <div class="data-form__row">
      <select-ce>
        <li>Piedra</li>
        <li>Papel</li>
        <li>Tijeras</li>
      </select-ce>
    </div>

    <div class="data-form__buttons">
      <filled-button-ce id="continue-button">Continuar</filled-button-ce>

      <outlined-button-ce id="back-button">Volver</outlined-button-ce>
    </div>
  </div>
`;

  return div;
}

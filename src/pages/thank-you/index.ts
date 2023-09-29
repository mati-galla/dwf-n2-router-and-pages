export function initThankYou(params) {
  const div = document.createElement("div");
  div.innerHTML = `
  <title-ce>Gracias</title-ce>

  <div class="large-text-container">
    <large-text-ce
      >Toda la información que nos brindaste es muy
      importante</large-text-ce
    >
  </div>

  <div class="button-container">
    <filled-button-ce id="end-button">De nada</filled-button-ce>
  </div>
`;

  return div;
}

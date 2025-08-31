// Seleciona todas as cartas
const cards = document.querySelectorAll(".card");
const selectedCardDiv = document.getElementById("selected-card");

// Função para limpar e criar a carta selecionada
function displaySelectedCard(name, src) {
  // Limpa conteúdo anterior
  selectedCardDiv.innerHTML = "";

  // Cria elementos
  const cardContainer = document.createElement("div");
  const cardTitle = document.createElement("h3");
  const cardImage = document.createElement("img");

  cardTitle.textContent = name;
  cardImage.src = src;
  cardImage.alt = name;

  // Adiciona animação suave
  cardImage.style.opacity = 0;
  cardContainer.appendChild(cardTitle);
  cardContainer.appendChild(cardImage);
  selectedCardDiv.appendChild(cardContainer);

  // Pequeno delay para animação
  setTimeout(() => {
    cardImage.style.transition = "opacity 0.5s ease-in-out, transform 0.5s";
    cardImage.style.opacity = 1;
    cardImage.style.transform = "scale(1)";
  }, 50);
}

// Adiciona evento de clique em cada carta
cards.forEach(card => {
  card.addEventListener("click", () => {
    const cardName = card.getAttribute("data-name");
    const cardSrc = card.getAttribute("src");

    displaySelectedCard(cardName, cardSrc);

    // Opcional: foco para leitores de tela
    selectedCardDiv.setAttribute("tabindex", "-1");
    selectedCardDiv.focus();
  });
});

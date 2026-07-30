document.addEventListener("DOMContentLoaded", () => {
  console.log("Dark Gothic Portfolio Loaded Successfully.");

  // Hover Effect pada Link Cards
  const cards = document.querySelectorAll(".link-card");
  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.borderColor = "#ff2a70";
    });
    card.addEventListener("mouseleave", () => {
      card.style.borderColor = "#262630";
    });
  });
});

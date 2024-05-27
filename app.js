import Game from "./js/game.js";

document.addEventListener("DOMContentLoaded", () => {
  const game = new Game();

  // Start game and pass all element selectors together
  game.start({
    healthElement: ".health",
    hungerElement: ".hunger",
    energyElement: ".energy",
    funElement: ".fun",
  });

  document
    .getElementById("hunger")
    .addEventListener("click", () => console.log("feed"));
});

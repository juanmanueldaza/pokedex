async function handleSearchButton() {
  spritePosition = 0;
  data = await getPokemon(input.value.toLowerCase());
  displayPokemon();
}

async function handleRandom() {
  spritePosition = 0;
  data = await getPokemon(randomIntFromInterval());
  displayPokemon();
}

async function handleForwardButton() {
  if (!pokeId) {
    pokeId = 0;
  }
  pokeId += 1;
  spritePosition = 0;
  if (pokeId > 898) {
    pokeId = 1;
  }
  input.value = pokeId;

  handleSearchButton();
}

async function handleBackwardButton() {
  if (!pokeId) {
    pokeId = 898;
  }
  pokeId -= 1;
  spritePosition = 0;
  if (pokeId < 1) {
    pokeId = 898;
  }
  input.value = pokeId;
  handleSearchButton();
}

function handleUpButton() {
  spritePosition -= 1;
  if (spritePosition < 0) {
    spritePosition = spriteAmount - 1;
  }
  displayPokemon();
}

function handleDownButton() {
  spritePosition += 1;
  if (spritePosition > spriteAmount - 1) {
    spritePosition = 0;
  }
  displayPokemon();
}

function handleCryButton() {
  playPokemonCry();
  speaker.classList.add("shake");
}

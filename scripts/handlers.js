async function handleSearchButton() {
  data = await getPokemon(input.value.toLowerCase());
  displayPokemon();
}

async function handleRandom() {
  data = await getPokemon(randomIntFromInterval());
  displayPokemon();
}

async function handleForwardButton() {
  if (!pokeId) {
    pokeId = 0;
  }
  pokeId += 1;
  imgUrlPosition = 0;
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
  imgUrlPosition = 0;
  if (pokeId < 1) {
    pokeId = 898;
  }
  input.value = pokeId;
  handleSearchButton();
}

function handleUpButton() {
  let availableSprites = getAvalaibleSprites(data);
  let currentSprite = availableSprites[imgUrlPosition];
  changeSprite(availableSprites);
}

function handleDownButton() {
  imgUrlArray = data.sprites;
}

function handleCryButton() {
  playPokemonCry();
  speaker.classList.add("shake");
}

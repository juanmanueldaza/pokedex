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
  imgUrlPosition += 1;
  if (imgUrlPosition > 3) {
    imgUrlPosition = 0;
  }
  changePokemonPicture();
}

function handleDownButton() {
  imgUrlPosition -= 1;
  if (imgUrlPosition < 0) {
    imgUrlPosition = 3;
  }
  changePokemonPicture();
}

function handleCryButton() {
  playPokemonCry();
  speaker.classList.add("shake");
}

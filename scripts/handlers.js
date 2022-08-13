async function handleSearchButton(e) {
  data = await getPokemon(input.value.toLowerCase());
  id = data.id;
  name = data.name;
  displayPokemon();
}

async function handleMainBigLed() {
  data = await getPokemon(randomIntFromInterval());
  id = data.id;
  name = data.name;
  displayPokemon();
}

async function handleForwardButton(e) {
  id += 1;
  imgUrlPosition = 0;
  if (id > 898) {
    id = 1;
  }
  displayPokemon();
}

async function handleBackwardButton(e) {
  id -= 1;
  imgUrlPosition = 0;
  if (id < 1) {
    id = 898;
  }
  displayPokemon();
}

function handleUpButton(e) {
  imgUrlPosition += 1;
  if (imgUrlPosition > 3) {
    imgUrlPosition = 0;
  }
  changePokemonPicture();
}

function handleDownButton(e) {
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

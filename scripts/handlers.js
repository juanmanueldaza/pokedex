async function handleSearchButton() {
  hidePokemonImageForLoadingAnimation();
  showGifLoadingAnimation();
  spritePosition = 0;
  pokeTypes.classList.remove(poketypeOne);
  pokeTypes.classList.remove(poketypeTwo);
  data = await getPokemon(input.value.toLowerCase());
  setTimeout(() => displayPokemon(), 2110);
  setTimeout(() => hideGifLoadingAnimation(), 2110);
  setTimeout(() => showPokemonImageForLoadingAnimation(), 2110);
}

async function handleRandom() {
  hidePokemonImageForLoadingAnimation();
  showGifLoadingAnimation();
  spritePosition = 0;
  data = await getPokemon(randomIntFromInterval());
  setTimeout(() => displayPokemon(), 2110);
  setTimeout(() => hideGifLoadingAnimation(), 2110);
  setTimeout(() => showPokemonImageForLoadingAnimation(), 2110);
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

function handleSecondaryLeftArrow() {
  statsPosition -= 1;
  if (statsPosition < 0) {
    statsPosition = statsKeys.length - 1;
  }
  if (statsPosition === 0) {
    changeName(pokeName);
  } else {
    nameTitle.innerHTML = `<h3>${statsKeys[statsPosition]}</h3><br><p>${pokemonStats[statsPosition]}</p>`;
  }
}

function handleSecondaryRightArrow() {
  statsPosition += 1;
  if (statsPosition > statsKeys.length - 1) {
    statsPosition = 0;
    changeName(pokeName);
  } else {
    nameTitle.innerHTML = `<h3>${statsKeys[statsPosition]}</h3><br><p>${pokemonStats[statsPosition]}</p>`;
  }
}

async function getPokemon(nameOrId) {
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`);
  if (response.status === 404) {
    image.src =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/25.png";
    nameTitle.innerHTML = "Pokémon no encontrado";
    return;
  }
  return await response.json();
}

function displayPokemon() {
  pokeId = data.id;
  input.value = pokeId;
  pokeName = data.name;
  pokemonStats = getStats(data);
  getSprites();
  changeSprite();
  changeName(pokeName);
  changeGender(spriteKey);
  changeTypes(data.types);
}

async function changePokemonPicture() {
  let src = getImgSrc(pokeId);
  changeImgSrc(src);
}

function getSprites() {
  availableSprites = getAvalaibleSprites(data);
  spriteAmount = availableSprites.length;
  spriteKey = availableSprites[spritePosition];
}

function changeSprite() {
  spriteSrc = data.sprites[spriteKey];
  changeImgSrc(spriteSrc);
}

async function playPokemonCry() {
  new Audio(
    `https://play.pokemonshowdown.com/audio/cries/${pokeName}.mp3`
  ).play();
}

function showGifLoadingAnimation() {
  loadingAnimationImg.style.display = "block";
}

function hideGifLoadingAnimation() {
  loadingAnimationImg.style.display = "none";
}

function hidePokemonImageForLoadingAnimation() {
  image.style.display = "none";
}

function showPokemonImageForLoadingAnimation() {
  image.style.display = "block";
}

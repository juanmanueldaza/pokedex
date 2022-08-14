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
  changePokemonPicture();
  changeName(pokeName);
}

async function changePokemonPicture() {
  let src = getImgSrc(pokeId);
  changeImgSrc(src);
}

function changeSprite(imgUrlPosition) {
  Object.values(imgUrlArray);
}

async function playPokemonCry() {
  new Audio(
    `https://play.pokemonshowdown.com/audio/cries/${pokeName}.mp3`
  ).play();
}

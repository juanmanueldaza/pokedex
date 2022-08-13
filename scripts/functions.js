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
  let src = getImgSrc(id);
  changeImgSrc(src);
  changeName(name);
  input.value = id;
}

async function changePokemon() {
  let src = getImgSrc(id);
  changeImgSrc(src);
  changeName(name);
  input.value = id;
}

async function changePokemonPicture() {
  let src = getImgSrc(id);
  changeImgSrc(src);
}

async function playPokemonCry() {
  new Audio(`https://play.pokemonshowdown.com/audio/cries/${name}.mp3`).play();
}

function getImgSrc(id) {
  let newImgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/${imgUrlArray[imgUrlPosition]}${id}.png`;
  return newImgSrc;
}

function changeImgSrc(src) {
  image.src = src;
}

function changeName(name) {
  nameTitle.innerHTML = name.charAt(0).toUpperCase() + name.slice(1);
}

function randomIntFromInterval() {
  return Math.floor(Math.random() * (898 - 1 + 1) + 1);
}

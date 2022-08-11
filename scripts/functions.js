async function getPokemon(nameOrId) {
  console.log(nameOrId);
  let url = `https://pokeapi.co/api/v2/pokemon/${nameOrId}`;
  console.log(url);
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`);
  console.log(response);
  if (response.status === 404) {
    image.src =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/25.png";
    nameTitle.innerHTML = "Pokemon no encontrado";
  }
  return await response.json();
}

async function changePokemon() {
  let src = getImgSrc(id);
  changeImgSrc(src);
  let nameee = await getPokemon(id);
  changeName(nameee.name);
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
  // min and max included
  return Math.floor(Math.random() * (898 - 1 + 1) + 1);
}

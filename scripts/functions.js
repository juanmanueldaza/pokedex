async function searchByName(name) {
  let search = `https://pokeapi.co/api/v2/pokemon/${name}`;
  let response = await fetch(search);
  if (response.status === 404) {
    image.src =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/25.png";
    nameTitle.innerHTML = "Pokemon no encontrado";
  }
  let data = await response.json();
  return data;
}

async function changePokemon() {
  let src = getImgSrc(id);
  changeImgSrc(src);
  let nameee = await searchByName(id);
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

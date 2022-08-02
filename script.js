// Guardamos el elemento input en la variable input
let input = document.getElementById("input");
// Guardamos el elemento button en la variable button
let button = document.getElementById("main_light_blue_button");

let image = document.getElementById("pokeImg");
let nameTitle = document.getElementById("pokeName");

let backButton = document.getElementById("d_pad_left");
let forwardButton = document.getElementById("d_pad_right");


let controls = document.getElementById("controls");
let data;
let id;
let name;



button.onclick = async () => {
  data = await searchByName(input.value.toLowerCase());
  let src = getImgSrc(data.id);
  id = data.id;
  name = data.name;
  changeImgSrc(src);
  changeName(data.name);
};

input.onkeydown = (e) => {
  if (e.keyCode === 13) {
    button.onclick();
  }
};

forwardButton.onclick = async () => {
  id += 1;
  let src = getImgSrc(id);
  changeImgSrc(src);
  let nameee = await searchByName(id)
  changeName(nameee.name);
  input.value = id;
}

backButton.onclick = async () => {
  id -= 1;
  let src = getImgSrc(id);
  changeImgSrc(src);
  let nameee = await searchByName(id)
  changeName(nameee.name);
  input.value = id;
}

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



function getImgSrc(id) {
  let newImgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  return newImgSrc;
}

function changeImgSrc(src) {
  image.src = src;
}

function changeName(name) {
  nameTitle.innerHTML = name.charAt(0).toUpperCase() + name.slice(1);
}

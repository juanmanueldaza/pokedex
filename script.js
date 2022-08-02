// Guardamos el elemento input en la variable input
let input = document.getElementById("input");
// Guardamos el elemento button en la variable button
let button = document.getElementById("main_light_blue_button");
let image = document.getElementById("pokeImg");
let nameTitle = document.getElementById("pokeName");
let backButton = document.getElementById("backward");
let forwardButton = document.getElementById("forward");
let controls = document.getElementById("controls");
let data;
let id;



button.onclick = async () => {
  console.log('click');
  data = await searchByName(input.value.toLowerCase());
  let src = getImgSrc(data.id);
  changeImgSrc(src);
  changeName(data.name);
};

input.onkeydown = (e) => {
  if (e.keyCode === 13) {
    button.onclick();
  }
};

// forwardButton.onclick = () =>{
//   let src = getImgSrc(data.id + 1);
//   changeImgSrc(src);
//   changeName(data.name);
// }

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

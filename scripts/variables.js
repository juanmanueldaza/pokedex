// Guardamos el elemento input en la variable input
let searchInput = document.getElementById("input");
// Guardamos el elemento button en la variable button
let searchButton = document.getElementById("main_light_blue_button");

let image = document.getElementById("pokeImg");
let nameTitle = document.getElementById("pokeName");

let forwardButton = document.getElementById("d_pad_right");
let backwardButton = document.getElementById("d_pad_left");

let upButton = document.getElementById("d_pad_up");
let downButton = document.getElementById("d_pad_down");

let cryButton = document.getElementById("_317981776");

let data;
let id;
let pokemonName;

let imgUrlArray = [
  "pokemon/",
  "pokemon/back/",
  "pokemon/shiny/",
  "pokemon/back/shiny/",
];
let imgUrlPosition = 0;

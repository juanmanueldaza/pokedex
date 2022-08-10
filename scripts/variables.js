// Guardamos el elemento input en la variable input
let searchInput = document.getElementById("input");
// Guardamos el elemento button en la variable button
let searchButton = document.getElementById("main_light_blue_button");

let image = document.getElementById("pokeImg");
let nameTitle = document.getElementById("pokeName");

let forwardButton = document.getElementById("d_pad_right");
let backwardButton = document.getElementById("d_pad_left");

//CAPTURAMOS BOTONES
let upButton = document.getElementById("d_pad_up");
let downButton = document.getElementById("d_pad_down");
let cryButton = document.getElementById("primary_screen_red_button");
let mainBigLed = document.getElementById("main_big_led");

let speaker = document.getElementById("speaker");


let data;
let id;
let pokemonName;
let randomPokemon;

let imgUrlArray = [
  "pokemon/",
  "pokemon/back/",
  "pokemon/shiny/",
  "pokemon/back/shiny/",
];
let imgUrlPosition = 0;

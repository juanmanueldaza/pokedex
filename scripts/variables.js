let searchInput = document.getElementById("input");
let searchButton = document.getElementById("primary_screen_under_left_button");
let refreshButton = document.getElementById("primary_screen_under_right_button");
let image = document.getElementById("pokeImg");
let loadingAnimationImg = document.getElementById("loadingGifAnimation");
let nameTitle = document.getElementById("pokeName");
let pokeGender = document.getElementById("pokeGender");
let pokeTypes = document.getElementById("pokeTypes");

let forwardButton = document.getElementById("d_pad_right");
let forwardButtonClickableArea = document.getElementById(
  "d_pad_right_clickable_area"
);
let backwardButton = document.getElementById("d_pad_left");
let backwardButtonClickableArea = document.getElementById(
    "d_pad_left_clickable_area"
  );
let upButton = document.getElementById("d_pad_up");
let upButtonClickableArea = document.getElementById(
    "d_pad_up_clickable_area"
  );
let downButton = document.getElementById("d_pad_down");
let downButtonClickableArea = document.getElementById(
    "d_pad_down_clickable_area"
  );
let dPad = document.getElementById("d_pad");
  
let cryButton = document.getElementById("primary_screen_red_button");
let mainBigLed = document.getElementById("main_big_led");
let speaker = document.getElementById("speaker");
let secondaryLeftArrow = document.getElementById("secondary_left_arrow");
let secondaryRightArrow = document.getElementById("secondary_right_arrow");

let dataButtonOne = document.getElementById("btn_celeste1");
let dataButtonTwo = document.getElementById("btn_celeste2");
let dataButtonThree = document.getElementById("btn_celeste3");
let dataButtonFour = document.getElementById("btn_celeste4");
let dataButtonFive = document.getElementById("btn_celeste5");
let dataButtonSix = document.getElementById("btn_celeste6");
let dataButtonSeven = document.getElementById("btn_celeste7");
let dataButtonEight = document.getElementById("btn_celeste8");
let dataButtonNine = document.getElementById("btn_celeste9");
let dataButtonTen = document.getElementById("btn_celeste10");
let dataButtons = document.querySelectorAll(".btns_celestes")

let pokemonStats;
let statsTitles = ["Name", "Height", "HP", "Attack", "Defense", "Speed"];
let statsPosition = 0;
let spritePosition = 0;
let availableSprites;
let spriteKey;
let spriteSrc;
let spriteAmount;
let data;
let pokeId;
let pokeName;
let poketypeOne;
let poketypeTwo;
let randomPokemon;

let muteButton = document.getElementById("btn_orange");
let muteIcon = document.getElementById("muteIcon");
let soundIcon = document.getElementById("soundIcon");
const volume = new Tone.Volume(0).toDestination();
const synth = new Tone.DuoSynth().connect(volume);

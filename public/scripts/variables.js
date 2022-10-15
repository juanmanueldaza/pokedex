document.addEventListener("DOMContentLoaded", function () {
  searchInput = document.getElementById("input");
  searchButton = document.getElementById("primary_screen_under_left_button");
  refreshButton = document.getElementById("primary_screen_under_right_button");
  helpButton = document.getElementById("main_light_blue_button");
  image = document.getElementById("pokeImg");
  loadingAnimationImg = document.getElementById("loadingGifAnimation");
  nameTitle = document.getElementById("pokeName");
  pokeGender = document.getElementById("pokeGender");
  pokeTypes = document.getElementById("pokeTypes");
  forwardButton = document.getElementById("d_pad_right");
  forwardButtonClickableArea = document.getElementById(
    "d_pad_right_clickable_area"
  );
  backwardButton = document.getElementById("d_pad_left");
  backwardButtonClickableArea = document.getElementById(
    "d_pad_left_clickable_area"
  );
  upButton = document.getElementById("d_pad_up");
  upButtonClickableArea = document.getElementById("d_pad_up_clickable_area");
  downButton = document.getElementById("d_pad_down");
  downButtonClickableArea = document.getElementById(
    "d_pad_down_clickable_area"
  );
  dPad = document.getElementById("d_pad");
  cryButton = document.getElementById("primary_screen_red_button");
  mainBigLed = document.getElementById("main_big_led");
  speaker = document.getElementById("speaker");
  secondaryLeftArrow = document.getElementById("secondary_left_arrow");
  secondaryRightArrow = document.getElementById("secondary_right_arrow");
  dataButtonOne = document.getElementById("btn_celeste1");
  dataButtonTwo = document.getElementById("btn_celeste2");
  dataButtonThree = document.getElementById("btn_celeste3");
  dataButtonFour = document.getElementById("btn_celeste4");
  dataButtonFive = document.getElementById("btn_celeste5");
  dataButtonSix = document.getElementById("btn_celeste6");
  dataButtonSeven = document.getElementById("btn_celeste7");
  dataButtonEight = document.getElementById("btn_celeste8");
  dataButtonNine = document.getElementById("btn_celeste9");
  dataButtonTen = document.getElementById("btn_celeste10");
  dataButtons = document.querySelectorAll(".btns_celestes");
  muteButton = document.getElementById("btn_orange");
  muteIcon = document.getElementById("muteIcon");
  soundIcon = document.getElementById("soundIcon");
  volume = new Tone.Volume(0).toDestination();
  synth = new Tone.DuoSynth().connect(volume);
  searchButton.onmousedown = async e => {
    if (helpMode) {
      return;
    } else {
      synth.triggerAttackRelease("C8", "60n", "+0.01");
      dataButtons.forEach(button => {
        button.classList.remove("pressed");
      });
      dataButtonOne.classList.add("pressed");
      await handleSearchButton(e);
    }
  };
  searchButton.onmouseover = e => {
    if (helpMode) {
      nameTitle.innerHTML = `<p>Search button</p>`;
    }
  };
  searchButton.onmouseout = e => {
    if (helpMode) {
      nameTitle.innerHTML = `<p>Hover over buttons for help</p>`;
    }
  };
  searchInput.onkeydown = e => {
    if (e.keyCode === 13) {
      searchButton.onmousedown();
    }
  };
  refreshButton.onclick = e => {
    if (helpMode) {
      return;
    } else {
      synth.triggerAttackRelease("A2", "60n", "+0.01");
      setTimeout(() => {
        window.location.reload();
      }, 3000);
      nameTitle.innerHTML = `<p>Reseting Pokédex</p>`;
      setInterval(() => {
        nameTitle.innerHTML += `.`;
      }, 500);
    }
  };
  refreshButton.onmouseover = e => {
    if (helpMode) {
      nameTitle.innerHTML = `<p>Reset button</p>`;
    }
  };
  refreshButton.onmouseout = e => {
    if (helpMode) {
      nameTitle.innerHTML = `<p>Hover over buttons for help</p>`;
    }
  };

  helpButton.onmousedown = e => {
    if (document.body.style.filter === "grayscale(0.5)") {
      document.body.style.filter = "grayscale(0)";
      helpMode = false;
      nameTitle.innerHTML = ``;
    } else {
      document.body.style.filter = "grayscale(0.5)";
      helpMode = true;
      nameTitle.innerHTML = `<p>Hover over buttons for help</p>`;
    }
  };
  helpButton.onmouseover = e => {
    if (document.body.style.filter === "grayscale(0.5)") {
      nameTitle.innerHTML = `<p>Push to exit help</p>`;
    }
  };
  helpButton.onmouseout = e => {
    if (document.body.style.filter === "grayscale(0.5)") {
      nameTitle.innerHTML = `<p>Hover over buttons for help</p>`;
    }
  };

  forwardButtonClickableArea.onmousedown = async () => {
    if (helpMode) {
      return;
    } else {
      synth.triggerAttackRelease("E8", "60n", "+0.01");
      dPad.classList.add("d_pad_pressed");
      handleForwardButton();
    }
  };
  forwardButtonClickableArea.onmouseover = e => {
    forwardButton.classList.add("clickable");
    forwardButtonClickableArea.style.cursor = "pointer";
    if (helpMode) {
      nameTitle.innerHTML = `<p>Next pokémon</p>`;
    }
  };
  forwardButtonClickableArea.onmouseout = e => {
    forwardButton.classList.remove("clickable");
    if (helpMode) {
      nameTitle.innerHTML = ``;
    }
  };
  forwardButtonClickableArea.onmouseup = e => {
    dPad.classList.remove("d_pad_pressed");
  };

  backwardButtonClickableArea.onmousedown = async () => {
    if (helpMode) {
      return;
    } else {
      synth.triggerAttackRelease("F8", "60n", "+0.01");
      dPad.classList.add("d_pad_pressed");
      handleBackwardButton();
    }
  };
  backwardButtonClickableArea.onmouseover = e => {
    backwardButton.classList.add("clickable");
    backwardButtonClickableArea.style.cursor = "pointer";
    if (helpMode) {
      nameTitle.innerHTML = `<p>Previous pokémon</p>`;
    }
  };
  backwardButtonClickableArea.onmouseout = e => {
    backwardButton.classList.remove("clickable");
    if (helpMode) {
      nameTitle.innerHTML = ``;
    }
  };
  backwardButtonClickableArea.onmouseup = e => {
    dPad.classList.remove("d_pad_pressed");
  };

  upButtonClickableArea.onmousedown = () => {
    if (helpMode) {
      return;
    } else {
      synth.triggerAttackRelease("G8", "60n", "+0.01");
      dPad.classList.add("d_pad_pressed");
      handleUpButton();
    }
  };
  upButtonClickableArea.onmouseover = e => {
    upButton.classList.add("clickable");
    upButtonClickableArea.style.cursor = "pointer";
    if (helpMode) {
      nameTitle.innerHTML = `<p>Next image</p>`;
    }
  };
  upButtonClickableArea.onmouseout = e => {
    upButton.classList.remove("clickable");
    if (helpMode) {
      nameTitle.innerHTML = ``;
    }
  };
  upButtonClickableArea.onmouseup = e => {
    dPad.classList.remove("d_pad_pressed");
  };

  downButtonClickableArea.onmousedown = () => {
    if (helpMode) {
      return;
    } else {
      synth.triggerAttackRelease("A8", "60n", "+0.01");
      dPad.classList.add("d_pad_pressed");
      handleDownButton();
    }
  };
  downButtonClickableArea.onmouseover = e => {
    downButton.classList.add("clickable");
    downButtonClickableArea.style.cursor = "pointer";
    if (helpMode) {
      nameTitle.innerHTML = `<p>Previous image</p>`;
    }
  };
  downButtonClickableArea.onmouseout = e => {
    downButton.classList.remove("clickable");
    if (helpMode) {
      nameTitle.innerHTML = ``;
    }
  };
  downButtonClickableArea.onmouseup = e => {
    dPad.classList.remove("d_pad_pressed");
  };

  cryButton.onmousedown = () => {
    if (helpMode) {
      return;
    } else {
      handleCryButton();
    }
  };
  cryButton.onmouseover = e => {
    if (helpMode) {
      nameTitle.innerHTML = `<p>Play pokémon cry</p>`;
    }
  };
  cryButton.onmouseout = e => {
    if (helpMode) {
      nameTitle.innerHTML = ``;
    }
  };

  speaker.onanimationend = () => {
    speaker.classList.remove("shake");
  };

  mainBigLed.onmousedown = async () => {
    if (helpMode) {
      return;
    } else {
      synth.triggerAttackRelease("A6", "60n", "+0.01");
      dataButtons.forEach(button => {
        button.classList.remove("pressed");
      });
      dataButtonOne.classList.add("pressed");
      await handleRandom();
    }
  };
  mainBigLed.onmouseover = e => {
    if (helpMode) {
      nameTitle.innerHTML = `<p>Random pokémon</p>`;
    }
  };
  mainBigLed.onmouseout = e => {
    if (helpMode) {
      nameTitle.innerHTML = ``;
    }
  };

  secondaryLeftArrow.onmousedown = () => {
    if (helpMode) {
      return;
    } else {
      synth.triggerAttackRelease("C7", "60n", "+0.01");
      handleSecondaryLeftArrow();
    }
  };
  secondaryLeftArrow.onmouseover = e => {
    if (helpMode) {
      nameTitle.innerHTML = `<p>Previous atribute</p>`;
    }
  };
  secondaryLeftArrow.onmouseout = e => {
    if (helpMode) {
      nameTitle.innerHTML = ``;
    }
  };

  secondaryRightArrow.onmousedown = () => {
    if (helpMode) {
      return;
    } else {
      synth.triggerAttackRelease("A7", "60n", "+0.01");
      handleSecondaryRightArrow();
    }
  };
  secondaryRightArrow.onmouseover = e => {
    if (helpMode) {
      nameTitle.innerHTML = `<p>Next atribute</p>`;
    }
  };
  secondaryRightArrow.onmouseout = e => {
    if (helpMode) {
      nameTitle.innerHTML = ``;
    }
  };

  muteButton.onmousedown = () => {
    if (helpMode) {
      return;
    } else {
      handleMuteButton();
    }
  };
  muteButton.onmouseover = e => {
    if (helpMode) {
      nameTitle.innerHTML = `<p>Mute / Unmute</p>`;
    }
  };
  muteButton.onmouseout = e => {
    if (helpMode) {
      nameTitle.innerHTML = ``;
    }
  };

  dataButtonOne.onmousedown = () => {
    if (helpMode) {
      return;
    } else {
      synth.triggerAttackRelease("C4", "500n", "+0.01");
      dataButtons.forEach(button => {
        button.classList.remove("pressed");
      });
      dataButtonOne.classList.add("pressed");
      if (data) {
        handleDataButtons(0);
      } else {
        searchForPokemonFirst();
      }
    }
  };
  dataButtonOne.onmouseover = e => {
    if (helpMode) {
      nameTitle.innerHTML = `<p>Data slot 1</p>`;
    }
  };
  dataButtonOne.onmouseout = e => {
    if (helpMode) {
      nameTitle.innerHTML = ``;
    }
  };

  dataButtonTwo.onmousedown = () => {
    if (helpMode) {
      return;
    } else {
      synth.triggerAttackRelease("C5", "500n", "+0.01");
      dataButtons.forEach(button => {
        button.classList.remove("pressed");
      });
      dataButtonTwo.classList.add("pressed");
      if (data) {
        handleDataButtons(1);
      } else {
        searchForPokemonFirst();
      }
    }
  };
  dataButtonTwo.onmouseover = e => {
    if (helpMode) {
      nameTitle.innerHTML = `<p>Data slot 2</p>`;
    }
  };
  dataButtonTwo.onmouseout = e => {
    if (helpMode) {
      nameTitle.innerHTML = ``;
    }
  };

  dataButtonThree.onmousedown = () => {
    if (helpMode) {
      return;
    } else {
      synth.triggerAttackRelease("C6", "500n", "+0.01");
      dataButtons.forEach(button => {
        button.classList.remove("pressed");
      });
      dataButtonThree.classList.add("pressed");
      if (data) {
        handleDataButtons(2);
      } else {
        searchForPokemonFirst();
      }
    }
  };
  dataButtonThree.onmouseover = e => {
    if (helpMode) {
      nameTitle.innerHTML = `<p>Data slot 3</p>`;
    }
  };
  dataButtonThree.onmouseout = e => {
    if (helpMode) {
      nameTitle.innerHTML = ``;
    }
  };

  dataButtonFour.onmousedown = () => {
    if (helpMode) {
      return;
    } else {
      synth.triggerAttackRelease("A4", "500n", "+0.01");
      dataButtons.forEach(button => {
        button.classList.remove("pressed");
      });
      dataButtonFour.classList.add("pressed");
      if (data) {
        handleDataButtons(3);
      } else {
        searchForPokemonFirst();
      }
    }
  };
  dataButtonFour.onmouseover = e => {
    if (helpMode) {
      nameTitle.innerHTML = `<p>Data slot 4</p>`;
    }
  };
  dataButtonFour.onmouseout = e => {
    if (helpMode) {
      nameTitle.innerHTML = ``;
    }
  };

  dataButtonFive.onmousedown = () => {
    if (helpMode) {
      return;
    } else {
      synth.triggerAttackRelease("A5", "500n", "+0.01");
      dataButtons.forEach(button => {
        button.classList.remove("pressed");
      });
      dataButtonFive.classList.add("pressed");
      if (data) {
        handleDataButtons(4);
      } else {
        searchForPokemonFirst();
      }
    }
  };
  dataButtonFive.onmouseover = e => {
    if (helpMode) {
      nameTitle.innerHTML = `<p>Data slot 5</p>`;
    }
  };
  dataButtonFive.onmouseout = e => {
    if (helpMode) {
      nameTitle.innerHTML = ``;
    }
  };

  dataButtonSix.onmousedown = () => {
    if (helpMode) {
      return;
    } else {
      synth.triggerAttackRelease("A6", "500n", "+0.01");
      dataButtons.forEach(button => {
        button.classList.remove("pressed");
      });
      dataButtonSix.classList.add("pressed");
      if (data) {
        handleDataButtons(5);
      } else {
        searchForPokemonFirst();
      }
    }
  };
  dataButtonSix.onmouseover = e => {
    if (helpMode) {
      nameTitle.innerHTML = `<p>Data slot 6</p>`;
    }
  };
  dataButtonSix.onmouseout = e => {
    if (helpMode) {
      nameTitle.innerHTML = ``;
    }
  };

  dataButtonSeven.onmousedown = () => {
    if (helpMode) {
      return;
    } else {
      synth.triggerAttackRelease("B4", "500n", "+0.01");
      dataButtons.forEach(button => {
        button.classList.remove("pressed");
      });
      dataButtonSeven.classList.add("pressed");
      if (data) {
        handleDataButtons(6);
      } else {
        searchForPokemonFirst();
      }
    }
  };
  dataButtonSeven.onmouseover = e => {
    if (helpMode) {
      nameTitle.innerHTML = `<p>Data slot 7</p>`;
    }
  };
  dataButtonSeven.onmouseout = e => {
    if (helpMode) {
      nameTitle.innerHTML = ``;
    }
  };

  dataButtonEight.onmousedown = () => {
    if (helpMode) {
      return;
    } else {
      synth.triggerAttackRelease("B5", "500n", "+0.01");
      dataButtons.forEach(button => {
        button.classList.remove("pressed");
      });
      dataButtonEight.classList.add("pressed");
      if (data) {
        handleDataButtons(7);
      } else {
        searchForPokemonFirst();
      }
    }
  };
  dataButtonEight.onmouseover = e => {
    if (helpMode) {
      nameTitle.innerHTML = `<p>Data slot 8</p>`;
    }
  };
  dataButtonEight.onmouseout = e => {
    if (helpMode) {
      nameTitle.innerHTML = ``;
    }
  };

  dataButtonNine.onmousedown = () => {
    if (helpMode) {
      return;
    } else {
      synth.triggerAttackRelease("B6", "500n", "+0.01");
      dataButtons.forEach(button => {
        button.classList.remove("pressed");
      });
      dataButtonNine.classList.add("pressed");
      if (data) {
        handleDataButtons(8);
      } else {
        searchForPokemonFirst();
      }
    }
  };
  dataButtonNine.onmouseover = e => {
    if (helpMode) {
      nameTitle.innerHTML = `<p>Data slot 9</p>`;
    }
  };
  dataButtonNine.onmouseout = e => {
    if (helpMode) {
      nameTitle.innerHTML = ``;
    }
  };

  dataButtonTen.onmousedown = () => {
    if (helpMode) {
      return;
    } else {
      synth.triggerAttackRelease("F4", "500n", "+0.01");
      dataButtons.forEach(button => {
        button.classList.remove("pressed");
      });
      dataButtonTen.classList.add("pressed");
      nameTitle.innerHTML = `<p>Pokédex by<br><br>@juanmanueldaza<br>@opablon<br>@l0urencocarlos</p>`;
      setTimeout(() => {
        dataButtonTen.classList.remove("pressed");
        synth.triggerAttackRelease("A7", "60n", "+0.01");
        nameTitle.innerHTML = ``;
      }, 2000);
    }
  };
  dataButtonTen.onmouseover = e => {
    if (helpMode) {
      nameTitle.innerHTML = `<p>Pokédex by<br><br>@juanmanueldaza<br>@opablon<br>@l0urencocarlos</p>`;
    }
  };
  dataButtonTen.onmouseout = e => {
    if (helpMode) {
      nameTitle.innerHTML = ``;
    }
  };

  window.onkeydown = e => {
    if (helpMode) {
      return;
    } else {
      if (e.keyCode === 37) {
        backwardButton.click();
      } else if (e.keyCode === 39) {
        forwardButton.onmousedown();
      } else if (e.keyCode === 38) {
        upButton.onmousedown();
      } else if (e.keyCode === 40) {
        downButton.onmousedown();
      }
    }
  };
  window.onmousewheel = e => {
    if (helpMode) {
      return;
    } else {
      if (e.wheelDelta > 0) {
        backwardButton.onmousedown();
      } else {
        forwardButton.onmousedown();
      }
    }
  };
});
let searchInput;
let searchButton;
let refreshButton;
let helpButton;
let image;
let loadingAnimationImg;
let nameTitle;
let pokeGender;
let pokeTypes;

let forwardButton;
let forwardButtonClickableArea;
let backwardButton;
let backwardButtonClickableArea;
let upButton;
let upButtonClickableArea;
let downButton;
let downButtonClickableArea;
let dPad;
let cryButton;
let mainBigLed;
let speaker;
let secondaryLeftArrow;
let secondaryRightArrow;

let dataButtonOne;
let dataButtonTwo;
let dataButtonThree;
let dataButtonFour;
let dataButtonFive;
let dataButtonSix;
let dataButtonSeven;
let dataButtonEight;
let dataButtonNine;
let dataButtonTen;
let dataButtons;

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

let muteButton;
let muteIcon;
let soundIcon;
let volume;
let synth;
let helpMode;

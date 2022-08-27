window.onload = async () => {
  searchButton.onmousedown = async (e) => {
    if (helpMode) {
      return;
    } else {
      synth.triggerAttackRelease("C8", "60n", "+0.01");
      dataButtons.forEach((button) => {
        button.classList.remove("pressed");
      });
      dataButtonOne.classList.add("pressed");
      await handleSearchButton(e);
    }
  };
  searchButton.onmouseover = (e) => {
    if (helpMode) {
      nameTitle.innerHTML = `<p>Search button</p>`;
    }
  };
  searchButton.onmouseout = (e) => {
    if (helpMode) {
      nameTitle.innerHTML = `<p>Hover over buttons for help</p>`;
    }
  };
  searchInput.onkeydown = (e) => {
    if (e.keyCode === 13) {
      searchButton.onmousedown();
    }
  };
  refreshButton.onclick = (e) => {
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
  refreshButton.onmouseover = (e) => {
    if (helpMode) {
      nameTitle.innerHTML = `<p>Reset button</p>`;
    }
  };
  refreshButton.onmouseout = (e) => {
    if (helpMode) {
      nameTitle.innerHTML = `<p>Hover over buttons for help</p>`;
    }
  };

  helpButton.onmousedown = (e) => {
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
  helpButton.onmouseover = (e) => {
    if (document.body.style.filter === "grayscale(0.5)") {
      nameTitle.innerHTML = `<p>Push to exit help</p>`;
    }
  };
  helpButton.onmouseout = (e) => {
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
  forwardButtonClickableArea.onmouseover = (e) => {
    forwardButton.classList.add("clickable");
    forwardButtonClickableArea.style.cursor = "pointer";
    if (helpMode) {
      nameTitle.innerHTML = `<p>Next pokémon</p>`;
    }
  };
  forwardButtonClickableArea.onmouseout = (e) => {
    forwardButton.classList.remove("clickable");
    if (helpMode) {
      nameTitle.innerHTML = ``;
    }
  };
  forwardButtonClickableArea.onmouseup = (e) => {
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
  backwardButtonClickableArea.onmouseover = (e) => {
    backwardButton.classList.add("clickable");
    backwardButtonClickableArea.style.cursor = "pointer";
    if (helpMode) {
      nameTitle.innerHTML = `<p>Previous pokémon</p>`;
    }
  };
  backwardButtonClickableArea.onmouseout = (e) => {
    backwardButton.classList.remove("clickable");
    if (helpMode) {
      nameTitle.innerHTML = ``;
    }
  };
  backwardButtonClickableArea.onmouseup = (e) => {
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
  upButtonClickableArea.onmouseover = (e) => {
    upButton.classList.add("clickable");
    upButtonClickableArea.style.cursor = "pointer";
    if (helpMode) {
      nameTitle.innerHTML = `<p>Next image</p>`;
    }
  };
  upButtonClickableArea.onmouseout = (e) => {
    upButton.classList.remove("clickable");
    if (helpMode) {
      nameTitle.innerHTML = ``;
    }
  };
  upButtonClickableArea.onmouseup = (e) => {
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
  downButtonClickableArea.onmouseover = (e) => {
    downButton.classList.add("clickable");
    downButtonClickableArea.style.cursor = "pointer";
    if (helpMode) {
      nameTitle.innerHTML = `<p>Previous image</p>`;
    }
  };
  downButtonClickableArea.onmouseout = (e) => {
    downButton.classList.remove("clickable");
    if (helpMode) {
      nameTitle.innerHTML = ``;
    }
  };
  downButtonClickableArea.onmouseup = (e) => {
    dPad.classList.remove("d_pad_pressed");
  };

  cryButton.onmousedown = () => {
    if (helpMode) {
      return;
    } else {
      handleCryButton();
    }
  };
  cryButton.onmouseover = (e) => {
    if (helpMode) {
      nameTitle.innerHTML = `<p>Play pokémon cry</p>`;
    }
  };
  cryButton.onmouseout = (e) => {
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
      dataButtons.forEach((button) => {
        button.classList.remove("pressed");
      });
      dataButtonOne.classList.add("pressed");
      await handleRandom();
    }
  };
  mainBigLed.onmouseover = (e) => {
    if (helpMode) {
      nameTitle.innerHTML = `<p>Random pokémon</p>`;
    }
  };
  mainBigLed.onmouseout = (e) => {
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
  secondaryLeftArrow.onmouseover = (e) => {
    if (helpMode) {
      nameTitle.innerHTML = `<p>Previous atribute</p>`;
    }
  };
  secondaryLeftArrow.onmouseout = (e) => {
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
  secondaryRightArrow.onmouseover = (e) => {
    if (helpMode) {
      nameTitle.innerHTML = `<p>Next atribute</p>`;
    }
  };
  secondaryRightArrow.onmouseout = (e) => {
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
  muteButton.onmouseover = (e) => {
    if (helpMode) {
      nameTitle.innerHTML = `<p>Mute / Unmute</p>`;
    }
  };
  muteButton.onmouseout = (e) => {
    if (helpMode) {
      nameTitle.innerHTML = ``;
    }
  };

  dataButtonOne.onmousedown = () => {
    if (helpMode) {
      return;
    } else {
      synth.triggerAttackRelease("C4", "500n", "+0.01");
      dataButtons.forEach((button) => {
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
  dataButtonOne.onmouseover = (e) => {
    if (helpMode) {
      nameTitle.innerHTML = `<p>Data slot 1</p>`;
    }
  };
  dataButtonOne.onmouseout = (e) => {
    if (helpMode) {
      nameTitle.innerHTML = ``;
    }
  };

  dataButtonTwo.onmousedown = () => {
    if (helpMode) {
      return;
    } else {
      synth.triggerAttackRelease("C5", "500n", "+0.01");
      dataButtons.forEach((button) => {
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
  dataButtonTwo.onmouseover = (e) => {
    if (helpMode) {
      nameTitle.innerHTML = `<p>Data slot 2</p>`;
    }
  };
  dataButtonTwo.onmouseout = (e) => {
    if (helpMode) {
      nameTitle.innerHTML = ``;
    }
  };

  dataButtonThree.onmousedown = () => {
    if (helpMode) {
      return;
    } else {
      synth.triggerAttackRelease("C6", "500n", "+0.01");
      dataButtons.forEach((button) => {
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
  dataButtonThree.onmouseover = (e) => {
    if (helpMode) {
      nameTitle.innerHTML = `<p>Data slot 3</p>`;
    }
  };
  dataButtonThree.onmouseout = (e) => {
    if (helpMode) {
      nameTitle.innerHTML = ``;
    }
  };

  dataButtonFour.onmousedown = () => {
    if (helpMode) {
      return;
    } else {
      synth.triggerAttackRelease("A4", "500n", "+0.01");
      dataButtons.forEach((button) => {
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
  dataButtonFour.onmouseover = (e) => {
    if (helpMode) {
      nameTitle.innerHTML = `<p>Data slot 4</p>`;
    }
  };
  dataButtonFour.onmouseout = (e) => {
    if (helpMode) {
      nameTitle.innerHTML = ``;
    }
  };

  dataButtonFive.onmousedown = () => {
    if (helpMode) {
      return;
    } else {
      synth.triggerAttackRelease("A5", "500n", "+0.01");
      dataButtons.forEach((button) => {
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
  dataButtonFive.onmouseover = (e) => {
    if (helpMode) {
      nameTitle.innerHTML = `<p>Data slot 5</p>`;
    }
  };
  dataButtonFive.onmouseout = (e) => {
    if (helpMode) {
      nameTitle.innerHTML = ``;
    }
  };

  dataButtonSix.onmousedown = () => {
    if (helpMode) {
      return;
    } else {
      synth.triggerAttackRelease("A6", "500n", "+0.01");
      dataButtons.forEach((button) => {
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
  dataButtonSix.onmouseover = (e) => {
    if (helpMode) {
      nameTitle.innerHTML = `<p>Data slot 6</p>`;
    }
  };
  dataButtonSix.onmouseout = (e) => {
    if (helpMode) {
      nameTitle.innerHTML = ``;
    }
  };

  dataButtonSeven.onmousedown = () => {
    if (helpMode) {
      return;
    } else {
      synth.triggerAttackRelease("B4", "500n", "+0.01");
      dataButtons.forEach((button) => {
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
  dataButtonSeven.onmouseover = (e) => {
    if (helpMode) {
      nameTitle.innerHTML = `<p>Data slot 7</p>`;
    }
  };
  dataButtonSeven.onmouseout = (e) => {
    if (helpMode) {
      nameTitle.innerHTML = ``;
    }
  };

  dataButtonEight.onmousedown = () => {
    if (helpMode) {
      return;
    } else {
      synth.triggerAttackRelease("B5", "500n", "+0.01");
      dataButtons.forEach((button) => {
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
  dataButtonEight.onmouseover = (e) => {
    if (helpMode) {
      nameTitle.innerHTML = `<p>Data slot 8</p>`;
    }
  };
  dataButtonEight.onmouseout = (e) => {
    if (helpMode) {
      nameTitle.innerHTML = ``;
    }
  };

  dataButtonNine.onmousedown = () => {
    if (helpMode) {
      return;
    } else {
      synth.triggerAttackRelease("B6", "500n", "+0.01");
      dataButtons.forEach((button) => {
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
  dataButtonNine.onmouseover = (e) => {
    if (helpMode) {
      nameTitle.innerHTML = `<p>Data slot 9</p>`;
    }
  };
  dataButtonNine.onmouseout = (e) => {
    if (helpMode) {
      nameTitle.innerHTML = ``;
    }
  };

  dataButtonTen.onmousedown = () => {
    if (helpMode) {
      return;
    } else {
      synth.triggerAttackRelease("F4", "500n", "+0.01");
      dataButtons.forEach((button) => {
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
  dataButtonTen.onmouseover = (e) => {
    if (helpMode) {
      nameTitle.innerHTML = `<p>Pokédex by<br><br>@juanmanueldaza<br>@opablon<br>@l0urencocarlos</p>`;
    }
  };
  dataButtonTen.onmouseout = (e) => {
    if (helpMode) {
      nameTitle.innerHTML = ``;
    }
  };

  window.onkeydown = (e) => {
    if (helpMode) {
      return;
    } else {
      if (e.keyCode === 37) {
        backwardButton.onmousedown();
      } else if (e.keyCode === 39) {
        forwardButton.onmousedown();
      } else if (e.keyCode === 38) {
        upButton.onmousedown();
      } else if (e.keyCode === 40) {
        downButton.onmousedown();
      }
    }
  };
  window.onmousewheel = (e) => {
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
};

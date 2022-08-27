window.onload = async () => {
  searchButton.onmousedown = async (e) => {
    synth.triggerAttackRelease("C8", "60n", "+0.01");
    dataButtons.forEach((button) => { 
      button.classList.remove("pressed");
    });
    dataButtonOne.classList.add('pressed');
    await handleSearchButton(e);
  };
  searchButton.onmouseover = (e) => {
    if (document.body.style.filter === "grayscale(0.5)") {
      nameTitle.innerHTML = `<p>Search button</p>`;
    }
  }
  searchButton.onmouseout = (e) => {
    if (document.body.style.filter === "grayscale(0.5)") {
      nameTitle.innerHTML = `<p>Hover over buttons for help</p>`;
    }
  }
  searchInput.onkeydown = (e) => {
    if (e.keyCode === 13) {
      searchButton.onmousedown();
    }
  };
  refreshButton.onclick = (e) => {
    synth.triggerAttackRelease("A2", "60n", "+0.01");
    setTimeout(() => {
      window.location.reload();
    }, 3000);
    nameTitle.innerHTML = `<p>Reseting Pokédex</p>`;
    setInterval(() => {
          nameTitle.innerHTML += `.`;
    }, 500);
  }

  helpButton.onmousedown = (e) => {
    if (document.body.style.filter === "grayscale(0.5)") {
      document.body.style.filter = "grayscale(0)";
      nameTitle.innerHTML = ``
    } else {
      document.body.style.filter = "grayscale(0.5)";
      nameTitle.innerHTML = `<p>Hover over buttons for help</p>`;
    }
  }
  helpButton.onmouseover = (e) => {
    if (document.body.style.filter === "grayscale(0.5)") {
      nameTitle.innerHTML = `<p>Push to exit help</p>`
    }
  }
  helpButton.onmouseout = (e) => {
    if (document.body.style.filter === "grayscale(0.5)") {
      nameTitle.innerHTML = `<p>Hover over buttons for help</p>`;
    }
  }
  
  forwardButtonClickableArea.onmousedown = async () => {
    synth.triggerAttackRelease("E8", "60n", "+0.01");
    dPad.classList.add("d_pad_pressed");
    handleForwardButton();
  };
  forwardButtonClickableArea.onmouseover = (e) => {
    forwardButton.classList.add("clickable");
    forwardButtonClickableArea.style.cursor = "pointer";
  }
  forwardButtonClickableArea.onmouseout = (e) => {
    forwardButton.classList.remove("clickable");
  }
  forwardButtonClickableArea.onmouseup = (e) => {
    dPad.classList.remove("d_pad_pressed");
  }

  backwardButtonClickableArea.onmousedown = async () => {
    synth.triggerAttackRelease("F8", "60n", "+0.01");
    dPad.classList.add("d_pad_pressed");
    handleBackwardButton();
  };
  backwardButtonClickableArea.onmouseover = (e) => {
    backwardButton.classList.add("clickable");
    backwardButtonClickableArea.style.cursor = "pointer";
  }
  backwardButtonClickableArea.onmouseout = (e) => {
    backwardButton.classList.remove("clickable");
  };
  backwardButtonClickableArea.onmouseup = (e) => {
    dPad.classList.remove("d_pad_pressed");
  };

  upButtonClickableArea.onmousedown = () => {
    synth.triggerAttackRelease("G8", "60n", "+0.01");
    dPad.classList.add("d_pad_pressed");
    handleUpButton();
  };
  upButtonClickableArea.onmouseover = (e) => {
    upButton.classList.add("clickable");
    upButtonClickableArea.style.cursor = "pointer";
  }
  upButtonClickableArea.onmouseout = (e) => {
    upButton.classList.remove("clickable");
  };
  upButtonClickableArea.onmouseup = (e) => {
    dPad.classList.remove("d_pad_pressed");
  };

  downButtonClickableArea.onmousedown = () => {
    synth.triggerAttackRelease("A8", "60n", "+0.01");
    dPad.classList.add("d_pad_pressed");
    handleDownButton();
  };
  downButtonClickableArea.onmouseover = (e) => {
    downButton.classList.add("clickable");
    downButtonClickableArea.style.cursor = "pointer";
  }
  downButtonClickableArea.onmouseout = (e) => {
    downButton.classList.remove("clickable");
  };
  downButtonClickableArea.onmouseup = (e) => {
    dPad.classList.remove("d_pad_pressed");
  };

  cryButton.onmousedown = () => {
    handleCryButton();
  };
  speaker.onanimationend = () => {
    speaker.classList.remove("shake");
  };
  mainBigLed.onmousedown = async () => {
    synth.triggerAttackRelease("A6", "60n", "+0.01");
    dataButtons.forEach((button) => { 
      button.classList.remove("pressed");
    });
    dataButtonOne.classList.add('pressed');
    await handleRandom();
  };
  secondaryLeftArrow.onmousedown = () => {
    synth.triggerAttackRelease("C7", "60n", "+0.01");
    handleSecondaryLeftArrow();
  };
  secondaryRightArrow.onmousedown = () => {
    synth.triggerAttackRelease("A7", "60n", "+0.01");
    handleSecondaryRightArrow();
  };

  muteButton.onmousedown = () => {
    handleMuteButton();
  };

  dataButtonOne.onmousedown = () => {
    synth.triggerAttackRelease("C4", "500n", "+0.01");
    dataButtons.forEach((button) => { 
      button.classList.remove("pressed");
    });
    dataButtonOne.classList.add('pressed');
    if (data) {
      handleDataButtons(0);
    } else {
      searchForPokemonFirst();
    }
  };
  dataButtonTwo.onmousedown = () => {
    synth.triggerAttackRelease("C5", "500n", "+0.01");
    dataButtons.forEach((button) => { 
      button.classList.remove("pressed");
    });
    dataButtonTwo.classList.add('pressed');
    if (data) {
      handleDataButtons(1);
    } else {
      searchForPokemonFirst();
    }
  };
  dataButtonThree.onmousedown = () => {
    synth.triggerAttackRelease("C6", "500n", "+0.01");
    dataButtons.forEach((button) => { 
      button.classList.remove("pressed");
    });
    dataButtonThree.classList.add('pressed');
    if (data) {
      handleDataButtons(2);
    } else {
      searchForPokemonFirst();
    }
  };
  dataButtonFour.onmousedown = () => {
    synth.triggerAttackRelease("A4", "500n", "+0.01");
    dataButtons.forEach((button) => { 
      button.classList.remove("pressed");
    });
    dataButtonFour.classList.add('pressed');
    if (data) {
      handleDataButtons(3);
    } else {
      searchForPokemonFirst();
    }
  };
  dataButtonFive.onmousedown = () => {
    synth.triggerAttackRelease("A5", "500n", "+0.01");
    dataButtons.forEach((button) => { 
      button.classList.remove("pressed");
    });
    dataButtonFive.classList.add('pressed');
    if (data) {
      handleDataButtons(4);
    } else {
      searchForPokemonFirst();
    }
  };
  dataButtonSix.onmousedown = () => {
    synth.triggerAttackRelease("A6", "500n", "+0.01");
    dataButtons.forEach((button) => { 
      button.classList.remove("pressed");
    });
    dataButtonSix.classList.add('pressed');
    if (data) {
      handleDataButtons(5);
    } else {
      searchForPokemonFirst();
    }
  };
  dataButtonSeven.onmousedown = () => {
    synth.triggerAttackRelease("B4", "500n", "+0.01");
    dataButtons.forEach((button) => { 
      button.classList.remove("pressed");
    });
    dataButtonSeven.classList.add('pressed');
    if (data) {
      handleDataButtons(6);
    } else {
      searchForPokemonFirst();
    }
  };
  dataButtonEight.onmousedown = () => {
    synth.triggerAttackRelease("B5", "500n", "+0.01");
    dataButtons.forEach((button) => { 
      button.classList.remove("pressed");
    });
    dataButtonEight.classList.add('pressed');
    if (data) {
      handleDataButtons(7);
    } else {
      searchForPokemonFirst();
    }
  };
  dataButtonNine.onmousedown = () => {
    synth.triggerAttackRelease("B6", "500n", "+0.01");
    dataButtons.forEach((button) => { 
      button.classList.remove("pressed");
    });
    dataButtonNine.classList.add('pressed');
    if (data) {
      handleDataButtons(8);
    } else {
      searchForPokemonFirst();
    }
  };
  dataButtonTen.onmousedown = () => {
    synth.triggerAttackRelease("F4", "500n", "+0.01");
    dataButtons.forEach((button) => { 
      button.classList.remove("pressed");
    });
    dataButtonTen.classList.add('pressed');
    nameTitle.innerHTML = `<p>Pokédex by<br><br>@juanmanueldaza<br>@opablon<br>@l0urencocarlos</p>`;
    setTimeout(() => {
      dataButtonTen.classList.remove('pressed');
      synth.triggerAttackRelease("A7", "60n", "+0.01");
      nameTitle.innerHTML = ``;
    }, 2000);
  }

  window.onkeydown = (e) => {
    if (e.keyCode === 37) {
      backwardButton.onmousedown();
    } else if (e.keyCode === 39) {
      forwardButton.onmousedown();
    } else if (e.keyCode === 38) {
      upButton.onmousedown();
    } else if (e.keyCode === 40) {
      downButton.onmousedown();
    }
  };
  window.onmousewheel = (e) => {
    if (e.wheelDelta > 0) {
      backwardButton.onmousedown();
    } else {
      forwardButton.onmousedown();
    }
  };
};

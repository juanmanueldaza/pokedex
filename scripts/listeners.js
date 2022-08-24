window.onload = async () => {
  searchButton.onmousedown = async (e) => {
    synth.triggerAttackRelease("C8", "60n", "+0.01");
    await handleSearchButton(e);
  };
  searchInput.onkeydown = (e) => {
    if (e.keyCode === 13) {
      searchButton.onmousedown();
    }
  };
  forwardButton.onmousedown = async () => {
    synth.triggerAttackRelease("E8", "60n", "+0.01");
    handleForwardButton();
  };
  backwardButton.onmousedown = async () => {
    synth.triggerAttackRelease("F8", "60n", "+0.01");
    handleBackwardButton();
  };

  upButton.onmousedown = () => {
    synth.triggerAttackRelease("G8", "60n", "+0.01");
    handleUpButton();
  };
  downButton.onmousedown = () => {
    synth.triggerAttackRelease("A8", "60n", "+0.01");
    handleDownButton();
  };

  cryButton.onmousedown = () => {
    handleCryButton();
  };
  speaker.onanimationend = () => {
    speaker.classList.remove("shake");
  };
  mainBigLed.onmousedown = async () => {
    synth.triggerAttackRelease("B8", "60n", "+0.01");
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
    synth.triggerAttackRelease("C8", "60n", "+0.01");
    if (data) {
      handleDataButtons(0);
    } else {
      nameTitle.innerHTML = `<p>Search for a Pokémon first</p>`;
    }
  };
  dataButtonTwo.onmousedown = () => {
    synth.triggerAttackRelease("C8", "60n", "+0.01");
    if (data) {
      handleDataButtons(1);
    } else {
      nameTitle.innerHTML = `<p>Search for a Pokémon first</p>`;
    }
  };
  dataButtonThree.onmousedown = () => {
    synth.triggerAttackRelease("C8", "60n", "+0.01");
    if (data) {
      handleDataButtons(2);
    } else {
      nameTitle.innerHTML = `<p>Search for a Pokémon first</p>`;
    }
  };
  dataButtonFour.onmousedown = () => {
    synth.triggerAttackRelease("C8", "60n", "+0.01");
    if (data) {
      handleDataButtons(3);
    } else {
      nameTitle.innerHTML = `<p>Search for a Pokémon first</p>`;
    }
  };
  dataButtonFive.onmousedown = () => {
    synth.triggerAttackRelease("C8", "60n", "+0.01");
    if (data) {
      handleDataButtons(4);
    } else {
      nameTitle.innerHTML = `<p>Search for a Pokémon first</p>`;
    }
  };
  dataButtonSix.onmousedown = () => {
    synth.triggerAttackRelease("C8", "60n", "+0.01");
    if (data) {
      handleDataButtons(5);
    } else {
      nameTitle.innerHTML = `<p>Search for a Pokémon first</p>`;
    }
  };
  dataButtonSeven.onmousedown = () => {
    synth.triggerAttackRelease("C8", "60n", "+0.01");
    if (data) {
      handleDataButtons(6);
    } else {
      nameTitle.innerHTML = `<p>Search for a Pokémon first</p>`;
    }
  };
  dataButtonEight.onmousedown = () => {
    synth.triggerAttackRelease("C8", "60n", "+0.01");
    if (data) {
      handleDataButtons(7);
    } else {
      nameTitle.innerHTML = `<p>Search for a Pokémon first</p>`;
    }
  };
  dataButtonNine.onmousedown = () => {
    synth.triggerAttackRelease("C8", "60n", "+0.01");
    if (data) {
      handleDataButtons(8);
    } else {
      nameTitle.innerHTML = `<p>Search for a Pokémon first</p>`;
    }
  };
  dataButtonTen.onmousedown = () => {
    synth.triggerAttackRelease("C8", "60n", "+0.01");
    nameTitle.innerHTML = `Pokédex`;
  };

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

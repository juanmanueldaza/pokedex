window.onload = async () => {
  searchButton.onmousedown = async (e) => {
    synth.triggerAttackRelease("C8", "60n", "+0.01");
    await handleSearchButton(e);
  };
  searchInput.onkeydown = (e) => {
    if (e.keyCode === 13) {
      synth.triggerAttackRelease("D8", "60n", "+0.01");
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

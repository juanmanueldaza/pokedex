window.onload = async () => {
  searchButton.onmousedown = async (e) => {
    await handleSearchButton(e);
  };
  searchInput.onkeydown = (e) => {
    if (e.keyCode === 13) {
      searchButton.onmousedown();
    }
  };
  forwardButton.onmousedown = async () => {
    handleForwardButton();
  };
  backwardButton.onmousedown = async () => {
    handleBackwardButton();
  };

  upButton.onmousedown = () => {
    handleUpButton();
  };
  downButton.onmousedown = () => {
    handleDownButton();
  };

  cryButton.onmousedown = () => {
    handleCryButton();
  };
  speaker.onanimationend = () => {
    speaker.classList.remove("shake");
  };
  mainBigLed.onmousedown = async () => {
    await handleRandom();
  };
  secondaryLeftArrow.onmousedown = () => {
    handleSecondaryLeftArrow();
  };
  secondaryRightArrow.onmousedown = () => {
    handleSecondaryRightArrow();
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

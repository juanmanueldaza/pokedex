window.onload = async () => {
  searchButton.onclick = async (e) => {
    await handleSearchButton(e);
  };
  searchInput.onkeydown = (e) => {
    if (e.keyCode === 13) {
      searchButton.onclick();
    }
  };
  forwardButton.onclick = async () => {
    handleForwardButton();
  };
  backwardButton.onclick = async () => {
    handleBackwardButton();
  };

  upButton.onclick = () => {
    handleUpButton();
  };
  downButton.onclick = () => {
    handleDownButton();
  };

  cryButton.onclick = () => {
    handleCryButton();
  };
  speaker.onanimationend = () => {
    speaker.classList.remove("shake");
  };
  mainBigLed.onclick = async () => {
    await handleRandom();
  };
  window.onkeydown = (e) => {
    if (e.keyCode === 37) {
      backwardButton.onclick();
    } else if (e.keyCode === 39) {
      forwardButton.onclick();
    } else if (e.keyCode === 38) {
      upButton.onclick();
    } else if (e.keyCode === 40) {
      downButton.onclick();
    }
  };
  window.onmousewheel = (e) => {
    if (e.wheelDelta > 0) {
      backwardButton.onclick();
    } else {
      forwardButton.onclick();
    }
  };
};

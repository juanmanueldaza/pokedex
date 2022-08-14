//////////////////////////////////////////////// SEARCH
searchButton.onclick = async (e) => {
  await handleSearchButton(e);
};
searchInput.onkeydown = (e) => {
  if (e.keyCode === 13) {
    searchButton.onclick();
  }
};
//////////////////////////////////////////////// FORWARD
forwardButton.onclick = async () => {
  handleForwardButton();
};
//////////////////////////////////////////////// BACKWARD
backwardButton.onclick = async () => {
  handleBackwardButton();
};

//////////////////////////////////////////////// UP
upButton.onclick = () => {
  handleUpButton();
};

//////////////////////////////////////////////// DOWN
downButton.onclick = () => {
  handleDownButton();
};

//////////////////////////////////////////////// CRY
cryButton.onclick = () => {
  handleCryButton();
};

//////////////////////////////////////////////// SPEAKER ANIMATION
speaker.onanimationend = () => {
  speaker.classList.remove("shake");
};

//////////////////////////////////////////////// RANDOM POKEMON
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

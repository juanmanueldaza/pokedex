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
forwardButton.onclick = async (e) => {
  handleBackwardButton(e);
};
//////////////////////////////////////////////// BACKWARD
backwardButton.onclick = async (e) => {
  handleForwardButton(e);
};

//////////////////////////////////////////////// UP
upButton.onclick = (e) => {
  handleUpButton(e);
};

//////////////////////////////////////////////// DOWN
downButton.onclick = (e) => {
  handleDownButton(e);
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
  await handleMainBigLed();
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

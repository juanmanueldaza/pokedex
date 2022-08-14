function getImgSrc(id) {
  let newImgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/${imgUrlArray[imgUrlPosition]}${id}.png`;
  return newImgSrc;
}

function changeImgSrc(src) {
  image.src = src;
}

function changeName(name) {
  nameTitle.innerHTML = name.charAt(0).toUpperCase() + name.slice(1);
}

function randomIntFromInterval() {
  return Math.floor(Math.random() * (898 - 1 + 1) + 1);
}

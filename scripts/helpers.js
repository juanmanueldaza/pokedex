function getImgSrc(id) {
  let newImgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/${imgUrlArray[imgUrlPosition]}${id}.png`;
  return newImgSrc;
}

function getImgSrcFromData(data) {
  let newImgSrc = data.sprites.front_default;
  return newImgSrc;
}

function getAvalaibleSprites(data) {
  let spriteKeys = [];
  Object.keys(data.sprites).forEach((key) => {
    if (key === "other" || key === "versions") {
      return;
    } else if (data.sprites[key] !== null) {
      spriteKeys.push(key);
    }
  });
  return orderSpriteKeys(spriteKeys);
}

function orderSpriteKeys(spriteKeys) {
  let orderedSpriteKeys = [];
  spriteKeys.map((key) => {
    if (key !== "front_default") {
      orderedSpriteKeys.push(key);
    } else {
      orderedSpriteKeys.unshift(key);
    }
  });
  return orderedSpriteKeys;
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

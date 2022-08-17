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
  if (spriteKey.includes ("shiny")) {
    let shiny = "(shiny)"
    nameTitle.innerHTML = name.charAt(0).toUpperCase() + name.slice(1) + "<br>" + shiny.fontsize(4);
  } else {
    nameTitle.innerHTML = name.charAt(0).toUpperCase() + name.slice(1);
  }
}

function changeGender(spriteKey) {
  if (spriteKey.includes ("female")) {
    pokeGender.innerHTML = "female";
  } else {
    pokeGender.innerHTML = "male";
  }
}

function changeTypes(typesArray) {
  if (typesArray.length > 1) {
    pokeTypes.innerHTML = typesArray[0].type.name + "<br>" + typesArray[1].type.name;
  } else {
    pokeTypes.innerHTML = typesArray[0].type.name;
  }
}

function randomIntFromInterval() {
  return Math.floor(Math.random() * (898 - 1 + 1) + 1);
}

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

function getStats(data) {
  let statsKeys = [];
  statsKeys.push(data.name, data.height, data.stats[0].base_stat, data.stats[1].base_stat, data.stats[2].base_stat, data.stats[5].base_stat)
  
  return(statsKeys);
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
  statsPosition = 0;
}

function changeGender(spriteKey) {
  if (spriteKey.includes ("female")) {
    pokeGender.innerHTML = `<svg width="21" height="28" viewBox="-10 0 25 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="female" transform="translate(-10, 0)">
    <path id="Subtract" fill-rule="evenodd" clip-rule="evenodd" d="M11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22ZM11 18.3333C15.0501 18.3333 18.3333 15.0501 18.3333 11C18.3333 6.94991 15.0501 3.66667 11 3.66667C6.94991 3.66667 3.66667 6.94991 3.66667 11C3.66667 15.0501 6.94991 18.3333 11 18.3333Z" fill="#E09BD1"/>
    <rect id="Rectangle 2" x="9" y="21" width="4" height="10" fill="#E09BD1"/>
    <rect id="Rectangle 3" x="4" y="28" width="4" height="14" transform="rotate(-90 4 28)" fill="#E09BD1"/>
    </g>
    </svg>`;
  } else {
    pokeGender.innerHTML = `<svg width="29" height="30" viewBox="0 0 38 38" fill="#229BF2" xmlns="http://www.w3.org/2000/svg">
    <g id="male">
    <path id="Subtract" fill-rule="evenodd" clip-rule="evenodd" d="M11.5 35.1825C17.8513 35.1825 23 30.0338 23 23.6825C23 17.3312 17.8513 12.1825 11.5 12.1825C5.14873 12.1825 0 17.3312 0 23.6825C0 30.0338 5.14873 35.1825 11.5 35.1825ZM11.5 31.3492C15.7342 31.3492 19.1667 27.9167 19.1667 23.6825C19.1667 19.4483 15.7342 16.0158 11.5 16.0158C7.26582 16.0158 3.83333 19.4483 3.83333 23.6825C3.83333 27.9167 7.26582 31.3492 11.5 31.3492Z"/>
    <path id="Arrow 1 (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M19.0001 5.18253L28.0001 5.18253C29.5 5.18252 30 5.68252 30 7.18252V16.1825C30 16.7348 29.0523 17.1825 28.5 17.1825C27.9477 17.1825 27 16.7348 27 16.1825L27 10.6825L19.5 18.1825L17 15.6825L25 8.18254L19 8.18254C18.4478 8.18254 18 7.23478 18 6.6825C18 6.13021 18.4478 5.18253 19.0001 5.18253Z"/>
    </g>
    </svg>`;
  }
}

function changeTypes(typesArray) {
  if (typesArray.length > 1) {
    poketypeOne = typesArray[0].type.name;
    poketypeTwo = typesArray[1].type.name;
    let doubleType = "doubleType";
    pokeTypes.innerHTML = `<div class="${poketypeOne} ${doubleType}">${typesArray[0].type.name}</div><div class="${poketypeTwo} ${doubleType}">${typesArray[1].type.name}</div>`;
  } else {
    poketypeOne = typesArray[0].type.name;
    let singleType = "singleType";
    pokeTypes.innerHTML = `<div class="${poketypeOne} ${singleType}">${typesArray[0].type.name}</div>`;
  }
}

function randomIntFromInterval() {
  return Math.floor(Math.random() * (898 - 1 + 1) + 1);
}

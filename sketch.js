window.onresize = () => {
  location.reload();
};

function getWidth() {
  return window.innerWidth;
}
function getHeight() {
  return window.innerHeight;
}

let ufo;

function preload() {
  ufo = loadImage("assets/ufo-svgrepo-com.svg");
}

function setup() {
  noCursor();
  createCanvas(getWidth(), getHeight());
}

function draw() {
  background(220);
  drawSpaceShip();
}

function drawSpaceShip() {
  image(ufo, mouseX, mouseY, ufo.width / 2, ufo.height / 2);
}

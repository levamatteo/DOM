let img;
let img1;
let img2;
let button;
let myError;
let adBlock

function preload() {
  img = loadImage('Assets/spamRisk.jpg');
  img1 = loadImage('Assets/gmail.jpg');
  img2 = loadImage('Assets/error.png');
  soundFormats('mp3', 'ogg');
  myError = loadSound('assets/errorSound.mp3');
}

function setup() {
  adBlock = select('#adBlocked')
  adBlock.hide();
  createCanvas(windowWidth, windowHeight);
  background(img1)
  button = createButton('adBlocker');
  button.position(1750, 40);
  button.mousePressed(changeBG);
}

function draw() {
  image(img, mouseX, mouseY);
}

function changeBG() {

  background(img2);
  myError.setVolume(0.1);
  myError.play();
  adBlock.show();
}

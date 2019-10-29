let img;
function preload() {
  img = loadImage('Assets/spamRisk.jpg');
}

function setup() {
  createCanvas(400, 400);
 background(0)
}

function draw() {
    image(img, mouseX, mouseY);
}

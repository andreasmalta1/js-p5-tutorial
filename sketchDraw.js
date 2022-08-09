let canvasX, canvasY
let r, g, b

canvasX = 400
canvasY = 400

function setup() {
  createCanvas(canvasX, canvasY);
  r = random(255)
  g = random(255)
  b = random(255)
  background(0)
}

function draw() {
  noStroke()
  fill(r, g, b)
  circle(mouseX, mouseY, random(50))
}

function mousePressed(){
  r = random(255)
  g = random(255)
  b = random(255)
}
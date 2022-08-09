var col = 0

canvasX = 600
canvasY = 400

function setup() {
  createCanvas(canvasX, canvasY);
  background(0)
}

function draw() {
    col = map(mouseX, 0, canvasX, 0, 255)
    background(col)
    fill(250, 118, 222)
    circle(mouseX, 200, 64, 64)
}
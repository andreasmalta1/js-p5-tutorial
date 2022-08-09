let canvasX, canvasY, circleRadius
let colours = []

canvasX = 400
canvasY = 400
circleRadius = 20

function setup() {
  createCanvas(canvasX, canvasY);
  colours = getRandomColor()
}

function draw() {
    background(0)
    noStroke()
    fill(colours[0], colours[1], colours[2])
    circle(canvasX/2, canvasY/2, circleRadius)
    circleRadius ++
}

function mousePressed(){
  colours = getRandomColor()
  circleRadius = 20
}

function getRandomColor(){
  return [random(255), random(255), random(255)]
}
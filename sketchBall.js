let canvasX, canvasY, circleRadius, circleX, circleY, circleSpeed, color
canvasX = 400
canvasY = 400
circleRadius = 20
circleX = 10
circleY = 200
circleSpeed = 10


function setup() {
  createCanvas(canvasX, canvasY);
  color = getRandomColor()
}

function draw() {
  background(0)
  noStroke()
  fill(color[0], color[1], color[2])
  circle(circleX, circleY, circleRadius)
  if (circleX > canvasX || circleX < 0){
    circleSpeed *= -1
    color = getRandomColor()
  }

  circleX += circleSpeed
}

function getRandomColor(){
  return [random(255), random(255), random(255)]
}
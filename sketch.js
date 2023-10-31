let foto

function preload() {
  // put preload code here
  foto = loadImage("./images/lisa.jpg")
}

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight, WEBGL)
}

function draw() {
  // put drawing code here
  background(232,167,152)
  rotateX(frameCount * 0.01)
  rotateY(frameCount * 0.01)
  rotateZ(frameCount * 0.01)
  noStroke()
  texture(foto)
  box(300)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}
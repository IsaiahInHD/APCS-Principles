// Global variables
var balls = []
var paddle = []
// put setup code here
function setup() {
  var cnv = createCanvas(1600,900);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  loadBalls(150); // !!!!!!!! this is a function call
  loadPaddle(1); // function call
  //defining the paddle object, giving it a shape
  paddle = new Rect(createVector(20, 30), createVector(20, 30), 40, color(255,0,0));
}

function draw() {
  background(20, 20, 20, 15);
  // calling the run function, checking how many balls were made
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
  }

  for(var i = 0; i < paddle.length; i++){
    paddle[i].run();
  }

}

//array of balls, not boids
function loadBalls(numBalls) {
  for(var i = 0; i < numBalls; i++){
    var loc = createVector(random(width), random(height));
    var vel = createVector(random(-3, 3), random(-3, 3));
    var rad = random(20, 40);
    var col = color(random(255), random(255), random(255));
    var b = new Ball(loc, vel, clr);
    balls.push(b);
  }

  function loadPaddle(numPaddle) {
    for(var i = 0; i < numPaddle; i++){
      var loc = createVector(random(width), random(height));
      var vel = createVector(random(-3, 3), random(-3, 3));
      var rad = random(20, 40);
      var col = color(random(255), random(255), random(255));
      var b = new Paddle(loc, vel, clr);
      paddle.push(b);
    }

}

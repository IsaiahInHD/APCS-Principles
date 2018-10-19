// Global variables
let balls = [];
let paddle = [];
// put setup code here
function setup() {
  noCursor();
  var cnv = createCanvas(1600,900);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);


  let n = 50;
  loadBalls(n); // !!!!!!!! this is a function call
  loadPaddle(1); // function call

}

function draw() {
  background(5, 5, 5);
  // calling the run function, checking how many balls were made
  for(let i = 0; i < paddle.length; i++){
    paddle[i].run();
  }

  for(let i = 0; i < balls.length; i++){
    balls[i].run();
  }


  for(var i = 0; i < balls.length; i++){
    if(balls[i].isColliding()){
      balls.splice(i, 1);
  }

}





  checkCollision();

}

function checkCollision(paddle, balls) {
  for(let Ball in balls) {
  }

}



//array of balls, not boids
function loadBalls(numBalls) {
  for(let i = 0; i < numBalls; i++){
    loc = createVector(random(width), random(300, 0));
    vel = createVector(random(-3, 3), random(-3, 3));
    clr = color(random(0, 255), random(0, 255), random(0, 255));
    let b = new Ball(loc, vel, clr);
    balls.push(b);
  }

}

  function loadPaddle(numPaddle) {
    for(let i = 0; i < 1; i++){
      let loc = createVector(random(width), random(height));
      let vel = createVector(random(-3, 3), random(-3, 3));
      let clr2 = color(random(255), random(255), random(255));
      let ba = new Paddle(loc, vel, clr);
      paddle.push(ba);
    }

  }

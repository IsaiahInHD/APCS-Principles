// Global variables
var balls = [];
var attr;




// put setup code here
function setup() {
  var cnv = createCanvas(1600,900);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  loadBalls(30); // !!!!!!!! this is a function call

//for(var b1 = new Ball(x, y, dx, dy, rad) balls.push(b1))


}

function draw() {
   background(20, 20, 20, 15);
  attr.run();
  for(var i = 0; i < balls.length; i++){
     balls[i].run();
  }
}



function loadBalls(numBalls){

  for(var i = 0; i < numBalls; i++){
    var loc = createVector(random(width), random(height));
    var vel = createVector(random(-1,1), random(-1,1));
    var radius = 15;
    var col = color(random(255), random(255), random(255));

    balls.push(new Ball(loc, vel, radius, col));
  }

  var loc = createVector(width/2, height/2);
  var vel = createVector(0,0);
  var radius = 55;
  var col = color(255,0,0);
  attr = new Ball(loc, vel, radius, col);
}

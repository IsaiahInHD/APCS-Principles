// Global variables
var boids = [];
var chaser;
// put setup code here
function setup() {
  var cnv = createCanvas(1600,900);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  loadBoids(50); // !!!!!!!! this is a function call
  chaser = new Ball(createVector(0, 0),
                    createVector(0, 0),
                    40,
                    color(255,0,0)
                    );
}

function draw() {
  background(20, 20, 20, 15);
  for(var i = 0; i < boids.length; i++){
    boids[i].run();
  }
  chaser.run();

}

function loadBoids(numBoids) {
  for(var i = 0; i < numBoids; i++){
    var loc = createVector(random(width), random(height));
    var vel = createVector(random(-3, 3), random(-3, 3));
    var rad = random(20, 40);
    var col = color(random(255), random(255), random(255));
    boids.push(new Boid(loc, vel, rad, col));
  }
}

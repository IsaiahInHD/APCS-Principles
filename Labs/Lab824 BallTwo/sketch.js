// Global variables
var balls = [];
var b = new Ball(20, 50, -2, -4, 12);
balls.push(b1);


// put setup code here
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  b1 = new Ball(random(width), random(height), random(15, 35),
color(250, 23, 23));
//for(var b1 = new Ball(x, y, dx, dy, rad) balls.push(b1))


}

function draw() {
    b1.run();
}

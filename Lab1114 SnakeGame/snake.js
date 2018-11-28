//snake constructor function

// what does a snake need to know about
//itself?
function Snake(loc, vel) {
  this.loc = loc;
  this.vel = vel;
  this.segments = [];
  this.run = function(){
    this.update();
    this.render();
  }

//add acceleration to velocity & detect when the snake hits a wall
//maybe make it so that it starts a new round when it does so
  this.update = function(){
    this.loc.add(this.vel);
    this.loc.x = constrain(this.loc.x, 0, width-w);
    this.loc.y = constrain(this.loc.y, 0, height-w);
  }

//defining the shape of the snake, add an array of segments
  this.render = function() {
    fill(0, 255, 0);
    rect(this.loc.x, this.loc.y, w, w);
  }

function checkCollision() {
  for(var z = dots; z > 0; z--) {
    if ((z > 4) && (x[0] == x[z]) && (y[0] == y[z])){
      inGame = false;
    }
  }

  if (y[0] >= C_HEIGHT) {
    inGame = false;
  }

  if(y[0] < 0) {
    inGame = false;
  }

  if(x[0] >= C_WIDTH) {
    inGame = false;
  }

}

//array of segments
this.segments = function() {
  for(var i = 0; i < segments.length; i++){
    var loc = createVector(this.loc.x, this.loc.y, w, w);
    var vel = createVector(this.loc.add(this.vel));
    var col = color(0, 255, 0);
    segments.push(new Segment(loc, vel, col));

  }
}

}

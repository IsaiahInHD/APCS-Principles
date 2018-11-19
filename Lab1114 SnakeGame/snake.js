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


  // array of segments

  this.segments = function() {
    for(var i = 0; i < this.segments; i++){
      segments[i].length
    }
  }

}

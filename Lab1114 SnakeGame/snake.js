//snake constructor function

// what does a snake need to know about
//itself?
function Snake(loc, vel) {
  this.loc = loc;
  this.vel = vel;
  this.segments = [];

  this.setVel = function(vel) {
    if(this.vel.y > 0 && this.vel.y < 0){

    }
    else if(this.vel.y < 0 && this.vel.y > 0){

    }
    else if(this.vel.x > 0 && this.vel.x < 0){

    }
    else {
      this.vel = vel;
      console.log(vel);
      this.vel.mult(w);
    }

  }

  this.run = function(){
    this.update();
    this.render();
    this.checkEdges();
  }

  this.checkEdges = function() {
    if(this.loc.x == apple.loc.x && this.loc.y == apple.loc.y) {
      console.log("APPLE");
      this.length += 1;
      apple.randomize();

    }

  }

//add acceleration to velocity & detect when the snake hits a wall
//maybe make it so that it starts a new round when it does so
  this.update = function(){
    let headLoc = createVector(this.loc.x, this.loc.y);
    this.segments.push(headLoc);
    if(this.segments.length > this.length){
      let remove = this.segments.shift();
      fill(0, 0, 0);
      rect(remove.x, remove.y, w, w);
    }
    console.log(this.segments);
    this.loc.add(this.vel);


    this.loc.x = constrain(this.loc.x, 0, width-w);
    this.loc.y = constrain(this.loc.y, 0, height-w);
  }

//defining the shape of the snake, add an array of segments
  this.render = function() {
    fill(0, 255, 0);
    rect(this.loc.x, this.loc.y, w, w);

  }

  this.setVel(vel);
  this.render();


function checkCollision() {
  for(var i = 0; i < array.length; i++) {
    if(array[i].x === x && array[i].y === y)
    return true;
  }
  return false;
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

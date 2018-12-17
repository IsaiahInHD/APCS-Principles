
//snake constructor function

// what does a snake need to know about
//itself?
function Snake(loc, vel, apple) {
  this.loc = loc;
  this.vel = vel;
  this.apple = apple;
  this.segments = [];
  var head = createVector(loc.x, loc.y);
  this.segments.push(head);



  this.setVel = function(vel) {
    if(this.vel.y > 0 && this.vel.y < 0){

    }
    else if(this.vel.y < 0 && this.vel.y > 0){

    }
    else if(this.vel.x > 0 && this.vel.x < 0){

    }
    else {
      this.vel = vel;
      //console.log(vel);
    }

  }

  this.run = function(){
    this.update();
    this.render();
  }

  //add acceleration to velocity & detect when the snake hits a wall
  //maybe make it so that it starts a new round when it does so
  this.update = function(){
    var headLoc = createVector(this.loc.x, this.loc.y);

    for(var i = this.segments.length-1; i > 0; i--) {
      this.segments[i].x = this.segments[i-1].x;
      this.segments[i].y = this.segments[i-1].y;

    }


    //console.log(this.segments);
    this.loc.add(this.vel);
    this.segments[0].x = this.loc.x;
    this.segments[0].y = this.loc.y;
    this.loc.x = constrain(this.loc.x, 0, width-w);
    this.loc.y = constrain(this.loc.y, 0, height-w);
    //apple.randomize();

  }




  this.render = function() {
    fill(0, 255, 0);
    //rect(this.loc.x, this.loc.y, w, w);

    for(var i = 0; i < this.segments.length; i++) {
      rect(this.segments[i].x, this.segments[i].y, w, w);
    }

  }

  this.tangled = function() {
    let count = this.segments.length;
    for(let i = 0; i < count; i++) {
      let seg = this.segments[i];
      if(this.loc.x == seg.x && this.loc.y == seg.y){
        console.log("body");
        return true;
      }
    }

    return false;
  }



  this.checkCollision = function() {
    for(var i = 0; i < array.length; i++) {
      if(array[i].x - x && array[i].y - y)
      GameOver();
    }
    return false;


  }

  this.grow = function() {
  var newLoc = createVector(this.segments[this.segments.length-1].x + w, this.segments[this.segments.length-1].y);
  this.segments.push(newLoc);

  }



}

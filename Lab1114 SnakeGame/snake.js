//snake constructor function

// what does a snake need to know about
//itself?
function Snake(loc, vel, apple) {
  this.loc = loc;
  this.vel = vel;
  this.apple = apple;
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
      //console.log(vel);
    }

  }

  this.run = function(){
    this.update();
    this.render();
    this.checkEdges();
  }



  this.checkEdges = function() {
    if(this.loc.x == apple.loc.x && this.loc.y == apple.loc.y) {
    // insert new segment at 0th indx of segments array
    console.log("APPLE");
    this.length += 1;
    apple.randomize();

    let count = this.segments.length;
    for(let i =0; i < count; i++) {
      let seg = this.segments[i];
      if(this.loc.x == seg.x && this.loc.y == seg.y) {
        console.log("body");
        paused = true;

  }

}

    //console.log(this.segments);
    this.loc.add(this.vel);
    this.loc.x = constrain(this.loc.x, 0, width-w);
    this.loc.y = constrain(this.loc.y, 0, height-w);

    //this.setVel(vel);



  }

}






  //add acceleration to velocity & detect when the snake hits a wall
  //maybe make it so that it starts a new round when it does so
  this.update = function(){
    var headLoc = createVector(this.loc.x, this.loc.y);

    for(var i = 0; i < this.segments.length; i++) {
      let loc = createVector(this.loc.x, this.loc.y, w, w);
      let col = color(0, 255, 0);
    }


  }




  this.render = function() {
    this.segments.push(loc);
    fill(0, 255, 0);
    rect(this.loc.x, this.loc.y, w, w);


  }





  function checkCollision() {
    for(var i = 0; i < array.length; i++) {
      if(array[i].x - x && array[i].y - y)
      return true;
    }
    return false;


  }



}

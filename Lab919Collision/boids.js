/*
** Ball Constructor function
**Isaiah Solagbade
**Aug 30, 2018
*/

function Boid(location, velocity, radius, clr){
  // Instance variables
  this.loc = location;//  vector
  this.vel = velocity;//  vector
  this.rad = radius;// number
  this.clr = clr; // clror
  this.acc = createVector(0);
  this.lifespan = 800.0;

  // This function calls other functions
  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }

  //This function changes the location of the Ball
  // by adding speed to x and y
  this.update = function(){
    //  accelerate away from the chaser
    this.acc.add(this.vel)
    this.loc.add(this.vel);


    }


    //checkEdges() reverses speed when the ball touches an edge
    this.checkEdges = function(){
      if(this.loc.x < 0) this.loc.x = width;
      if(this.loc.x > width) this.loc.x = 0;
      if(this.loc.y < 0) this.loc.y = height;
      if(this.loc.y > height) this.loc.y = 0;

  }

  // render() draws the ball at the new location
  this.render = function(){
    fill(this.clr);
    var n = 10;
  push()
    translate(this.loc.x, this.loc.y);
    rotate(this.vel.heading()+PI/2);
    triangle(-n, 0, n, 0, 0, -3*n);
  pop()
  }

  this.isDead = function() {
    if(this.lifespan < 0.0) {
      return true;
    }  else {
       return false;
    }
  }


  }

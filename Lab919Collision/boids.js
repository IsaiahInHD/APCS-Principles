/*
** Ball Constructor function
**Isaiah Solagbade
**Aug 30, 2018
*/

function Boid(location, velocity, radius, col){
  // Instance variables
  this.loc = location;
  this.vel = velocity;
  this.rad = radius;
  this.col = col;
  this.acc = createVector(.1, 0);
  // This function calls other functions
  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }
  //This function changes the location of the Ball
  // by adding speed to x and y
  this.update = function(){




    }
    this.vel.add(this.acc)
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
  push()
    translate(this.loc.x, this.loc.y);
    rotate(0);
    triangle(-5, 0, 5, 0, 0, -15);
  pop()
  }

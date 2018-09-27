/*
** Ball Constructor function
**Isaiah Solagbade
**Aug 30, 2018
*/

function Ball(location, velocity, radius, col){
  // Instance variables
  this.loc = location;
  this.rad = radius;
  this.col = col;
  // This function calls other functions
  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }
  //This function changes the location of the Ball
  // by adding speed to x and y
  this.update = function(){


    if(this !== attr){
      var d = this.loc.dist(attr.loc)
      if(d < 300){
        var steeringForce = p5.Vector.sub( attr.loc, this.loc);
        steeringForce.normalize(); //changes the magnitude to 1
        steeringForce.mult(0.09); // scales the magnitude to 0.5
        this.vel.add(steeringForce);
      }
      if(d < 80){
        var steeringForce = p5.Vector.sub( this.loc, attr.loc);
        steeringForce.normalize(); //changes the magnitude to 1
        steeringForce.mult(0.2); // scales the magnitude to 0.5
        this.vel.add(steeringForce);
      }


    }
    this.vel.limit(5);
    this.loc.add(this.vel);

  }
  
  }

  // render() draws the ball at the new location
  this.render = function(){
    fill(this.col);
    ellipse(this.loc.x, this.loc.y, this.rad, this.rad);
  }

}

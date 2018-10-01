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
    //this.checkEdges();
    this.update();
    this.render();
  }

//lerp the chaser to the mouse

  this.update = function(){
    //lerp(start, stop, amt)
      var mouseLoc = createVector(mouseX, mouseY);
      this.loc = p5.Vector.lerp(this.loc, mouseLoc, .09)

    }

    // render() draws the ball at the new location
    this.render = function(){
      fill(this.col);
      ellipse(this.loc.x, this.loc.y, this.rad, this.rad);
    }
  }

  //checkEdges() reverses speed when the ball touches an edge

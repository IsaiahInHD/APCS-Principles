/*
** Ball constructor functions
** Isaiah Solagbade
** September 25, 2018
*/

function Ball(location, velocity, radius, col){
  // Instance variables
  this.loc = location;
  this.vel = velocity;
  this.rad = radius;
  this.col = col;
  // This function calls other functions
  this.run = function(){
    this.checkEdges();
    this.update;
    this.render();
  }

  //This function changes the location of the ball
  // by adding speed to x and y
  this.update = function(){

  }

  this.render = function{
    fill(this.col);
    triangle(30, 75, 58, 20, 86, 75);
  }

}

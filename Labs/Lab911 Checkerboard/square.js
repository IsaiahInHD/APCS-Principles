/*
** Square Constructor function
**Isaiah Solagbade
**Sept 12, 2018
*/

// Add perameters

// Add perameters to your constructor function
function Sqr(locatiion, col, witdh){
  this.loc = location;
  this.col = col;
  this.w = width;


  this.render = function(){
    fill(22);
    rect(this.loc.x, this.loc.y, this.w, this.w);
  }




}

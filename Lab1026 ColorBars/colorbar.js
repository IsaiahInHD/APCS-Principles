function Colorbar(location, radius, col){
  //instance variables
  this.loc = location;
  this.rad = radius;
  this.col = col;
  this.w = 150;
  this.h = 200;


  //calls other functions
  this.run = function(){
    this.render();
  }



  this.render = function(){
    fill(this.col);
    rect(20, 30, 40, 60);

  }





}

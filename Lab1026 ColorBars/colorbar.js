function Colorbar(location, col){
  //instance variables
  this.loc = location;
  this.col = col;
  this.w = 150;
  this.h = 200;


  this.render = function(){
    fill(this.col);
    rect(this.loc.x, this.loc.y, 40, 60);
  }
}

//food constructor function

//what does food need to know about itself?

function Food(loc, col){
// instance variables
  this.loc = loc;
  this.col = col;
  this.run = function(){
    this.update();
    this.render();
  }
}

this.update = function(){

  this.loc.x = constrain(this.loc.x, 0, width-w);
  this.loc.y = constrain(this.loc.y, 0, height-w)

}

this.render = function(){
  fill(255, 255, 255);
  rect(this.loc.x, this.loc.y, h, h)
}

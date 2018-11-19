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

}

this.render = function(){
  fill(255, 255, 255);
  rect(30, 20, 55, 55)
}

// paddle constructor function
// declare paddle object

function Paddle(location, velocity, radius, col) {
    //instance variables
    this.loc = location;
    this.rad = radius;
    this.col = col;
    //Now i'm using this.run to call other functions
    this.run = function(){
      // not going to use checkEdges for the paddle since
      // we will lerp it to the mouse
      this.update();
      this.render();

    }


    //lerp the paddle to the mouse
    this.update = function(){
      var mouseLoc = createVector(mouseX, mouseY);
      this.loc = p5.Vector.lerp(this.loc, mouseLoc, .09);
    }


    //render will draw the paddle at a new location
    this.render = function(){
      fill(this.clr);
      rect(30, 20, 55, 55);
    }




































}

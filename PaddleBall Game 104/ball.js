//ball constructor function
// declare ball objects

function Ball(location, velocity, radius, clr){
  //ball instance variables, each individual
  //ball object will have this code in setInterval(function () {
  this.loc = location; //this is a Vector
  this.vel = velocity; // this is also a Vector
  this.rad = radius; //this is a number, or value
  this.clr = clr; // a thing, color needs to be defined
  this.acc = createVector(.1, .1) // adding acceleration

  // calling other functions
  this.run = function(){
      this.checkEdges();
      this.update();
      this.render();

  }

    // chainging the location of the ball
    // by adding speed to x and y
      this.update = function(){
        this.loc.x = this.loc.x + this.vel.x;
        this.loc.y = this.loc.y + this.vel.y;
        this.vel.add(this.acc);
        this.loc.add(this.vel);

      }


      //checkEdges() reverses speed when the ball touches an edge
      this.checkEdges = function(){
        if(this.loc.x < 0) this.vel.x = -this.vel.x;
        if(this.loc.x > width) this.vel.x = -this.vel.x;
        if(this.loc.x < 0) this.vel.y = -this.vel.y;
        if(this.loc.y > height) this.vel.y = -this.vel.y;
      }

      // render() draws the ball at a new location
    this.render = function(){
      fill(this.clr);
      ellipse(this.loc.x, this.loc.y, this.rad, this.rad);
    }




}

//ball constructor function
// declare ball objects

function Ball(loc, vel, clr, acc, w, h)  {
  //ball instance variables, each individual
  //ball object will have this code in it
  this.loc = loc; //this is a Vector
  this.vel = vel; // this is also a Vector
  this.clr = clr; // a thing, color needs to be defined
  radius = 10;
  this.acc = createVector(0, .1) // adding acceleration
  this.isDead = false;

  // calling other functions
  this.run = function() {
    this.checkEdges();
    this.update();
    this.render();

  }

  // chainging the location of the ball
  // by adding speed to x and y
  this.update = function() {
    this.loc.x = this.loc.x + this.vel.x;
    this.loc.y = this.loc.y + this.vel.y;
    this.vel.add(this.acc);
    this.loc.add(this.vel);


<<<<<<< HEAD
<<<<<<< HEAD
        this.isColliding = function() {
           if(this.loc.x > paddle.loc.x &&
           this.loc.x < paddle.loc.x + w)
=======
  }
>>>>>>> f5c8349aa3a593c9ac9e8455ac930c5c0b0d98d2


            }

<<<<<<< HEAD
=======
  }
>>>>>>> f5c8349aa3a593c9ac9e8455ac930c5c0b0d98d2
=======
  this.colliding = function() {
    if((this.loc.x > paddle.loc.x) &&
    (this.loc.x < paddle.loc.x + w) &&
    (this.loc.y > paddle.loc.y) &&
    (this.loc.y < paddle.loc.y + h)) {
>>>>>>> f5c8349aa3a593c9ac9e8455ac930c5c0b0d98d2

      return true;
    }else{


<<<<<<< HEAD
  this.colliding = function() {
    if((this.loc.x > paddle.loc.x) &&
    (this.loc.x < paddle.loc.x + w) &&
    (this.loc.y > paddle.loc.y) &&
    (this.loc.y < paddle.loc.y + h)) {

      return true;
    }else{
=======
      return false;

    }
>>>>>>> f5c8349aa3a593c9ac9e8455ac930c5c0b0d98d2


      return false;

    }


<<<<<<< HEAD

  }
<<<<<<< HEAD
=======






  //checkEdges() reverses speed when the ball touches an edge
  this.checkEdges = function(){
    if(this.loc.x < 0) this.vel.x = -this.vel.x;
    if(this.loc.x > width) this.vel.x = -this.vel.x;
    if(this.loc.x < 0) this.vel.y = -this.vel.y;
    if(this.loc.y > height) this.vel.y = -this.vel.y;
  }


=======




  //checkEdges() reverses speed when the ball touches an edge
  this.checkEdges = function(){
    if(this.loc.x < 0) this.vel.x = -this.vel.x;
    if(this.loc.x > width) this.vel.x = -this.vel.x;
    if(this.loc.x < 0) this.vel.y = -this.vel.y;
    if(this.loc.y > height) this.vel.y = -this.vel.y;
  }


>>>>>>> f5c8349aa3a593c9ac9e8455ac930c5c0b0d98d2
  // render() draws the balls at a new location
  this.render = function(){
    fill(this.clr);
    push()
    ellipse(this.loc.x, this.loc.y, radius, radius);
    pop()
  }




}
<<<<<<< HEAD
>>>>>>> f5c8349aa3a593c9ac9e8455ac930c5c0b0d98d2
=======
>>>>>>> f5c8349aa3a593c9ac9e8455ac930c5c0b0d98d2

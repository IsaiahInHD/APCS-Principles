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
  this.w = 100;
  this.h = 50;

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

      }

        this.isColliding() = function {
          if(this.loc.x < w)

        }





        //checkEdges() reverses speed when the ball touches an edge
        this.checkEdges = function(){
          if(this.loc.x < 0) this.vel.x = -this.vel.x;
          if(this.loc.x > width) this.vel.x = -this.vel.x;
          if(this.loc.x < 0) this.vel.y = -this.vel.y;
          if(this.loc.y > height) this.vel.y = -this.vel.y;
        }

        // render() draws the balls at a new location
      this.render = function(){
        fill(this.clr);
        push()
          ellipse(this.loc.x, this.loc.y, radius, radius);
        pop()
      }



  }


      //paddle function
    function Paddle(loc, vel, clr2) {
      //instance variables
      this.loc = loc;
      this.vel = vel;
      this.clr2 = clr2; //specifically for paddle
      this.acc = createVector(0, 0.1);

      //calls the other functions
      this.run = function() {
        this.update();
        this.render();

        for(let i = balls.length-1; i>=0; i--){
          if(balls[i].isDead){
            balls.splice(i, i);
            }
        }
      }



      //update function will update the loc/vel of the paddle and ball
      this.update = function(){
        //lets the paddle move w/ the mouse horizontally
        this.loc.x = mouseX;
      }

      //gives object a shape and color
      this.render = function(){
        fill(this.clr2);
        push()
          rect(this.loc.x, windowHeight - 240, 100, 10);
        pop()
    }


  }

<<<<<<< HEAD



//paddle function
function Paddle(loc, vel, clr2) {
//instance variables
this.loc = loc;
this.vel = vel;
this.clr2 = clr2; //specifically for paddle
this.acc = createVector(0, 0.1);
this.w = 100;
this.h = 50;

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
=======



//paddle function
function Paddle(loc, vel, clr2) {
  //instance variables
  this.loc = loc;
  this.vel = vel;
  this.clr2 = clr2; //specifically for paddle
  this.acc = createVector(0, 0.1);
  this.w = 100;
  this.h = 50;

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
>>>>>>> f5c8349aa3a593c9ac9e8455ac930c5c0b0d98d2

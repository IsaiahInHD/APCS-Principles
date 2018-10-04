//ball constructor function
// declare ball objects

function Ball(location, velocity, radius, clr){
  //ball instance variables, each individual
  //ball object will have this code in setInterval(function () {
  this.loc = location; //this is a Vector
  this.vel = velocity; // this is also a Vector
  this.rad = radius; //this is a number, or value
  this.clr = clr; // a thing, color needs to be defined
  this.acc = createVector(0, -1) // adding acceleration  

}

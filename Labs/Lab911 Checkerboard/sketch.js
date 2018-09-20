/*
**Lab 911: Checkerboard
**
**
*/

// Global variables
// Declare squares[] as a global variables
var squares = [];
var numberofSquares;
var squareSize;



// put setup code here
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(22);
  squareSize = width/numberofSquares;

  // Create a function that loads the squares into an
  // array of square objects and call the function

  loadSquares(8);
  // traverse array and run each square \

  for(var i = 0; i < squares.length; i++){
    squares[i].render();
  }

}


function loadSquares(){
  var color1 = color(random(255), random(255), random(255));
  var color2 = color(random(255), random(255), random(255));
  for(row = 0; row < numberofSquares; row++){
    for(col = 0; col < numberofSquares; col++){
      //if(col){
      var loc = createVector(row*squareSize);
      squares.push(new Sqr(loc, squareSize, color1));


      }
    }
  }

  // create a loop that will push 64 squares into an array
  // calculate the x and y position in terms of the loop control variables

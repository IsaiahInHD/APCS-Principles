//global variables
var snake;
var food;
var segments;
var w = 20;
var h = 15;
var cols, rows;


//setup & initialization of canvas
function setup() {
  var cnv = createCanvas(1600, 900);
  background(20, 20, 20);
  cols = width/w;
  rows = height/w;
  cnv.position((windowWidth-width)/2, 30);
  snake = new Snake(createVector(width/2, height/2, createVector(1, 0)));
  food = new Food(createVector(width/3, height/3, createVector(1,0)));
  frameRate(60);
}

//call & execute functions
function draw(){
  snake.run();
  food.run();
}

//bind snake movement to the arrow keys
function keyPressed() {
  if(keyCode === UP_ARROW){
    snake.vel = createVector(0, -1);
  }
  if(keyCode === DOWN_ARROW){
    snake.vel = createVector(0, 1);
  }
  if(keyCode === RIGHT_ARROW){
    snake.vel = createVector(1, 0);
  }
  if(keyCode === LEFT_ARROW){
    snake.vel = createVector(-1, 0);
  }

}

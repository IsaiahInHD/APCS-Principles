//global variables
var snake;
var segments;
var w = 20;
var h = 15;
var cols, rows;
var paused;



//setup & initialization of canvas
function setup() {
  let cnv = createCanvas(800, 600);
  background(20, 20, 20);
  cols = width/w;
  rows = height/w;
  cnv.position((windowWidth-width)/2, 30);
  apple = new Apple();
  snake = new Snake(createVector(width/2, height/2), createVector(w, 0), apple);
  frameRate(10);
}

//call & execute functions
function draw(){
  background(20, 20, 20);
  snake.run();
  apple.run();
  //if(this.loc.x == apple.loc.x && this.loc.y == apple.loc.y){
    console.log("APPLE");
    this.length += 1;
  if(snake.tangled()){
    GameOver();
  }

  }



function GameOver() {
  console.log("GameOver");

}
//}

//bind snake movement to the arrow keys
function keyPressed() {
  if(keyCode === UP_ARROW){
    snake.vel = createVector(0, -1*w);
  }
  if(keyCode === DOWN_ARROW){
    snake.vel = createVector(0, 1*w);
  }
  if(keyCode === RIGHT_ARROW){
    snake.vel = createVector(1*w, 0);
  }
  if(keyCode === LEFT_ARROW){
    snake.vel = createVector(-1*w, 0);
  }

}

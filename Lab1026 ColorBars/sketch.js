// Global variables
var bars = [];


function setup(){
  var cnv = createCanvas(1600, 900);
  cnv.position(-(windowWidth-width)/2, 30);
  background(20, 20, 20);
  loadBars(100); //function call
  myBubbleSort();
  //mySelectSort();
}


function draw(){
  background(20, 20, 20, 15);
  for(var i = 0; i < bars.length; i++){
    bars[i].run();
  }


}


//array of bars
function loadBars(numBars) {
  for(var i = 0; i < numBars; i++){

    var loc = createVector(-(windowWidth-width)/2, -(windowWidth-width)/2, 0);
    var rad = random(20, 40);
    var col = color(random(255), random(255), random(255));
    bars.push(new Colorbar(loc, rad, col));
  }
}


function myBubbleSort(){
  var length = bars.length
  for(var i = length-1; i > 0; i--){
    for(var j = 0; j < i; j++){
      if(bars[j] > bars[j+1]){
        var tmp = bars[j];
        bars[j] = bars[j+1];
        bars[j+1] = tmp;
      }
    }
  }


  function mySelectSort(){

  }



}

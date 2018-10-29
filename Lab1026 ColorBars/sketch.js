// Global variables
var bars = [];
var numBars;

function setup(){
  var cnv = createCanvas(1600, 900);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  loadBars(1); //function call
  myBubbleSort(colorbar);
  mySelectSort(colorbar);

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
    var loc = createVector(random(width), random(height));
    var rad = random(20, 40);
    var col = color(random(255), random(255), random(255));
    bars.push(new Colorbar(loc, rad, col, width, height));
  }
}


function myBubbleSort(colorbar){
  var length = colorbar.length
  for(var i = length-1; i > 0; i--){
    for(var j = 0; j < i; j++){
      if(colorbar[j] > colorbar[j+1]){
        var tmp = colorbar[j];
        colorbar[j] = colorbar[j+1];
        colorbar[j+1] = tmp;
      }
    }
  }



}

var data;
var barHeight;
var myBubbleSort;
var oneAndDone = false;


function setup() {
  var cnv = createCanvas(1600, 900);
  cnv.position((windowWidth-width)/2, 30);
  background(20);
  barHeight = 20;
  console.log(data)
  myBubbleSort(data)
  loadJSON("pokedex.json", gotData);

}

function draw() {
  useData();
}

function gotData(jData) {
  data = jData;

}

function myBubbleSort() {
}

function useData() {
  if(data){
    if(!oneAndDone){
      myBubbleSort();
      for(var i = 0; i < data.pokemon.length; i++){
        console.log(i + '-' + data.pokemon[i].type + 'height' + data.pokemon[i].height)
      }
      oneAndDone = true;
    }

  }

}

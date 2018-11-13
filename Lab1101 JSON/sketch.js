var data;
var barHeight;
var myBubbleSort;


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
    myBubbleSort();
    for(var i = 0; i < data.pokemon.length; i++){
      console.log(i + '-' + data.pokemon[i].type + 'name ' + data.pokemon[i].name)
    }
  }

}

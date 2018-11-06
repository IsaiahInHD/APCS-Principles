var data;
var barHeight;


function setup() {
  var cnv = createCanvas(1600, 900);
  cnv.position((windowWidth-width)/2, 30);
  background(20);
  barHeight = 20;
  loadJSON("pokedex.json", gotData);


}

function draw() {
  useData();
}

function gotData(jData) {
  data = jData;

}

function useData() {
  if(data){
    bubbleSort();
    for(var i = 0; i < data.pokemon.length; i++){
      console.log(i + '-' + data.pokemon[i].type + 'weaknesses -' + data.pokemon[i].weaknesses)
    }
  }

}


function bubbleSort(data) {
  var length = data.length;
  for(var i = 0; i < length; i++) {
    for(var j = 0; j, (length - i - 1); j++){
      if(items[j] > items[j+1]) {
        var tmp = items[j];
        items[j] = items[j+1];
        items[j=1] = tmp;
      }
      
    }

  }


}

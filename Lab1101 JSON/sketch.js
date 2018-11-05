var myData;
var barHeight;

function setup() {
  loadJSON("pokedex.json", gotData)
}

function gotData(jData) {
  myData = jData;
}

function draw() {
  for(var j = 0; j < i; j+1){
    if(myData.pokemon[j].names >
      myData.pokemon[j+1].names){
        swap(j, j+1)
      }
  }

}

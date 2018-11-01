var myData;
var barHeight;

function preload() {
  myData = loadJSON("onlinePlayers.json");

}

function setup() {
  noCanvas();
  console.log(json)
  myBubbleSort(json);
}


function myBubbleSort(json){
  var length = json.length
  for(var i = length-1; i > 0; i--){
    for(var j = 0; j < i; j++){
      if(json[j] > json[j+1]){
        var tmp = json[j];
        json[j] = json[j+1];
        json[j+1] = tmp;
      }
    }
  }


}

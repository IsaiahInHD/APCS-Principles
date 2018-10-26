
var txt;

function preload(){
  txt = loadStrings("words.txt");
}

function setup(){

  noCanvas();
  console.log(txt)
  myBubbleSort(txt);

}


function myBubbleSort(txt) {
  var length = txt.length
  for(var i = length-1; i > 0; i--){
    for(var j = 0; j < i ; j++){
      if(txt[j] > txt[j+1]){
        var tmp = txt[j];
        txt[j] = txt[j+1];
        txt[j+1] = tmp;
      }
    }
  }

}


var txt;

function preload(){
  txt = loadStrings("words.txt");
}

function setup(){

  noCanvas();
  myBubbleSort(txt);

}


function myBubbleSort(txt) {
  console.log(txt)
  var length = txt.length
  for(var i = 0; i < length; i++){
    for(var j = 0; j < (length - i - 1); j++){
      if(txt[j] > txt[j+1]){
        var tmp = txt[j];
        txt[j] = txt[j+1];
        txt[j+1] = tmp;
      }
    }
  }

}

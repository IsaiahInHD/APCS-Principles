
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);


}

//  The draw function is called @ 30 fps
function draw() {
  fill(0, 5, 150);
  rect(38, 31, 86, 20, 69, 63, 30, 76)
  ellipse(100, 250, 30, 30)
  ellipse(500, 600, 30, 30)
  rect(200, 300, 30, 30)
  rect(100, 300, 50, 50)

}

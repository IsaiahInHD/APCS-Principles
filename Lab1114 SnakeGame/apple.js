//food constructor function

//what does food need to know about itself?

function Apple() {
  this.loc = createVector(20, 0);


  this.run = function() {
    this.update();
    this.render();
  }

  this.update = function() {
    //this.randomize();
  }

  this.render = function() {
    fill(255, 0, 0);
    rect(this.loc.x, this.loc.y, w, w);
  }

  this.randomize = function(){
    this.loc = createVector(width/2-Math.floor(Math.random()*16-8)*w,
                            height/2+Math.floor(Math.random()*12-6)*w)

  }



}

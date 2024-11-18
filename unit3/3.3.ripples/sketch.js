/*
 * Isaiah padgett 
 */

let ripplers = [];
let op;


function setup() {
  createCanvas(800, 800);
  
}

function draw() {
  background(105, 169, 209);

  for (let i = 0; i < ripplers.length; i++){ //iterates ripplers
    ripplers[i].draw();
  }

  //stroke(255,255,255);
  //text(op,50,50);

}

//mouse pressed spawns a new rippler at mouse location
function mousePressed(){
  ripplers.push(new Rippler(mouseX, mouseY));
  //randomizes opacity 
  op = random(0.2,5);
}

class Rippler{
    constructor (x,y){ // constructor for the ripplers
      this.x = x,
      this.y = y,
      this.diameter = 0
      this.opacity = 255
    }
  draw(){ //draw function for ripplers 
    this.diameter += 2;
    this.opacity -= op;
    noFill();
    stroke(34, 76, 102,this.opacity);
    ellipse(this.x, this.y, this.diameter);
  }
}
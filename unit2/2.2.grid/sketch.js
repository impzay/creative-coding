function setup() {
  // create a canvas
  createCanvas(1200, 1200);

  // disable animation
  noLoop();
}
var skib = random(10);

function draw() {
  background(220);

  //for loop
  translate(100,100);
  for(let x = 0; x < 8; x++){
    for(let y = 0; y < 8; y++){
      push();
      stroke('green');
      strokeWeight(random(10));
      fill(62, 195, 81);
      translate(x * 100, y * 100);
      rect(0,0,100,100);
      pop();

    }
  }
}
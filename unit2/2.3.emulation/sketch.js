function setup() {
  // create the canvas
  createCanvas(1420, 900);

  // disable animation
  
}
var x = canvas.width/2;
var y = canvas.height;
var ballRadius = 50;

var circleX = 50;
var circleY = 50;
function draw() {
  background(9, 111, 187);

  var xvalue = 5;
  var yvalue = 5;
  while (xvalue <= 1400 && yvalue <= 900){

      stroke(9,111,187);
      fill(22, 176, 85);
      square(xvalue, yvalue, 25)
      xvalue += 30;

    } 

    stroke('black');
    strokeWeight(2);
    circle(circleX,circleY,ballRadius);
    if(y+circleY > canvas.height-ballRadius || y + circleY < ballRadius){
      circleY = -circleY
    }
    circleY += circleY;
}
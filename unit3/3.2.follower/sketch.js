function setup() {
  createCanvas(500, 500);
}
  let debug = true;
  var circleX = 50;
  var circleY = 50;
  var xSpeed;
  var ySpeed;
  var speedfactor = 1;
  var img;


function draw() {
  background(220);
  
  img = preload('hinata.jpg');
  image(img,circleX,circleY,50,50);

  fill('black');
  circle(mouseX,mouseY,15,15);
  if (mouseX > circleX){
    xSpeed = speedfactor;
  } else {
    xSpeed = -speedfactor;
  }

  if (mouseY > circleY){
    ySpeed = speedfactor;
  } else {
    ySpeed = -speedfactor;
  }

  circleX = circleX + xSpeed;
  circleY = circleY + ySpeed;

  if ((circleX + 25 == mouseX) && (circleY + 25 == mouseY)){
    circleX = 50;
    circleY = 50;
  }

  if(debug){
    text("width: " + width, 30, 30);
    text("height: " + height, 30, 45);
    text("mouseX: " + mouseX, 30, 60);
    text("mouseY: " + mouseY, 30, 75);
  }
}
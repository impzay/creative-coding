  let debug = false;
  var circleX = 50;
  var circleY = 50;
  var xSpeed;
  var ySpeed;
  var speedfactor = 2.1;
  var img;
  var randomX, randomY;
  var score = 0;
function setup() {
  createCanvas(500, 500);
}

function preload(){
    img = loadImage('https://impzay.github.io/creative-coding/unit3/3.2.follower/hinata.jpg');
}
function draw() {
  randomX = random(50,450);
  randomY = random(50,450);
  background(220);
  
  image(img,circleX,circleY,50,50);

  fill('black');
  circle(mouseX,mouseY,15,15);
  if(circleX >= mouseX - 15 && circleX <= mouseX + 15 && circleY >= mouseY - 15 && circleY <= mouseY + 15){
    score -= 1;
    circleX = randomX;
    circleY = randomY;
  }

  if (mouseX > circleX){
    xSpeed = speedfactor;
  } else {
    xSpeed = -speedfactor;
  }

  if (mouseY > circleY){
    ySpeed =speedfactor;
  } else {
    ySpeed =-speedfactor;
  }

  circleX += xSpeed;
  circleY += ySpeed;

  text("score!: "+score,30,30);
  if(debug){
    text("width: " + width, 30, 30);
    text("height: " + height, 30, 45);
    text("mouseX: " + mouseX, 30, 60);
    text("mouseY: " + mouseY, 30, 75);
  }
}
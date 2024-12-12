  
  //variables
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
  //loads image from github as follower
    img = loadImage('https://impzay.github.io/creative-coding/unit3/3.2.follower/hinata.jpg');
}
function draw() {
  //selects two random values for new x and y
  randomX = random(50,450);
  randomY = random(50,450);
  background(220);
  
  //follower
  image(img,circleX,circleY,50,50);


  //mouse circle
  fill('black');
  circle(mouseX,mouseY,15,15);

  //conditional statement for resetting the follower if it interacts with mouse
  if(circleX >= mouseX - 15 && circleX <= mouseX + 15 && circleY >= mouseY - 15 && circleY <= mouseY + 15){
    score -= 1;
    circleX = randomX;
    circleY = randomY;
  }


  //sets the direction of the follower depending on the location of the mosue
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


  //adds speed
  circleX += xSpeed;
  circleY += ySpeed;

  //score text
  text("score!: "+score,30,30);
  //debug
  if(debug){
    text("width: " + width, 30, 30);
    text("height: " + height, 30, 45);
    text("mouseX: " + mouseX, 30, 60);
    text("mouseY: " + mouseY, 30, 75);
  }
}
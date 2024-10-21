function setup() {
  createCanvas(400, 400);

  squareX = random(width - 50);//starts the square anywhere inside canvas
  squareY = random(height - 50);

  Xspeed = random(-10,10);//sets speed to random between -5 and 5
  Yspeed = random(-10,10);

}

//variables
var squareX;
var squareY;
var Yspeed;
var Xspeed;
var squareColor = 'red';
var score = 0;

function draw() { 
  background(0,0,0);


  if(squareX < 0 || squareX > width - 50){
    Xspeed = -Xspeed;
  }
  if(squareY < 0 || squareY > height - 50){
    Yspeed = -Yspeed;
  }
  if(squareY <= 0 && squareX <= 0 || squareY >= height - 50 && squareX >= width - 50){
    squareColor = color(random(0,255),random(0,255),random(0,255));
    score = score + 50;
  } else if(squareY <= 0 && squareX >= 350 || squareY >= height - 50 && squareX <= 0){
    squareColor = color(random(0,255),random(0,255),random(0,255));
    score = score + 50;
  }  

  if(mouseX > squareX && mouseX < squareX + 50 && mouseY > squareY && mouseY < squareY + 50){
    Xspeed = -Xspeed;
    Yspeed = -Yspeed;

  }

  squareX += Xspeed;
  squareY += Yspeed;

  //shape
  noStroke();
  fill(squareColor);
  rect(squareX,squareY,50,50);


  //score text
  fill('white');
  textSize(32);
  text("score: " + score, 32,30);


  //mouse circle
  fill('white');
  circle(mouseX,mouseY,15,15);

  if(score == 100){
    gameWon();
  }
}

function mouseClicked(){
  squareColor = color(random(0,255),random(0,255),random(0,255));
  score = score + 10;
}

function gameWon(){
  noLoop();
  textSize(75);
  text("You won!",55,200);
}
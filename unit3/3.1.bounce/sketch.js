function setup() {
  createCanvas(800, 425);

  squareX = random(400 - 50);//starts the square anywhere inside canvas
  squareY = random(400 - 50);

  Xspeed = random(-10,10);//sets speed to random between -5 and 5
  Yspeed = random(-10,10);

  squareX2 = random(800 - 50,425);//starts the square anywhere inside canvas
  squareY2 = random(400 - 50);

  Xspeed2 = random(-10,10);//sets speed to random between -5 and 5
  Yspeed2 = random(-10,10);
}

//variables
var squareX;
var squareY;
var squareX2;
var squareY2;
var Yspeed;
var Xspeed;
var Yspeed2;
var Xspeed2;
var squareColor = 'red';
var score = 0;


function draw() { 
  background(0,0,0);


  if(squareX < 0 || squareX > 400 - 50){
    Xspeed = -Xspeed;
  }
  if(squareY < 0 || squareY > 400 - 50){
    Yspeed = -Yspeed;
  }
  if(squareX2 < 425 || squareX2 > 800 - 50){
    Xspeed2 = -Xspeed2;
  }
  if(squareY2 < 0 || squareY2 > 400 - 50){
    Yspeed2 = -Yspeed2;
  }
  if(squareY <= 0 && squareX <= 0 || squareY >= 400 - 50 && squareX >= 400 - 50){
    squareColor = color(random(0,255),random(0,255),random(0,255));
    score = score + 50;
  } else if(squareY <= 0 && squareX >= 350 || squareY >= 400 - 50 && squareX <= 0){
    squareColor = color(random(0,255),random(0,255),random(0,255));
    score = score + 50;
  }  

  if(mouseX > squareX && mouseX < squareX + 50 && mouseY > squareY && mouseY < squareY + 50){
    Xspeed = -Xspeed;
    Yspeed = -Yspeed;
    squareColor = color(random(0,255),random(0,255),random(0,255));
    score = score + 5;
  }

  squareX += Xspeed;
  squareY += Yspeed;
  squareX2 += Xspeed2;
  squareY2 += Yspeed2;

  //shape
  noStroke();
  fill(squareColor);
  //rect(squareX,squareY,50,50);
  rect(squareX2,squareY2,50,50);


  //score text
  fill('white');
  textSize(32);
  text("score: " + score, 32,30);


  //mouse circle
  fill('white');
  circle(mouseX,mouseY,15,15);

  if(score >= 100){
    gameWon();
  }

  fill('grey');
  rect(400,0,25,800);
  rect(0,400,825,25);
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
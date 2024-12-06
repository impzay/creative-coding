var vbX = 400;
var vbY = 25;
var armX;
var armY;
var inHands = false;
var outside = false;
var middle = false;
var oppo = false;
var setFalling = true;
var currentZone;
var targetX;
var targetY;
var ballMoving = false;
var falling;
var leftArm;
var rightArm;
var gameSpeed = 5;
var setSpeed = 0.1;
var randomZone = null;
var randomNum;
var clickedZone = null;
var ballSet = false;
var score = 0;
var playerText = ""
var playerTextY = 350;
var playerTextOpacity = 255;
var setCountdown = 15;
var angle = 0;
var hoverOutside = 100;
var hoverMiddle = 100;
var hoverOppo = 100;
var totalTurns = 0;

function setup() {
  createCanvas(800, 800);
  randomNum = int(random(1,4));
}

function draw() {
  background('grey');
  //setting zones
  stroke(0,0,0,25);
  //outside zone
  fill(0,0,0,hoverOutside);
  rect(0,0,300,400);
  //middle zone
  fill(0,0,0,hoverMiddle);
  rect(300,0,200,400);
  //oppo zone
  fill(0,0,0,hoverOppo);
  rect(500,0,300,400);
  fill('white');
  text("outside",50,50,50,80);
  text("middle",350,50,50,80);
  text("opposite",650,50,50,80);



  //left arm behind head
  fill('#ffcc99');
  stroke('#ffb366');
  strokeWeight(5);
  rect(350,300,20,140);
  //setter
  //head
  fill('#ffcc99');
  circle(400,400,100,100);
  

  if(falling){
    ballMoving = false;
    vbY = vbY +  gameSpeed; // ball falls downward
    if (vbY > 800) {
      falling = false; // stop falling when off-screen
      resetBall(); // reset ball to start position
    }
  }

  if (ballMoving) {
    vbX += (targetX - vbX) * setSpeed;
    vbY += (targetY - vbY) * setSpeed;

    // Stop moving when the ball reaches the target
    if (dist(vbX, vbY, targetX, targetY) < 1) {
      ballMoving = false; 
      falling = true;
    }
  }

  //ball
  noStroke();
  fill('gold');
  circle(vbX, vbY, 75); // Base yellow circle

  // Draw blue bands
  fill('blue');
  ellipse(vbX, vbY - 20, 65, 20); // Top blue band
  ellipse(vbX, vbY + 20, 65, 20); // Bottom blue band

  if(mouseX >= 0 && mouseX <= 300){
    outside = true;
    currentZone = "outside";
  } else {
    outside = false;
  }
  if(mouseX >= 301 && mouseX <= 500){
    middle = true;
    currentZone = "middle";
  } else {
    middle = false;
  }
   if(mouseX >= 501 && mouseX <= 800){
    oppo = true;
    currentZone = "oppo";
  } else {
    oppo = false;
  }

  
  //text("random num debug " + randomNum, 100,100,500,500);
  if(randomNum == 1){
    randomZone = "outside";
  }
  if (randomNum == 2){
    randomZone = "middle";
  }
  if (randomNum == 3){
    randomZone = "opposite";
  }


  fill('white')
  textSize(25);
  fill(255,255,255,playerTextOpacity);
  text(playerText,450,playerTextY,250,250);
  fill(255,255,255);
  text("Score: "+score+"\nTurns elapsed: "+totalTurns,600,600,200,200);
  //text("selected zone = "+ currentZone + "\n clickedZone = " + clickedZone + "\n ball set : "+  ballSet + "\n in hands: "+ inHands + "\nball speed : " + gameSpeed + "\n set speed: "+setSpeed+ "\n vby: "+vbY+ "\n falling: "+falling, 400,550, 300, 250);
  textSize(50);
  text("set to "+ randomZone, 100,650,350,350);
  textSize(25);

//arms
  fill('#ffcc99');
  stroke('#ffb366');
  strokeWeight(5);
  rect(400,300,20,140);

  if (setFalling && vbY < 300) {
    vbY += gameSpeed;
  }
  if (vbY >= 300 && vbX >= 390 && vbX <= 410) {
    inHands = true;
    fill('white')
    noStroke();
    text("Set the ball!", 500, 500, 150, 100);
  }

  if(ballSet && clickedZone !== randomNum){
    gameOver();
  }


  if(clickedZone == randomNum){
    if(clickedZone == 1){
      setOutside();
    }
    if(clickedZone == 2){
      setMiddle();
    }
    if(clickedZone == 3){
      setOppo();
    }
    ballSet = true;
    setCountdown = 5;
  } 

  if(inHands){
    text(int(setCountdown),350,450,100,100);
    setCountdown -= 0.05;
    if(setCountdown <= 0){
      resetBall();
      playerText = "Too slow... - 10"
      setCountdown = 5;
      score -= 10;
    }
  }

  if(mouseClicked){
    playerTextY -= 0.1;
    playerTextOpacity -= 1;
  }

  if(currentZone == "outside"){
    hoverOutside = 150;
  } else {
    hoverOutside = 25;
  }
  if(currentZone == "middle"){
    hoverMiddle = 150;
  } else {
    hoverMiddle = 25;
  }
  if(currentZone == "oppo"){
    hoverOppo = 100;
  } else{
    hoverOppo = 25;
  }
}

function mouseClicked() {
  if (inHands) {
    playerText = "Good timing! +5 ";
    score += 5;
    setFalling = false;
    if(currentZone == "outside"){
      clickedZone = 1;
      ballSet = true;
    } else if(currentZone == "middle"){
      clickedZone = 2;
      ballSet = true;
    } else if(currentZone == "oppo"){
      clickedZone = 3;
      ballSet = true;
    } else {
      clickedZone = null;
    }

    //if (currentZone == "outside" && randomZone == "outside") {
      //setOutside();
      //clickedZone = 1;
      //ballSet = true;
      //if (currentZone == "middle" && randomZone == "middle") {
      //setMiddle();
      //clickedZone = 2;
      //ballSet = true;
    //} else if (currentZone == "oppo" && randomZone == "opposite") {
      //setOppo();
      //clickedZone = 3;
      //ballSet = true;
    //}
  } else if(!inHands){
    score -= 5;
    fill(255,255,255,playerTextOpacity);
    playerText = "Bad timing. -5 ";
  }
}

function setOutside(){
  targetX = 50;
  targetY = 75;
  ballMoving = true;
  inHands = false;
}
function setMiddle(){
  targetX = 370;
  targetY = 50;
  ballMoving = true;
  inHands = false;
}

function setOppo() {
  targetX = 700;
  targetY = 75;
  ballMoving = true;
  inHands = false;
}

function resetBall() {
  vbX = 400;
  vbY = 25;
  inHands = false;
  setFalling = true;
  currentZone = "none";
  targetX = vbX;
  targetY = vbY;
  gameSpeed = gameSpeed + .5;
  setSpeed = setSpeed + 0.02;
  clickedZone = null;
  ballSet = false;
  randomNum = int(random(1,4));
  playerText = "";
  playerTextOpacity = 255;
  playerTextY = 350;
  totalTurns += 1;
}
function setAnim(){

}

function gameOver(){
  fill('grey');
  rect(50,50,600,600);
  restartButton=createButton("Restart");
  restartButton.position(10, height + 20);
  restartButton.mousePressed(window.location.reload())
}
var vbX = 200;
var vbY = 750;
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
var armY = -100;
var gameSpeed = 5;
var setSpeed = 0.1;
var randomZone = null;
var randomNum;
var clickedZone = null;
var ballSet = false;
var score = 0;
var playerText = "";
var playerTextY = 350;
var playerTextOpacity = 255;
var settingTextOpacity = 255;
var setCountdown = 15;
var angle = 0;
var hoverOutside = 100;
var hoverMiddle = 100;
var hoverOppo = 100;
var totalTurns = 0;
let setting;
let startAnim = false;
let setEndAnim = false;
let vbSize = 250;
let firstBall = true;
let throwBall = false;
let ballPeak = false;
let firstStart = true;
let enterGame = false;
let bgImage;
let oneBtnMode = false;
let wasdMode = false;
let tutorial = false;
let quit = false;
let startMenuOpened = true;
let setterX = 400;
let setterY = 400;
let setAnimationPlaying = false;
let consSets = 0;
let showTutorial = false;
let closeT = false;
let settingTextY = 250;


function setup() {
  createCanvas(800,800);
  randomNum = int(random(1,4));
}

function preload(){
  bgImage = loadImage('https://impzay.github.io/creative-coding/unit5/final/haikyu%20gym%20bg.jpg');
}

function draw() {
  if(firstStart){
    startMenuOpen();
  } else if(showTutorial){
     background(bgImage);

  fill('#006266');  
  noStroke();
  rect(150,50,500,125);
  textSize(65);
  noStroke();
  fill("black");
  text("Setter Skills 101",162,90,500,500);
  fill('#d1d8e0');
  text("Setter Skills 101",165,95,500,500);
  
  textSize(25);
  stroke('black');
  fill('white');
  text("The ball will drop from the top of the screen, you have to select which zone you will set the ball to.",150,195,500,500);
  text("once the ball is in the setters hands, you will have a quick countdown so set the ball and dont carry it!",150,295,500,500);
  text("the game will increase in speed as you keep playing, try for a high score!",150,395,500,500);
  text("Click anywhere to start playing! Have fun!",150,495,500,500);



  //button 
  if(mouseX >= 0  && mouseY > 0){
    closeT = true
  }


  } else {
    background('grey');

    //floor
    noStroke();
    fill(193, 134, 45);
    rect(0,400,800,500);
    
    for(let i = 1; i > 50; i++){
      fill(169, 113, 29);
       rect(25,400,10,500);
    }
   
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
    rect(setterX - 50,setterY+armY,20,140);
    noStroke();
    //setter
    //legs
    fill('#ffcc99');
    stroke('#ffb366');
    strokeWeight(3);
    //L
    rect(setterX-25,setterY+120,15,100);
    //r
    rect(setterX + 5,setterY+120,15,100);
    //body
    fill('navy')
    stroke('black');
    strokeWeight(2);
    rect(setterX-25,setterY+50,50,100)
    
    //head
    fill('#ffcc99');
    circle(setterX,setterY,100,100);
    //eyes
    fill('white');
    noStroke();
    circle(setterX - 15,setterY - 20,35,35);
    //pupil
    fill('black');

    //outside pupil
    if(outside){
        circle(setterX - 25,setterY - 30,15,15);
      } else if (middle){
    //middle pupil
    circle(setterX - 15,setterY - 30,15,15);
    } else if (oppo){
    //oppo pupil
    circle(setterX - 7,setterY - 30,15,15);
    } else {
      circle(setterX -15,setterY -20,15,15);
    }
    if(oneBtnMode){

    }

    //wasdmode
    if(wasdMode){
      if(!keyIsDown){
        setterX = setterX
        setterY = setterY
      } 

        if(keyIsDown(65)){
          setterX -= 2;
        }
        if(keyIsDown(68)){
          setterX += 2;
        }
        if(keyIsDown(87)){
          setterY -= 1;
        }
        if(keyIsDown(83)){
          setterY +=1;
        }
    }

    //calculating the first ball throw
    if(throwBall){
      vbSize -= 1
      vbX += 1;

      if(!ballPeak){
        vbY -= 5;
      } 
      if(vbSize <= 75){
        vbSize += 1;
      }
    } 

    if(falling){
      ballMoving = false;
      vbY = vbY +  gameSpeed; // ball falls downward
      if (vbY > 800) {
        falling = false; // stop falling when off-screen
        resetBall(); // reset ball to start position
      }
    }


    //calculates ball movement when setting and falling after set
    if (ballMoving) {
       settingTextOpacity = 255;
      vbX += (targetX - vbX) * setSpeed;
      vbY += (targetY - vbY) * setSpeed;

      //stops moving when the ball reaches the target
      //calculated distance the volleyball is from the target and if its less than one, its at the target
      if (dist(vbX, vbY, targetX, targetY) < 1) {
        ballMoving = false; 
        falling = true;
        ballSet = false;
      }
    }

    //ball
    noStroke();
    fill('gold');
    circle(vbX, vbY, vbSize); //base yellow circle

    fill('blue');
    ellipse(vbX, vbY, vbSize/1.1, vbSize/4); //blue band


    //setting zones hover
    if(mouseX >= 0 && mouseX <= 300 && mouseY < 400){
      outside = true;
      currentZone = "outside";
    } else {
      outside = false;
    }
    if(mouseX >= 301 && mouseX <= 500 && mouseY < 400){
      middle = true;
      currentZone = "middle";
    } else {
      middle = false;
    }
     if(mouseX >= 501 && mouseX <= 800 && mouseY < 400){
      oppo = true;
      currentZone = "oppo";
    } else {
      oppo = false;
    }

  //setting streak stuff
    if(consSets >= 20){
      fill(242, 225, 90,settingTextOpacity);
      text("D1 SETTER!!!!",150,settingTextY,500,500);
    } else if(consSets >= 10){
      fill(242, 225, 90,settingTextOpacity);
      text("clean sets!!",150,settingTextY,500,500);

    } else if(consSets >= 5){
      noStroke();
      fill(242, 225, 90,settingTextOpacity);
      text("butter!",150,settingTextY,500,500);
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


    fill('white') //text near player
    textSize(25);
    fill(255,255,255,playerTextOpacity);
    text(playerText,450,playerTextY,250,250);
    fill(255,255,255);
    text("Score: "+score+"\nTurns elapsed: "+totalTurns + "\n Setting Streak: "+ consSets ,600,600,200,200);
    //text("selected zone = "+ currentZone + "\n clickedZone = " + clickedZone + "\n ball set : "+  ballSet + "\n in hands: "+ inHands + "\nball speed : " + gameSpeed + "\n set speed: "+setSpeed+ "\n vby: "+vbY+ "\n falling: "+falling, 400,550, 300, 250);
    textSize(50);
    if(firstBall){
      text("click to throw ball!", 225,500,450,350);
    } else{
    text("set to ", 105,650,450,350);
    stroke('green');
    strokeWeight(25);
    text( randomZone, 255,650,450,350);
  }
    textSize(25);

  //right arm
    fill('#ffcc99');
    stroke('#ffb366');
    strokeWeight(5);
    rect(setterX,setterY + armY,20,140);

    if (setFalling && vbY <= 300) { //drop the volleyball
      vbY += gameSpeed;
      ballPeak = true;
    }

    //calculates hitbox of setters hands
    if(firstBall && vbY >= 250 && vbX >= 350 && vbX <= 430){
      inhands = true;
    }
      else if (vbY >= 250 && vbX >= 390 && vbX <= 410) { //condition statement for hitbox of setters hands 
      inHands = true;
    }


    //incorrectly setting ball 
    if(ballSet && clickedZone !== randomNum){
      consSets = 0;
      playerText  = "wrong zone... - 15."
      score =- 15;
      resetBall();
      }


    //calls function when setting different zones
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
      settingTextOpacity -= 5;
      settingTextY -= .2;
      ballSet = true;
      setCountdown = 5;
    } 
    //set countdown and action control 
    if(inHands){ //if the ball is in setters hands, start the set countdown 
      throwBall = false
      firstThrow = false;
      noStroke();
      fill('white');
      text(int(setCountdown),350,450,100,100);
      setCountdown -= 0.02;
      if(setCountdown <= 0){//reset ball and minus score if you carried the ball.
        resetBall();
        playerText = "Too slow... - 10"
        setCountdown = 5;
        score -= 10;
        consSets = 0;
      }
    }

    //setting animation handler
      if(setAnimationPlaying){
          setterY -= 2;
          if(setterY <= 350 ){
            setAnimationPlaying = false;
            setEndAnim = true;
          }
        }
      if(setEndAnim){
        setterY += 3;
      }
      if(setEndAnim  & setterY >= 401){
          setterY == setterY;
          setEndAnim = false;
      }
        

    if(mouseClicked){
      
        playerTextY -= 0.1;
        playerTextOpacity -= 1;
      

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
  }
}

function mouseClicked() {
  if(startMenuOpened && oneBtnMode){
    gameMenuOpen();
  } else if (startMenuOpened && wasdMode){
    playWasdMode();
  } else if (startMenuOpened && tutorial){
    console.log("tutorial loading");
    loadtutorial();
  } else if (startMenuOpened && quit){
    noLoop();
  } else if(closeT && showTutorial){
    closeTutorial();
    gameMenuOpen();
  }
  if(firstBall && !startMenuOpened){
      //tutorial();
      throwFirstBall();
    } else {
  if (inHands) {
    setting = true;
    playerText = "Good timing! +5 ";
    consSets  = consSets + 1;
    score += 5;
    setFalling = false;
    

    //Play setting animation
    setAnimationPlaying = true;
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
  }
}

  if(!inHands && !firstThrow){
    score -= 5;
    consSets  = 0;
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
  vbY = -75;
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
  settingTextY = 250;

  playerTextY = 350;
  totalTurns += 1;
  setting = false;

}

function throwFirstBall(){
  firstBall = false;
  throwBall = true;
}

function startMenuOpen(){
  oneBtnMode = false;
  wasdMode = false;
  tutorial = false;
  quit = false;
  background(bgImage);

  fill('#006266');  
  noStroke();
  rect(150,50,500,125);
  textSize(65);
  noStroke();
  fill("black");
  text("Setter Skills 101",162,90,500,500);
  fill('#d1d8e0');
  text("Setter Skills 101",165,95,500,500);

 let buttonColor1 =   'black';
 let buttonColor2 =   'black';
 let buttonColor3 =   'black';
 let buttonColor4 =   'black';


 //conditionals for buttons
  if(mouseX >= 100 && mouseX <= 150 && mouseY >= 250 && mouseY <=300){
    buttonColor1 = 'white';
    oneBtnMode = true;
  } else if (mouseX >= 100 && mouseX <= 150 && mouseY >= 350 && mouseY <=400){
    buttonColor2 = 'white';
    wasdMode = true;
  } else if(mouseX >= 100 && mouseX <= 150 && mouseY >= 450 && mouseY <=500){
    buttonColor3 = 'white';
    tutorial = true;
  } else if(mouseX >= 100 && mouseX <= 150 && mouseY >= 550 && mouseY <=600){
    buttonColor4 = 'white';
    quit = true;
  }
  //one button mode button
  fill(buttonColor1);
  stroke('darkGrey');
  strokeWeight(6);
  rect(100,250,50,50);
  fill('#d1d8e0');
  stroke('black');
  textSize(40);
  text("one button mode", 160, 265, 500,500);

  //wasd mode button
  fill(buttonColor2);
  stroke('darkGrey');
  strokeWeight(6);
  rect(100,350,50,50);
  fill('#d1d8e0');
    stroke('black');
  textSize(40);
  text("wasd mode", 160, 365, 500,500);

  //quit button
  fill(buttonColor4);
  stroke('darkGrey');
  strokeWeight(6);
  rect(100,550,50,50);
  fill('#d1d8e0');
  stroke('black');
  textSize(40);
  text("quit the game", 160, 565, 500,500);

  //how do i play button
  fill(buttonColor3);
  stroke('darkGrey');
  strokeWeight(6);
  rect(100,450,50,50);
  fill('#d1d8e0');
    stroke('black');
  textSize(40);
  text("how do i play?", 160, 465, 500,500);

}

function startMenuClosed(){
  startMenuOpened = false;
  firstStart = false;
  firstBall = false;
}

function gameMenuOpen(){
  startMenuOpened = false;
  firstBall = true;
  firstStart = false;
}

function loadtutorial(){
  startMenuClosed();
  showTutorial = true;
}
function closeTutorial(){
  startMenuOpened = true;
  showTutorial = false;
}
function playWasdMode(){
  startMenuOpened = false;
  firstStart = false;
  wasdMode = true;
}
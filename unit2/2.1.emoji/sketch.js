/*
 * I chose the embarrased emoji because thats probably the one that i use the most. 
 * I apporached this making the base emoji face and then layering all the shapes on top of it.
 * I had to code the blush above the eyes so it could be layered behind, creating a more realisitc effect.
 */

function setup() {
  // create a canvas
  createCanvas(800, 800);

  // disable animation
  noLoop();
}
teethX = 540;

function draw() {
  background(220);
  rectMode(CENTER);

//base emoji face
  stroke(255, 128, 51);
  fill(255, 238, 51);
  circle(200,200,225); 
  //blush
  stroke('pink');
  strokeWeight(5);
  fill('pink');
  ellipse (150,240,60,40,50);
  ellipse(250,240,60,40,50);
//eyes
  stroke('white');
  fill('white');
  circle(150,190,75);
  circle(250,190,75);
//pupils
  stroke('black');
  fill('black');
  circle(150,190,25);
  circle(250,190,25);
//eyebrows
  stroke('brown');
  strokeWeight(10);
  fill('brown');
  curve(120,160,125,140,170,130,170,160);
  curve(220,160,225,130,270,140,270,160);
//mouth
  strokeWeight(10);
  fill(195, 126, 62);
  stroke(195, 126, 62)
  line(180,280,220,280); 
//hand with thumbs up
  strokeWeight(1);
  stroke(255, 128, 51);
  fill(255, 238, 51);
  ellipse(85,240,30,50);
  ellipse(80,290,65,105);
//finger lines
  stroke('black');
  line(73,260,110,265);
  line(73,285,110,290);
  line(73,310,110,315);

//Emoji number 2
//skull head
  noStroke();
  fill(255,255,255);
  ellipse(600,200,225,195); 
  square(600,225,180,10);
  rect(600,255,100,250,10);
//eyes
  fill(10,10,10);
  circle(565,260,50);
  circle(560,255,60);
  circle(635,260,50);
  circle(640,255,60);
//nostrils
  rotate(50);
  ellipse(505,455,20,30);
  rotate(-100);
  ellipse(655,140,20,30);
  rotate(50);
//teeth
  stroke(50,55,50);
  strokeWeight(0.5);
  fill(250,250,250);
  //for loop to repeat the teeth
    for (var i = 1; i <= 5; i++) {
      teethX = teethX + 20;
      square(teethX,351,20,5);
      square(teethX,369,20,5);
    }
}

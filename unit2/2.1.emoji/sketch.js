/*
 * I chose the embarrased emoji because thats probably the one that i use the most. 
 * I apporached this making the base emoji face and then layering all the shapes on top of it.
 * I had to code the blush above the eyes so it could be layered behind, creating a more realisitc effect.
 */

function setup() {
  // create a canvas
  createCanvas(400, 400);

  // disable animation
  noLoop();
}

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
}
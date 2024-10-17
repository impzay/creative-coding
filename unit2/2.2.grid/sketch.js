/*
 * Isaiah Padgett
 * I wanted to do a grid pattern similar to binary code like something from the matrix. I took out the noLoop function to give it animation because i think it looks more interesting.
 */

function setup() {
  // create a canvas
  createCanvas(1200, 1200);
  frameRate(random(1,10));
  
}


function draw() {
  //variable for a random size of shape
  var shapeSize = random(50,70);

//background color
  background('gray');
//translates the circles to the right and down 100 pixels each
  translate(100,100);

//for loop and nested for loop to loop the circle into a 8x8 grid
  for(let x = 0; x < 8; x++){
    for(let y = 0; y < 8; y++){
      push();
      //changes stroke color to lime
      stroke('lime');
      strokeWeight(random(10));
      fill('green');
      translate(x * 100, y * 100);
      circle(20,20,shapeSize);
      pop();

    }
  }
}
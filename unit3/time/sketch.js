function setup() {
  createCanvas(800, 800);
  var backgroundColor = (220,0,0);
}

  

function draw() {
  background('lightslategray');

  let s = map(hour(), 0,16, 875, -100);
  let m = map(hour(), 16,23, 875, -100);
  let g = map(second(), 0,60,950,-150);
  let ry = map(second(), 55,60,950,-150);
  let rx = map(second(), 55,60,0,950);
  let px = map(minute(), 0, 60,800,0);
  //sun
  stroke(255, 187, 51);
  fill(255, 187, 51);
  circle(s,350,200);

  //moon
  noStroke();
  fill(255,255,255);
  circle(m,350,200);
  fill('lightslategray');
  circle(m+45,350,150);

  //balloon
  fill('black');
  rect(400,g,2,55);
  rect(650,g-55,2,55);
  fill('pink');
  circle(650,g-55,50,50);
  fill('red');
  circle(400,g,50,50);
  
  //shooting star
  fill('gold');
  circle(rx,ry,15,35);

  //plane
  fill('white');
  rect(px,200,35,15);
  //wings
  rect(px+15,200-2,40,5);
  //cockpit
  fill('skyblue');
  rect(px-10,200+2,15,10);


  //grass
  fill('green');
  rect(0,785,800,15);
  //debug
  //noStroke();
  //fill('black');
  //text("timestamp: " + Date.now(),50,50);
  //text("second: " + second(), 50, 65);
  //text("minute: " + minute(), 50, 80);
  //text("hour: " + hour(), 50, 95);
  //text("day: " + day(), 50, 110);
  //text("month: " + month(), 50, 125);
  //text("year: " + year(), 50, 140);
}
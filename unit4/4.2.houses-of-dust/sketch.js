var poem = 's';
var fish = tracery.createGrammar(
{
  "material":[
"SAND",
"DUST",
"BUSS",
"FISH",
"YOSHI",
"SEAN"
],
  "origin": "A HOUSE OF #material#"
}
);

poem = fish.flatten("#origin#");

function setup() {
  createCanvas(800, 800);
  noLoop();
}

function draw() {
  background(220);

  textSize(17);
  stroke(2);
  text(poem,50,50)



}
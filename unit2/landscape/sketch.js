//function preload(){
 // load the image from a file
	//img = loadImage();
//}

function setup() {
  
  // create the canvas
  createCanvas(800, 800);
  noLoop();

}

function draw() {
  let blue = lerpColor(color(14, 211, 237),color(14, 21, 237),0.5);

  //x and y value for loops to get the entire canvas covered
  for (x = 0; x < width; x++){
    for (y = 0; y < height; y++){
      var noiseValue = noise(x /100,y/100); // sets the noise value to the width and height divided by 100 to zoom into the noise space so i can discern what shapes look like terrain
      
      var terrainColor;
      if (noiseValue < 0.4){
        terrainColor = blue; //blue ocean
      } else if (noiseValue < 0.5){
        terrainColor = color(247, 238, 136); //yellow sand
      } else if (noiseValue < 0.7){
        terrainColor = color(52, 235, 70); //green grass
      } else {
        terrainColor = color(0, 100, 100); //mountains
      }
      //sets the pixels to the whole screen and the terrainColor
      set(x,y,terrainColor);
    }
  }
  updatePixels();//updates the pixels from the set function
}

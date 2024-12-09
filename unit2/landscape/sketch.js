/*
 *  the main goal of this program was to create a generative landscape/terrain that you are able to determine what the topography of the map looks like, using perlin noise.
        I chose to do this because I have been learning game development by myself and was wondering how procedural generatoion worked with maps and things like that. So i looked up a bunch of videos about it and wanted to make something similar in p5.js myself testing what i learned from those videos.
 * - i watched this video for help on how to understand perlin noise https://www.youtube.com/watch?v=ZoqPQ0sFo6A&t=3s&ab_channel=RachelfTech
  */

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
      var noiseValue = noise(x/100,y/100); // sets the noise value to the width and height divided by 100 to zoom into the noise space so i can discern what shapes look like terrain
      
      var terrainColor;
      if (noiseValue < 0.4){ // using the noise value as a height map, i changed the color to different "heights" of the noise value
        terrainColor = blue; //blue ocean
      } else if (noiseValue < 0.5){
        terrainColor = color(247, 238, 136); //yellow sand
      } else if (noiseValue < 0.8 ){
        if(random(0.05,100)<0.1){
          terrainColor = 'brown'; // these brown dots are settlements from the people that inhabit this land
        } else {
        terrainColor = color(52, 235, 70); //green grass
      } 
    } else {
        terrainColor = color(0, 100, 100); //mountains/100
      }
     
       //sets the pixels to the whole screen and the terrainColor
      set(x,y,terrainColor);
    }
  }
  updatePixels();//updates the pixels from the set function

}

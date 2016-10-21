var x = 0;
var y = 0;

function setup() {
  createCanvas(500,500); 
  rectMode(CORNERS);
}

function draw() {

  background(232,228,232);
  noFill();
  stroke(0);
  beginShape(LINES);
    for (x = 0; x < width; x++) {
      for (y = 0; y < height; y++) {
        vertex(3*x, y/4);
        vertex(2*x, y/2);
        vertex(x, y);
        x++;
        y++;
      }
    }
endShape();

  
}
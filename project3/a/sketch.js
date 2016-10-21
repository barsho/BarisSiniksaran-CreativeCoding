var x = 0;
var y = 0;

function setup() {
  createCanvas(500,500); 
  rectMode(RADIUS);
}

function draw() {

  background(212, 71, 56);
  noFill();
  stroke(255);
  beginShape(TRIANGLE_FAN);
    for (x = 0; x < width; x++) {
      for (y = 0; y < height; y++) {
        vertex(x, y*2);
        vertex(x*2, y);
        x++;
        y++;
      }
    }
endShape();

  
}
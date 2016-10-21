var x = 0;
var y = 0;

function setup() {
  createCanvas(500,500); 
  rectMode(CENTER);
}

function draw() {

  background(0);
  noFill();
  stroke(0, 207, 248);
  beginShape(QUAD_STRIP);
    for (x = 0; x < width; x++) {
      for (y = 0; y < height; y++) {
        vertex(x/2, y*2);
        vertex(x*2, y/2);
        vertex(x+5, y*2);
        vertex(x, y-6);
        x++;
        y++;
      }
    }
endShape();

  
}
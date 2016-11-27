function setup() {
  createCanvas(300, 300);
  background(0);
  colorMode(RGB);
  from = color(196, 51, 26);
  to = color(1, 3, 116);
}

function draw() {
  for (var i = 0; i <= frameCount; i++) {
    var c = lerpColor(from, to, i / frameCount);
    stroke(c);
    noFill();
    strokeWeight(1);
    translate(i / frameCount * 10, i / 10 * frameCount);
    rotate(radians(i * frameCount));
    triangle(300, 300, 20, 12, 20, 175);
  }
}
var h = 100;
var s = 100;
var b = 100;

var rectStep = 50;
function setup() {
  createCanvas(600,400);
}

function draw() {
  background(255);
  rectStep = max(10, mouseX);
  colorMode(HSB, 334,255,255);
  for(var x=0; x < width; x +=rectStep){
    for(var y =0; y < height; y+=rectStep){
    noStroke();
    fill(h+x % 180,s+x % 1,b+x % 55);
    rect(x,y,rectStep,rectStep);
    }
  }
}

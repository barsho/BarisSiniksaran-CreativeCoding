var h = 65;
var s = 30;
var b = 57;

var rectStep = 50;
function setup() {
  createCanvas(300,600);
}

function draw() {
  background(255);
  rectStep = max(50, mouseY);
  colorMode(HSB, 360,255,255);
  for(var x=0; x < width; x +=rectStep){
    for(var y =0; y < height; y+=rectStep){
    noStroke();
    fill(h+y % 320,s+y % 120,b+y % 255);
    rect(x,y,rectStep,rectStep);
    }

  }
}

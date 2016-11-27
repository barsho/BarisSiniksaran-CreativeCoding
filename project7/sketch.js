var w1 = 9.0;
var w2 = 261.0;
var p = 0;
var angle = 0.0;
var amplitude = 300;
function setup(){
  createCanvas(1200,720);
  background(0);
    colorMode(HSB);
  from = color(88, 121, 56);
  to = color(13, 65, 98);
}
function draw(){
  if(p > 10000){
    noLoop();
  }
  noFill();
  strokeWeight(0.1);
  translate(width/2, height/2);
  beginShape();
  for(var i=0; i < p; i++){
  var c = lerpColor(from, to, i/500);
  stroke(c);
  angle = i / w1 * TWO_PI;
  var y = sin(angle*2)* amplitude;
  angle = i * w2 / PI;
  var x = sin(angle/2)* amplitude;
  vertex(x,y);
  }
endShape();
p++;
}
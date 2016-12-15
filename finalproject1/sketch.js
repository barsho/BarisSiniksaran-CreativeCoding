var w1 = 20.0;
var w2 = 30.0;
var p = 15;
var angle = 35.0;
var amplitude = 256;
var h1 = 192;
var s1 = 225;
var b1 = 39;
var h2 = 3;
var s2 = 51;
var b2 = 206;
var a = 250;
function setup(){
  createCanvas(1350,720);
  background(0);
    colorMode(HSB);
  from = color(h1, s1, b1);
  to = color(h2, s2, b2);

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
  var c = lerpColor(from, to, i*100);
  stroke(c);
  angle = i / w1 * TWO_PI;
  var y = sin(angle*5)* amplitude*a;
  angle = i * w2 / PI;
  var x = cos(angle*a)* amplitude;
  vertex(x,y);
  }
endShape();
p++;
  if (keyIsDown(LEFT_ARROW))
  push();  
  w1 += 200;
  if (keyIsDown(RIGHT_ARROW))
  w1 -= 200;
  if (keyIsDown(UP_ARROW))
  a -= 100;
  if (keyIsDown(DOWN_ARROW))
  a += 100;
    pop();


textSize(18);
  textStyle(NORMAL);
  textAlign(LEFT);


  translate(-450, windowHeight/2-450);
  text("abstract line drawing\n\n"+"mouseclick changes the color\n"+"up/down arrow keys change the angle\n"+"left/right arrow keys change the wavelength\n\n\n", -220, -200);

  
}
function mousePressed() {
  to = color(random(255),random(255),random(255));
}
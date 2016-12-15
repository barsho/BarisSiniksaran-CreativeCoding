var waveLengthOne = 600.0;
var waveLengthTwo = 460.0;
var pointCount = 0;
var angle = 0.0;
var amplitude = 200;
function setup(){
  createCanvas(windowWidth,windowHeight);

}
function draw(){
  background(0);
  if(pointCount > 10000){
    noLoop();
  }
  fill(0);
  strokeWeight(1);
  stroke(random(255), random(255), random(255));
  translate(width/2, height/2);
beginShape();
  for(var i=0; i < pointCount; i++){
  angle = i / waveLengthOne * TWO_PI;
  var y = sin(angle)* amplitude;
  
  angle = i / waveLengthTwo * TWO_PI;
  var x = sin(angle)* amplitude;
    
  rect(x,y,55,55); 
  }
endShape();
pointCount++;
}
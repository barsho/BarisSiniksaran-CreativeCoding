//Kevin's notes: nice work!  comments inline...

var zombieMode = false;
var redEye = 0;
var bgColor = 255;
var translateX = 200;
var translateY = 200;
var legSpace = 255;
var footColorRed = 0;

function setup() {
  createCanvas(500,500); 
}

function draw(){
  background(bgColor);
  translate(translateX,translateY);
	//instead of always passing in true, pass in the zombieMode variable
	//that way you can switch the mode on and off with a click event like below
	alpaca(true);
}

//suggested function to change the zombieMode
function mousePressed(){
  zombieMode = !zombieMode;
}

function alpaca(zombieMode){
	fill(238,225,196);
  triangle(-25, -60, -35, -110, 20, -60);//left ear
  triangle(25, -60, 35, -110, -20, -60);//right ear
  fill(0);
  triangle(-19, -55, -29, -100, 20, -50);//left ear dark 
  triangle(19, -55, 29, -100, -20, -50);//right ear dark 
  fill(footColorRed, 0, 0);
  ellipse(-21,122,12,12);//left foot
  ellipse(20,122,-12,12);//right foot
  ellipse(74,122,12,12);//left foot (back)
  ellipse(106,122,-12,12);//right foot (back)
  
  fill(254,251,243);
	rect(-27,-10,12,130);//left lower leg
	rect(13,-10,12,130);//right lower leg  
	rect(68,90,12,30);//left lower leg (back)
	rect(99,90,12,30);//right lower leg (back)
	fill(238,225,196);
	noStroke();
  rect(25,0,60,70);//body
  ellipse(85,35,70,70);//butt
	rect(60,30,35,60);//left upper leg (back)
	rect(85,30,35,60);//right upper leg (back)
	ellipse(75,90,30,30);//left knee (back)
	ellipse(105,90,30,30);//right knee (back)
  fill(255);
	fill(238,225,196);
	rect(-35,-40,35,130);//left upper leg
	rect(0,-40,35,130);//right upper leg
	ellipse(-20,90,30,30);//left knee
	ellipse(20,90,30,30);//right knee
	fill(legSpace);
	ellipse(0,80,10,10);//white space btw. legs
	rect(-5,78,10,20);//white space btw. legs
	fill(238,225,196);
	stroke(0);
  ellipse(0, -50, 70, 90);//head
	fill(redEye, 0, 0);
	ellipse(-14,-65,8,8);//left eye
	ellipse(14,-65,8,8);//right eye
	fill(0);
	ellipse(-16,-67,11,4);//left eyelashes
	ellipse(16,-67,11,4);//right eyelashes
  fill(254,251,243);
  ellipse(0.5,-49,20,25);//nose & mouth
  stroke(0);
	line(0,-50,-4,-55);//nose
	line(0,-50, 4,-55);//nose
	line(0,-50, 0,-46);//mouth
  line(-5,-46,5,-46);//mouth

  if (zombieMode == true) {
      bgColor = 0;
      redEye = 255;
      translateX = mouseX;
      translateY = mouseY;
      legSpace = 0;
      footColorRed = 255;
  } else {
      bgColor = 255;
      redEye = 0;
      translateX = 200;
      translateY = 200;
      legSpace = 255;
      footColorRed = 0;
    
  }
}
//this function call not needed here.
alpaca();

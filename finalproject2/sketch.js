var loaded = false;

function preload(){
	var script = document.createElement( 'script' );
  	script.src = 'https://cdnjs.cloudflare.com/ajax/libs/rita/1.1.51/rita-full.js';
  	script.onload = function(){
    	loaded = true;
       lexicon = new RiLexicon();
    }
    document.body.appendChild( script );
}

var lexicon;
function setup() {
	createCanvas(960, 720);
	background(0);
  textStyle(BOLD);
	textSize(18);
	fill(103,146,78);
	textAlign(CENTER, CENTER);
	textAlign(CENTER, CENTER);
	text("Not into reading your daily horoscope?",width/2, height/2-40);
	
  textSize(32);
	text("VIEW YOUR DAILY FORTUNE AS A GRAPHIC POSTER.", width/2, height/2);
  textSize(18);
  text("Click away until you create the best one!", width/2, height/2 +40);
text("[ Click here to start. ]", width/2, height/2 +140);
  
    colorMode(RGB);
  from = color(26, 12, 18);
  to = color(9, 178, 39);
}

function draw (){

}

function mousePressed(){

if (loaded){

  
  
  textSize(random(18, 100));
  textStyle(BOLD);
  fill(random(255),random(255),random(255));
  var output =
    "Today, you will " +
	lexicon.randomWord("vb") + " a " + 
    lexicon.randomWord("jj") + " \n" +
	lexicon.randomWord("nn") + " while " +
	lexicon.randomWord("vbg") + " on a " +
    lexicon.randomWord("jj") + " " +
	lexicon.randomWord("nn") + "."
;
  background(0);
  text(output, 10, 10, width, height-150);
}
   push();
 for (var i = 0; i <= frameCount; i++) {
    var c = lerpColor(from, to, i / frameCount);
    stroke(c);
    noFill();
    strokeWeight(1);
    translate(i + 35 / frameCount, i / frameCount);
    rotate(radians(i * frameCount));
    triangle(windowWidth, windowHeight, 20, 10, 20, 15);
  } 
pop();
    }
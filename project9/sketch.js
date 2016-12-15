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
	createCanvas(700, 700);
	background(0);
	textSize(18);
	fill(180, 37, 126);
	textAlign(CENTER, CENTER);
	textAlign(CENTER, CENTER);
	text("Click to generate an",width/2, height/2);
	textStyle(BOLD);
	text("[   Emily Dickinson   ]", width/2, height/2 +25);
	textStyle(NORMAL);
	text("poem", width/2, height/2 + 50);
}

function draw (){
}

function mousePressed(){

if (loaded){
  var output =
    //first line, 5 syllables
    "'A Summer " +
	lexicon.randomWord("nn", 2) + "' " + 
	"by Emily Dickinson\n\n" + 
    "A " + 
    lexicon.randomWord("nn", 1) + 
    " fell on the " + 
    lexicon.randomWord("nn", 2) + " " +
    lexicon.randomWord("nn", 1) + "," + "\n" +
    "Another on the " +
    lexicon.randomWord("nn", 1) + ";" + "\n" +
    "A half a dozen kissed the " +
    lexicon.randomWord("nn", 1) + "s," + "\n" +
	//'nns' penn tag currently not working, therefore I added an 's' to the end of the plural word
    "And made the " +  
    lexicon.randomWord("nn", 2) + 
    "s laugh." + "\n" + "\n" +
    "A few went out to help the " +
    lexicon.randomWord("nn", 1) + "," + "\n" +
    "That went to help the " +
    lexicon.randomWord("nn", 1) + "." + "\n" +
    "Myself conjectured, Were they " +
    lexicon.randomWord("nn", 1) + "s,\n" +
    "What " + 
    lexicon.randomWord("nn", 3) + "s could be!\n\n\n\n" + "(keep clicking to generate new poems by shuffling the nouns)";
  background(0);
  text(output, 10, 10, width, height-250);
}
    }
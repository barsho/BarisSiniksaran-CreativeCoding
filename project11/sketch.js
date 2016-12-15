var table;
var aveTemperatureData = [];

function preload() {
  table = loadTable("dishesperday.csv", "csv", "header");
}
function setup() {
createCanvas(1200, 700);
  textSize(14);
  textAlign(CENTER);
}

function draw(){
  background(80);
  fill(255, 200, 0);
  translate(windowWidth/2 -250,windowHeight/2 - 100);
  text("Number of dishes washed each day this week:", 0, -50);
  textStyle(BOLD);
  for(var c =0; c < table.getColumnCount(); c++){
    for(var r =0; r < table.getRowCount(); r++){
      push();  
      var cellData = table.getString(r, c);
      if(cellData != undefined){
        if(c < 1){
          translate(0, r * 30);
        }
        else {
          translate( (c * 100) + 50, r * 30);
        }
        text(cellData , 0,0 );
      }
      pop();
    }
  }
}
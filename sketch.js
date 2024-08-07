let collectionOfColors = ["rgb(249,49,49)","rgb(232,75,102)","pink","rgb(160,92,160)","magenta","purple"];
let walkingTeam = [];
//for each colour of my CollectionOfColors
for(let t=0; t<collectionOfColors.length; t++){
  //populate walkingTeam with nodes of type walker
  walkingTeam.push( new walker(200,200,5,collectionOfColors[t]) );
}


function setup() {
  createCanvas(400, 400);
  background(0);
  frameRate(20)
  
}

function draw() {
  //make each team member walk
  for(let t=0; t<walkingTeam.length; t++){
    walkingTeam[t].doOneStep();
  }
}
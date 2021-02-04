var canvas;
var music;

var box1,box2,box3,box4;
var movingbox;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(470,400);

    //create 4 different surfaces
      box1 = createSprite(100,380,90,17)
      box1.shapeColor = "green"
      box2 = createSprite(200,380,90,17)
      box2.shapeColor = "red"
      box3 = createSprite(300,380,90,17)
      box3.shapeColor = "blue"
      box4 = createSprite(400,380,90,17)
      box4.shapeColor = "yellow"
    //create box sprite and give velocity
      movingbox = createSprite(100,220,30,30)
      movingbox.bounce(box1,box2,box3,box4)
      movingbox.velocityY = 1;
      movingbox.shapeColor = "cyan"
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
     
       
    
        isTouching();
       drawSprites();
    
}  
      function isTouching(){

     
    if(movingbox.x - box1.x < box1.width/2 + movingbox.width/2 
        && box1.x - movingbox.x < box1.width/2 + movingbox.width/2 
        && movingbox.y - box1.y < box1.height/2 + movingbox.height/2
        && box1.y - movingbox.y < box1.height/2 + movingbox.height/2){
    movingbox.shapeColor = "cyan";
    box1.shapeColor = "black";
        }
        else{
       movingbox.shapeColor = "cyan"
       box1.shapeColor = "green"

        }


      }


      function bounceOff(box1,box2){
      if(box1.x - box2.x < box2.width/2 + ob){


      }

      }
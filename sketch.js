var ground,count=0,bg,monkey;
var monkeyimg,bananaimg,bgimg;
var obstaclesimg;

function preload(){
  monkeyimg=loadImage("Monkey_01.png")
  bananaimg=loadImage("banana.png")
  obstaclesimg=loadImage("stone.png")
  bgimg=loadImage("jungle.jpg")
  
}



function setup(){


ground=createSprite(200,390,400,20);
ground.shapeColor = "white";
var count=0;

bg=createSprite(200,200);
bg.addImage(bgimg);
bg.velocityX=-6;


// add image of monkey
monkey = createSprite(75,350);
monkey.addImage(monkeyimg);
monkey.scale=0.15;


var bananaGroup = createGroup;

var obstacleGroup = createGroup;

}



function draw(){
  background(255);
  
 if(keyDown("space") && monkey.y >= 260 ){
      monkey.velocityY = -12 ;
 }
 monkey.velocityY = monkey.velocityY + 0.8; 
monkey.collide(ground);
  drawSprites();
  food();
  obstacle();
 count=count+round(World.frameRate/60);
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
    if (bg.x < 0){
      bg.x = ground.width/2;
    }
 
}
  
function food(){
  if(World.frameCount % 80 === 0){
  var banana = createSprite(120,200);
 banana.addImage(bananaimg);
  banana.lifetime=80;
  //bananaGroup.add("banana");
  banana.velocityX=-2;
  banana.scale=0.1;
  }
}


function obstacle(){
  if(World.frameCount % 60 === 0) {
    var obstacle = createSprite(400,365,10,40);
    obstacle.velocityX = - (6 + 3*count/100);
    obstacle.scale=0.1;
    
    //generate random obstacles
   obstacle.addImage(obstaclesimg);
    
    //assign scale and lifetime to the obstacle           
    obstacle.lifetime = 70;
    //add each obstacle to the group
  
    obstacle.lifetime=300;
  }
}
  
  
  
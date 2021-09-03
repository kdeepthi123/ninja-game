function preload(){

    jumpingAnimation = loadAnimation(
        'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/redNinja/jump00.png', 
        'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/redNinja/jump01.png', 
        'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/redNinja/jump02.png', 
        'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/redNinja/jump03.png', 
        'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/redNinja/jump04.png', 
        'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/redNinja/jump05.png', 
        'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/redNinja/jump06.png', 
        'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/redNinja/jump07.png', 
        'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/redNinja/jump08.png',     
        'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/redNinja/jump09.png'    
      );
      runningAnimation = loadAnimation('ninja1.png','ninja2.png','ninja3.png','ninja4.png','ninja5.png');
      gameBackground = loadImage('https://la-wit.github.io/build-an-infinite-runner/build/images/environments/industrialBackground.png');
platformBackground = loadImage('https://la-wit.github.io/build-an-infinite-runner/build/images/environments/industrialPlatform.png');
gameFont = loadFont('https://la-wit.github.io/build-an-infinite-runner/build/fonts/ARCADE_R.TTF');
gameMusic = loadSound('https://la-wit.github.io/build-an-infinite-runner/build/sounds/generic-game-loop-4.mp3');
gameOverMusic = loadSound('https://la-wit.github.io/build-an-infinite-runner/build/sounds/over.mp3');
jumpSound = loadSound('https://la-wit.github.io/build-an-infinite-runner/build/sounds/jump07.mp3');
      diamond=loadImage("diomond.png")
      gun=loadImage('gun.png')
      gold=loadImage('gold.png')
      cash=loadImage('cash.png')
      crown=loadImage('crown.png')
}
function setup(){
createCanvas(windowWidth,windowHeight);
gameBackground1=createSprite(width/2,height/2)
gameBackground1.addImage(gameBackground)
gameBackground1.scale=1.7

redNinja=createSprite(150,height-20)
redNinja.addAnimation('run',runningAnimation)
redNinja.scale=0.45

ground=createSprite(width/2,height-20,2*width,20)
//ground.visible=false
}
function draw(){
  gameBackground1.velocityX=-4
  if(gameBackground1.x<600){
    gameBackground1.x=width/2
  }

  if(keyDown('space')){
    redNinja.velocityY=-5
  }
  if(keyDown('g')){
   
  }
  redNinja.velocityY += 0.5
  redNinja.collide(ground)
  getTreasure()
drawSprites();
}

function showGun(){
gun1= createSprite (redNinja.x+10,redNinja.y+20 )
gun1.addImage(gun)
gun1.scale=.05

}

function getTreasure(){
if(frameCount%100===0){
  treasure=createSprite(width,random(50,height/2))
 myrand=Math.round(random(1,4))
 treasure.velocityX=-4
 switch (myrand) {
   case 1:
     treasure.addImage(gold)
     break;
     case 2:
      treasure.addImage(crown)
      break;
      case 3:
     treasure.addImage(diamond)
     break;
     case 4:
     treasure.addImage(cash)
     break;
   default:
     break;
 }


 treasure.scale=0.1
}

}
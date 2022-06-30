var player, playerImg, playerRunning;
var gun;
var bullet;
var sword;
var enemies1, enemies2;
var ground;
var groundImage;
var invisibleGround;
var leftWall
var rightWall;

function preload() {

  groundImage = loadImage("Assets/ground2.png");
  playerRunning= loadAnimation("Assets/jacinto_run1.png", "Assets/jacinto1.png", "Assets/jacinto_run2.png");
  playerImg= loadImage("Assets/jacinto1.png")

  
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  player= createSprite(860,550,20,20);
  player.addImage(playerImg)
  player.scale= 2;
  ground= createSprite(600,520,20000,20);
  ground.addImage(groundImage);
  leftWall= createSprite(20,550,30,2000);
  rightWall= createSprite(1860,550,30,2000);
  
  invisibleGround= createSprite(600,630,20000,20);
  
}

function draw() {

  background("lightBlue");


 if(keyIsDown(LEFT_ARROW)) {
    player.x -= 8;

    player.addAnimation(playerRunning);
  }

  if(keyIsDown(RIGHT_ARROW)) {
    player.x += 8;

    player.addAnimation(playerRunning);

  }

  if(keyDown("space")&& player.y >= 570) {
    player.velocityY = -10;

  }
  player.velocityY = player.velocityY + 0.8

  player.collide(invisibleGround);
  player.collide(leftWall);
  player.collide(rightWall);


  invisibleGround.visible= false;
  rightWall.visible= false;
  leftWall.visible= false;

  console.log(player.y)
  
  drawSprites()
}
var trex, trex_running, trex_collided;
var ground, groundImage, invisibleGround;

function preload() {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  trex_collided = loadImage("trex_collided.png");

  groundImage = loadImage("ground2.png");
}

function setup() {
  createCanvas(600, 200);


  //crie um sprite de trex
  trex = createSprite(50, 160, 20, 50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;

  //crie um sprite ground (solo)
  ground = createSprite(200, 180, 400, 20);
  ground.addImage("ground", groundImage);
  ground.x = ground.width / 2;
  ground.velocityX = -4;

  //crie um solo invisível
  invisibleGround = createSprite(200, 190, 400, 10);
  invisibleGround.visible = false;

}

function draw() {

  background(220);

  console.log(trex.y)


  if (keyDown("space") && trex.y >= 160) {
    trex.velocityY = -10;
  }

  trex.velocityY = trex.velocityY + 0.5

  //recarregamento de chão
  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }


  trex.collide(invisibleGround);

  drawSprites();
}
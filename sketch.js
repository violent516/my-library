var fixedRect,movingRect

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 100, 50);
  fixedRect.shapeColor = "yellow";
  fixedRect.debug = true;
  movingRect = createSprite(100,100,50,100);
  movingRect.shapeColor = "blue";
  movingRect.debug = true;
}

function draw() {
  background(0);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(isTouching(movingRect,fixedRect)){
  movingRect.shapeColor = "yellow";
  fixedRect.shapeColor = "blue";
  }
  else{
  movingRect.shapeColor = "blue";
  fixedRect.shapeColor = "yellow";
  }
  drawSprites();
}
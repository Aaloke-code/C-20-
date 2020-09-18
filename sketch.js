var rectangle;

function setup() {
  createCanvas(400,400);
  rectangle = createSprite(200, 200, 50, 50);
  rectangle.shapeColor = "blue"
}

function draw() {
  background(0);  
  drawSprites();
}
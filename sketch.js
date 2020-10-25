var helicopterIMG,helicopterSprite;
var packageSprite,packageIMG;
var packageBody,ground;
var dropbox1,dropbox2,dropbox3;
var dropboxBody1,dropboxBody2,dropboxBody3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	helicopterIMG = loadImage("helicopter.png")
	packageIMG = loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite = createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale = 0.2;

	helicopterSprite = createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale = 0.6;

	groundSprite = createSprite(width/2, height+35, width,10);
	groundSprite.shapeColor = color(255);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {friction:0, isStatic:true});
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 685, width, 10 , {isStatic:true});
 	World.add(world, ground);

	Engine.run(engine);

	dropbox1 = createSprite(400,680,200,20);
	dropbox1.shapeColor = "red";

	dropboxBody1 = Bodies.rectangle(400,680,200,20);
	World.add(world, dropboxBody1);

	dropbox2 = createSprite(300,640,20,100);
	dropbox2.shapeColor = "red";

	dropboxBody2 = Bodies.rectangle(300,640,20,100);
	World.add(world, dropboxBody2);

	dropbox3 = createSprite(500,640,20,100);
	dropbox3.shapeColor = "red";

	dropboxBody3 = Bodies.rectangle(500,640,20,100);
	World.add(world, dropboxBody3);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  packageSprite.x = packageBody.position.x;
  packageSprite.y = packageBody.position.y;

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);	
  }
}




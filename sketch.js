var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bw1,bw2,bw3;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2


	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.03, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	bw1=Bodies.rectangle(370, 650, 200, 20, {isStatic:true});
	World.add(world,bw1);
	//bw1.shapeColor = "red";

	

	bw2=createSprite(270, 610, 20, 100);
	bw2.shapeColor = "red";

	bw3=createSprite(470, 610, 20, 100);
	bw3.shapeColor = "red";
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  //console.log(packageSprite.position.y);
  //console.log(packageSprite.position.x);
  
  //bw1.collide(packageSprite);
	rect(bw1.position.x, bw1.position.y, 200, 20);
	
  drawSprites(); 
  //bw1.display()
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    //Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody, false);
	//Matter.Body.setStatic(bw1, false);

	//packageSprite.collide(bw1);

	console.log(packageSprite.position.y);
  }
}
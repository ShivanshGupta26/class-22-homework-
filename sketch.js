var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,log1,log2,log3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
    world = engine.world;

	packageSprite=createSprite(400, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(400, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	
	groundSprite=createSprite(400, height-35, width,10);
	groundSprite.shapeColor=color(255);
	
	log1 = createSprite(410,672,200,25);
	log2 = createSprite(300,635,25,100);
	log3 = createSprite(520,635,25,100);

	// ground = createSprite(400,665,900,20);

	
	

	// log1 = new Log(410,650,200,90);

	// log2 = new Log(300,610,100,180);	
	// log3 = new Log(520,610,100,180);



	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5,isStatic:true});
	World.add(world, packageBody);

	//Creating a Ground


	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;

//   log1.display();
//   log2.display();
//   log3.display();

  
  drawSprites();
 
  keyPressed();

}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody, false);																																			
												
  }
}
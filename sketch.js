	var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
	var packageBody,ground
	const Engine = Matter.Engine;
	const World = Matter.World;
	const Bodies = Matter.Bodies;
	const Body = Matter.Body;
	var box1,box2,box3;

	function preload()
	{
		helicopterIMG=loadImage("helicopter.png")
		packageIMG=loadImage("package.png")
	}

	function setup() {
		createCanvas(800, 700);
		rectMode(CENTER);
		




		helicopterSprite=createSprite(width/2, 200, 10,10);
		helicopterSprite.addImage(helicopterIMG)
		helicopterSprite.scale=0.6

		groundSprite=createSprite(width/2, height-35, width,10);
		groundSprite.shapeColor=color(255)

		fill("red")
		box1=createSprite(370,655,360,10);
		fill("red")
		box2=createSprite(190,630,10,60);
		fill("red")
		box3=createSprite(550,630,10,60);
		
		packageSprite=createSprite(width/2, 500, 10,10);
		packageSprite.addImage(packageIMG)
		packageSprite.scale=0.2

		
		engine = Engine.create();
		world = engine.world;

		packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.2, isStatic:true});
		World.add(world, packageBody);
		
		
		//Create a Ground
		ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
		World.add(world, ground);


		Engine.run(engine);
		
	}

																	
	function draw() {
	rectMode(CENTER);   

	
	background(0);
	
	packageSprite.y= packageBody.position.y 

	
	if(keyDown("down")) {
		Matter.Body.setStatic(packageBody,false )
	}
	drawSprites();
	}


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var radius = 40;

function preload()
{

}

function setup() {
	createCanvas(windowWidth, windowHeight);
	var b1={
		restitution:0.3,
		friction:0,
		density:1.2
	}
	var g1={
		isStatic:true
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	block1 = Bodies.circle(200,606.296000277778,radius/2,b1);
    World.add(world,block1)

	ground = Bodies.rectangle(0,windowHeight,windowWidth*2,50,g1)
	World.add(world,ground)
	
    ground3 = Bodies.rectangle(1000,577,20,100,g1)
    World.add(world,ground3)

	ground4 = Bodies.rectangle(800,577,20,100,g1)
    World.add(world,ground4)
	
	ground5 = Bodies.rectangle(900,617,200,20,g1)
    World.add(world,ground5)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  push()
  fill("red")
  ellipse(block1.position.x,block1.position.y, radius)
  pop()
  
  rect(ground.position.x,ground.position.y,windowWidth*2,50)

  
  push()
  fill("yellow")

  rect(ground3.position.x,ground3.position.y,20,100)
  rect(ground4.position.x,ground4.position.y,20,100)
  rect(ground5.position.x,ground5.position.y,200,20)

  pop()
  
  keyPressed()
  console.log(block1.position.y)
}

function keyPressed(){
    if(keyDown(UP_ARROW)&&block1.position.x == 200){
        Matter.Body.applyForce(block1, {x: block1.position.x, y: block1.position.y}, {x: 50, y: -115})
    }
}


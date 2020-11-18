
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constrained = Matter.Constraint;

var block1,block2,block3,block4,block5;
var ball1,ball2,ball3,ball4,ball5;
var string1,string2,string3,string4,string5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	block1 = new Block(350,100,75,50);
	ball1 = new Ball(350,300,25)
	string1 = new Rod(block1.body,ball1.body);
	
	block2 = new Block(400,100,75,50);
	ball2 = new Ball(400,300,25)
	string2 = new Rod(block2.body,ball2.body);
	
	block3 = new Block(450,100,75,50);
	ball3 = new Ball(450,300,25)
	string3 = new Rod(block3.body,ball3.body);
	
	block4 = new Block(500,100,75,50);
	ball4 = new Ball(500,300,25)
	string4 = new Rod(block4.body,ball4.body);
	
	block5 = new Block(550,100,75,50);
	ball5= new Ball(550,300,25)
	string5 = new Rod(block5.body,ball5.body);
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(150);

  block1.display();
  ball1.display();
  string1.display();
  block2.display();
  ball2.display();
  string2.display();
  block3.display();
  ball3.display();
  string3.display();
  block4.display();
  ball4.display();
  string4.display();
  block5.display();
  ball5.display();
  string5.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
}


/*function mouseReleased(){
    rod1.released();
}*/




var block1, block2, block3, block4;
var block5,block6,block8,block9;
var slingshot, polygon_img, polygon;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	// create the Bodies Here & level two
	block1 = new Block(330, 235, 30, 40);
	block2 = new Block(360, 235, 30, 40);
	block3 = new Block(390, 235, 30, 40);
	block4 = new Block(420, 235, 30, 40);
	block5 = new Block(450, 235, 30, 40)
	// level three
	block6 = new Block(360, 195, 30, 40)
	block7 = new Block(390, 195, 30, 40)
	block8 = new Block(420, 195, 30, 40)
	// top
    block9 = new Block(390, 155, 30, 40)
    // ground
    ground = new Ground(600,height,1200,20);
    // polygon holder with slings
    polygon = Bodies.circle(50,200,20)
    World.add(world, polygon);
    polygon_img= loadImage("polygon.png");    
    // slingshot
    slingshot = new Slingshot(this.polygon,{x:100, y:200} )
    Engine.run(engine);
  
}


function draw() {
  imageMode(CENTER);
  image(polygon_img, polygon.position.x, polygon.position.y, 40 ,40)
  background(0);
  

  
  drawSprites();
 
}


function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}





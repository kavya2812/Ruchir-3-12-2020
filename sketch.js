const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload () {
  polygon_img = loadImage("polygon.png");
}

function setup() {
  createCanvas(900,400);
  
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  
  stroke(255)
  ground = new Ground(450,390,900,20);
  
  polygon = Bodies.circle(50,200,20);
  World.add(world, polygon); 

  slingShot = new Slingshot(this.polygon,{x:100,y:200});

   
 
  stand1 = new Ground(390,300,250,10);
  stand2 = new Ground(700,200,200,10);
  
  box1 = new Box(300,275,30,40);
  box2 = new Box(330,275,30,40);
  box3 = new Box(360,275,30,40);
  box4 = new Box(390,275,30,40);
  box5 = new Box(420,275,30,40);
  box6 = new Box(450,275,30,40);
  box7 = new Box(480,275,30,40);
  box8 = new Box(330,235,30,40);
  box9 = new Box(360,235,30,40);
  box10 = new Box(390,235,30,40);
  box11 = new Box(420,235,30,40);
  box12 = new Box(450,235,30,40);
  box13 = new Box(360,195,30,40);
  box14 = new Box(390,195,30,40);
  box15 = new Box(420,195,30,40);
  box16 = new Box(390,155,30,40);

  box17 = new Box(640,175,30,40);
  box18 = new Box(670,175,30,40);
  box19 = new Box(700,175,30,40);
  box20 = new Box(730,175,30,40);
  box21 = new Box(760,175,30,40);
  box22 = new Box(670,135,30,40);
  box23 = new Box(700,135,30,40);
  box24 = new Box(730,135,30,40);
  box25 = new Box(700,95,30,40);
}

function draw() {
 
  background(0);  
  
  textSize(20);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30); 
 
ground.display();
stand1.display();
stand2.display();

 fill(135,206,234);
 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();

 fill(225,192,203);
 box8.display();
 box9.display();
 box10.display();
 box11.display();
 box12.display();

 fill(63,224,208);
 box13.display();
 box14.display();
 box15.display();

 fill(128,128,128);
 box16.display();
 
 fill(135,206,234);
 box17.display();
 box18.display();
 box19.display();
 box20.display();
 box21.display();

 fill(63,224,208);
 box22.display();
 box23.display();
 box24.display();

 fill(225,192,203);
 box25.display();
 imageMode(CENTER);
 image(polygon_img, polygon.position.x, polygon.position.y, 40, 40);
 drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
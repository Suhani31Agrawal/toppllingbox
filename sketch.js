
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;

var box1;
var box2;

var world,engine,grd,ball;

function setup() {
  createCanvas(800,400);

  engine=Engine.create();
  world=engine.world

  box1=new Box(200,150,50,50);
  box2=new Box(225,50,50,100);
  
  grd=new Ground(400,390,800,15);
  
}

function draw() {
  background(0); 
  Engine.update(engine);
  box1.display();
  box2.display();
  grd.display();
}
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world;
var box1, ground;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  
  world = engine.world;
  
  box1 = new Box(130,110,40,40);
  box2 = new Box(110,50,50,50);
  console.log(box1.body)

  options={
    isStatic:true,
    friction: 0.6

  }
  ground = Bodies.rectangle(0,390,800,5,options);
  World.add(world, ground);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,5);

  box1.display()
  box2.display();
}

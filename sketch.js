const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world,dustbin,paper;
function setup() {
  createCanvas(800, 400);
  rectMode(CENTER);


  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  dustbin = new DustBin(720, 390, 100, 10);
  paper = new Paper(100, 300, 70);
  ground = new Ground(width / 2, 400, width, 10);
  
}

function draw() {
     background("grey");
       rectMode(CENTER);

    paper.display();
    ground.display();
    dustbin.display();
    }



function keyPressed(){
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {
      x: 70,
      y: -70,
    });
  }
}
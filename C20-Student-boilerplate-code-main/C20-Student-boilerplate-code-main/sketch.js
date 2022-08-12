
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var rock,wall;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
var rock_options={
  restitution:0.7,
  
}
var ely_options={
  restitution:0.97,
}
var wall_options={
  isStatic:true
};
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  wall =Bodies.rectangle(300,150,70,10,wall_options);
  World.add(world,wall);

  rock=Bodies.circle(250,10,20,rock_options);
  World.add(world,rock);

  ely=Bodies.circle(200,10,30,ely_options);
  World.add(world,ely);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
 ellipse(rock.position.x,rock.position.y,20);
 rect(wall.position.x,wall.position.y,200,20);
 ellipse(ely.position.x,ely.position.y,20);
}


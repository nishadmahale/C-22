
//namspacing
//creates the physics engine 
const Engine = Matter.Engine;

//creates the world inside the physics engine 
const World = Matter.World;

//objects inside the world- these objects follow rules of physics / nature - eg: gravity, collision detecttion, bounce off.
const Bodies = Matter.Bodies;


var engine, world, ground;

var ball;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

//alters default properties of phycics in the object
  var options = {
    isStatic: true
  }

  //creates the object only in memory of computer - cannot see Bodies.rectangle object. 
  ground = Bodies.rectangle(200,390,400,20,options);
  World.add(world,ground);

  var ball_options ={

    restitution: 3.0
  }


  ball=Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);

  console.log(ball);
  console.log(ground.position.x);
  console.log(ground.position.y);
  console.log(ground.type);


  
}

function draw() {
  background(255,255,255);  
  
  //activate physics engine 
  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);
  
}
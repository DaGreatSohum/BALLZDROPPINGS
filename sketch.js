const Engine= Matter.Engine
const World= Matter.World
const Bodies=Matter.Bodies


let engine;
let world;
var ball1
var ball2
var ground

function setup(){
createCanvas(400,400)
engine= Engine.create()
world = engine.world
rectMode(CENTER)
ellipseMode(RADIUS)
ball1=new Ball(200,200,50)
World.add(world, ball1)
ball2=new Ball(100,200,50)
World.add(world, ball2)
ball3=new Ball(300,200,50)
World.add(world,ball3)
var opt={
    isStatic: true
}
ground = Bodies.rectangle(200,380,400,20, opt);
World.add(world, ground);
}





function draw(){
    background("yellow")
    Engine.update(engine);
ball1.ballz()
fill("red");
rect(ground.position.x , ground.position.y , 400,20)
}


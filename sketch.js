const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var ground;
var rope;
var fruit;
var link;

var bg;
var rabbit;
var melon;
var bunny;
var button;

function preload() {
  bg = loadImage("images/background.png");
  rabbit = loadImage("images/Rabbit-01.png");
  melon = loadImage("images/melon.png");

}

function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
 
ground = new Ground(250, 690, 500, 20);
rope = new Rope(6, {x:250, y:30});
var fruitop = {density:0.001};

fruit = Bodies.circle(250, 250, 25, fruitop);
Matter.Composite.add(rope.body, fruit);
link = new Link(rope, fruit);

bunny = createSprite(250, 627, 100, 100);
bunny.addImage(rabbit);
bunny.scale = 0.2

button = createImg("images/cut_btn.png");
button.position(220, 20);
button.size(50, 50);
button.mouseClicked(drop);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  imageMode(CENTER);
}


function draw() 
{
  background(51);
  image(bg, width/2, height/2, 500, 700);
  Engine.update(engine);
   ground.show();
  rope.show();
  image(melon, fruit.position.x, fruit.position.y, 80, 80);
  drawSprites();
  }

function drop() {
  rope.break();
  link.separar();
  link = null;
}
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, platform;
var b1,b2,b3,b4,b5,b6,b7,b8,b9;
var ball;
var rope1;
var backgroundImg;
var score=0;
function preload() {
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;



    ground = new Ground(300,height-20,600,40);
   platform= new Ground(400,550,300,20)
   
    b1 = new Box(300, 525, 30, 30);
    b2 = new Box(330, 525, 30, 30);
    b3 = new Box(360, 525, 30, 30);
    b4 = new Box(390, 525, 30, 30);
    b5 = new Box(420, 525, 30, 30);

    b6 = new Box(330, 495, 30, 30);
    b7 = new Box(360, 495, 30, 30);
    b8 = new Box(390, 495, 30, 30);

    b9 = new Box(360, 465, 30, 30);

    ball = new Ball(50, 450, 25);
    
    rope1= new Rope(ball.body, {x:50,y:450});
}

function draw(){
    if(backgroundImg){
        background(backgroundImg);
        text("score1:"+score, 300,100);
    }
    else{
        background("white");

        text("score1:"+score, 300,100);
    }
    
    Engine.update(engine);
    ground.display();
    platform.display();
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    ball.display();
    rope1.display();
    b1.score();

}

function mouseDragged(){
    //if(gameState==="onSling"){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
 // }
}


function mouseReleased(){
    rope1.fly();
    //gameState="launched";
}


function keyPressed(){
    if(keyCode === 32){
        rope1.attach(ball.body);
    }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=19){
        bg = "bg.png";
    }
    else{
        bg = "bg2.jpg";
    }

    backgroundImg = loadImage(bg);
   
}

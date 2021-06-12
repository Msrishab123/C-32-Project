const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    GetBackGroundImage();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg){
        background(backgroundImg);
        noStroke();
        textSize(25);
        fill("white");
        text("Time : " + hour, width - 300, 50); }

    Engine.update(engine);

    // write code to display time in correct format here


}

async function GetBackGroundImage(){
    var resp = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var respJSON = await resp.json();
    var datetime = respJSON.datetime;
    var hour = datetime.slice(11,13);  
    
if(hour >= 04 && hour <= 05){
    bg = "sunrise1.png";
}
else if(hour >= 05 && hour <= 07){
    bg = "sunrise2.png";
}
else if(hour >= 07 && hour <= 09){
    bg = "sunrise3.png";
}
else if(hour >= 09 && hour <= 11){
    bg = "sunrise4.png";
}
else if(hour >= 11 && hour <= 13){
    bg = "sunrise5.png";
}
else if(hour >= 13 && hour <= 16){
    bg = "sunrise6.png";
}
else if(hour >= 16 && hour <= 17){
    bg = "sunset7.png";
}
else if(hour >= 17 && hour <= 18){
    bg = "sunset8.png";
}
else if(hour >= 18 && hour <= 19){
    bg = "sunset9.png";
}
else if(hour >= 19 && hour <= 21){
    bg = "sunset10.png";
}
else if(hour >= 21 && hour <= 23){
    bg = "sunset11.png";
}
else if(hour >= 23 && hour <= 05){
    bg = "sunset12.png";
}
backgroundImg = loadImage(bg);
}

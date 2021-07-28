var bg, bgImage;
var iss,issImage;
var spaceCraft,craft1Img,craft2Img,craft3Img,craft4Img;
var hasDocked =false;

function preload(){
  bgImage = loadImage("spacebg.jpg");
  issImage = loadImage("iss.png");
  craft1Img = loadImage("spacecraft1.png");
  craft2Img = loadImage("spacecraft2.png");
  craft3Img = loadImage("spacecraft3.png");
  craft4Img = loadImage("spacecraft4.png");
}

function setup() {
  createCanvas(800,400);

  spaceCraft = createSprite(300,310,10,10);
  spaceCraft.addImage(craft1Img);
  spaceCraft.scale = 0.15;

  iss = createSprite(400, 200, 50, 50);
  iss.addImage(issImage);
  iss.scale = 0.78;
}

function draw() {
  background(bgImage);  

  //Declare hasDocked Function
  if(!hasDocked){
    spaceCraft.x = spaceCraft.x+random(-1,1);

    if (keyDown("LEFT_ARROW")){
      spaceCraft.x = spaceCraft.x -2;
      spaceCraft.addImage(craft3Img);
    }

    if (keyDown("RIGHT_ARROW")){
      spaceCraft.x = spaceCraft.x +2;
      spaceCraft.addImage(craft4Img);
    }

    if (keyDown("UP_ARROW")){
      spaceCraft.y = spaceCraft.y -2;
      spaceCraft.addImage(craft2Img);
    }

    
  }

  if(spaceCraft.y<=(iss.y+70) && spaceCraft.x<=(iss.x-10)) {
    hasDocked = true;
    textSize(25);
    fill("blue");
    text("Docking Successful", 400, 300);
  }

  drawSprites();
}
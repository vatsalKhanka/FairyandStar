var fairy, fairyAnimation, star, starImg, music, bg;
function preload()
{
   //preload the images here
   fairyAnimation = loadAnimation("fairy1.png", "fairy2.png");
   starImg = loadImage("star.png");
   music = loadSound("JoyMusic.mp3");
   bg = loadImage("starnight.png");
}

function setup()
{
  createCanvas(800, 550);
  music.loop();
  fairy = createSprite(100, 450, 50, 10);
  star = createSprite(770, 30, 15, 15);
  fairy.addAnimation("this",fairyAnimation);
  star.addImage(starImg);
  star.scale = 0.3;
  fairy.scale = 0.2;

}


function draw() 
{
  background(bg);
  drawSprites();

  

  if(keyDown(RIGHT_ARROW))
  {
    fairy.x+=3;
  }

  if(keyDown(LEFT_ARROW))
  {
    fairy.x-=3;
  }

  if(keyDown(DOWN_ARROW))
  {
    star.velocityY=5;
  }

  if(fairy.isTouching(star))
  {
    star.velocityY = 0;
    star.y = fairy.y;
    star.x = fairy.x + 95;
  }

}

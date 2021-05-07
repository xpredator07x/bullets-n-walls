var car,wall;
  var speed,weight;
var thickness;
var bullet;

function setup() {
  createCanvas(1600,400);
  speed=random(233,321)
  weight=random(30,52)
  thickness=random(22,83);
 
  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor=color(80,80,80)
  

  bullet=createSprite(190,390,20,50)
  bullet.shapecColor='white';
  bullet.velocityX=speed;
}

function draw() {
  background(255,255,255);  
    if(hasCollided(bullet,wall))
      {
        bullet.velocityX=0;
        var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

        if(damage>10)
        {
          wall.shapeColor=color(255,0,0)
        }

        if(damage<10)
        {
          wall.shapeColor=color(0,255,0);
        }

      }
  drawSprites();

}

function hasCollided(lbullet,lwall)
{
bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x

if(bulletRightEdge>=wallLeftEdge)
{
  return true
}
else{
  return false
}
}
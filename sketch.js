function setup() {
  createCanvas(400,400);

  prerna = createSprite(200, 200, 100, 100);
  muskan = createSprite(200,200,50,50);

  prerna.shapeColor = "red";
  muskan.shapeColor = "yellow";

  prerna.debug = true;
  muskan.debug = true;


}

function draw() {
  background("lightBlue");  

  muskan.y = mouseY;
  muskan.x = mouseX;

  if(muskan.x - prerna.x < muskan.width/2 + prerna.width/2 && 
    prerna.x - muskan.x < prerna.width/2 + muskan.width/2&&
    muskan.y - prerna.y < muskan.height/2 + prerna.height/2&&
    prerna.y - muskan.y < muskan.height/2 + prerna.height/2 ){
    prerna.shapeColor = "green";
    muskan.shapeColor = "green";
  }
  else{
    prerna.shapeColor = "red";
    muskan.shapeColor = "yellow";
  }


  drawSprites();
}
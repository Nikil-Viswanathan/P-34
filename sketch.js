//Create variables here
var dog , happyDog , database  , foodStock;
var foodS = 0;
function preload()
{
  img = loadImage("images/dogImg.png");
  img1 = loadImage("images/dogImg1.png");
	//load images here
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
    dog = createSprite(250,250,50,50);
    dog.addImage(img);
    dog.scale = 0.5;
    foodStock = database.ref('Food');
    foodStock.on("value",readStock);
    
}


function draw() {  
 background(46 , 139 , 87);
 if(keyWentDown(UP_ARROW)&& foodS > 0){
   foodS--
   writeStock(foodS);
   dog.addImage(img1);
dog.scale = 0.5;
 }
 
  drawSprites();
  
  //add styles here
textSize(25);
text("Food Available: " + foodS , 250 , 50 );

}

function readStock(data){
foodS = data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x 
})
}
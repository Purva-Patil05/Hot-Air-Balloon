var balloon,database;
var height;
var bg,balloonImage

function preload(){
    bg=loadImage("cityImage.png");
    balloonImage=loadImage("hotairballoon1.png","hotairballoon2.png","hotairballoon3.png")
}
function setup(){
    database=firebase.database();
    createCanvas(1500,700);
 balloon  = createSprite(250,650,10,10);
 balloon.addAnimation("balloon",balloonImage)
 balloon.scale=0.5
   var balloonHeight =database.ref('balloon/height');
   balloonHeight.on("value",readHeight);
}

function draw(){
    background(bg);
    if(keyDown(LEFT_ARROW)){
        writeHeight(-10,0);

    }
    else if(keyDown(RIGHT_ARROW)){
        writeHeight(10,0);
    }
    else if(keyDown(UP_ARROW)){
        writeHeight(0,-10);
        balloon.scale-=0.005
    }
    else if(keyDown(DOWN_ARROW)){
        writeHeight(0,+10);
        balloon.scale+=0.005
    }
    drawSprites();

    textSize(25)
    text("use Arrow keys to move Hot AirBalloon ",40,40)
}


function readHeight(data){
        height=data.val();
    
    balloon.x=height.x;
    balloon.y=height.y;
}
function writeHeight(x,y){
    database.ref('balloon/height').set({
        'x':height.x+x,
        'y':height.y+y
    })
}











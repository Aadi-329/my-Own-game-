var pc
var ground
var ground1

var GameState=0
var score=0

function preload(){

  ground=loadImage("ground.png")

}
function setup(){

  
  createCanvas(500,1000)
   ground1= createSprite(250,-500,500,1000)
 ground1.scale=4
  
  pc=createSprite(250,-1)




  

}

function draw(){

  imageMode(CENTER)
  background("white");


  pc.setVelocity(0,-6)

//ground1.depth=
 ground1.addImage(ground)



 //console.log(camera.position.y) 
 if(pc.y<ground1.y)//pc.y<ground.y-20 )
 
 {

  rectMode(CENTER)
console.log("chk")
  ground1.y=pc.y-100
  

 }


  camera.position.x=pc.x
  camera.position.y=pc.y

  
  
 




 

 // pc.setVelocity(0,-score)






  drawSprites()

}



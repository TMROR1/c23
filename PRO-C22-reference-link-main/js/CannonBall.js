class CannonBall
{constructor(x,y){
this.x=x
this.y=y
this.r=30
var options = {
    isStatic: true
  }

this.body=Bodies.circle(this.x,this.y,this.r,options)
var cb=this.body
this.CannonBall_image = loadImage("assets/connonball.png")
World.add(world,cb)




}
display(){
var pos = this.body.position
push()
imageMode(CENTER)
image(this.CannonBall_image,this.x,this.y,this.r,this.r)
pop()
}
shoot(){
    Matter.Body.setStatic(this.body,false)
    Matter.Body.setVelocity(this.body,{x:30,y:-20})
    
}
}
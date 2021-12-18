class Ball {

    constructor(x,y,r){
        var Roundy={
            restitution :1
         }
        this.body =     Bodies.circle(x,y,r,Roundy)
        World.add(world, this.body)
        this.r=r
    }

    ballz(){
        fill("blue")
     ellipse(this.body.position.x,this.body.position.y,this.r)
    
    }
    

}
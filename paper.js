class Paper {  
    constructor(x, y, radius){
        var options = {
            isStatic:false,
            restitution:0.2,
            friction:0,
            density:1.0,
        }
         this.radius = radius
        this.body = Bodies.circle(x, y, radius/3, options);
	    World.add(world, this.body);
       this.image=loadImage("paper.png");
        
   }
   display(){
       push();
    //rect (this.body.position.x,this.body.position.y,this.radius,this.radius);
    
    translate(this.body.position.x,this.body.position.y);
    fill("grey");
    imageMode(CENTER)
    image(this.image,0,0,this.radius,this.radius);
    pop();
   }
}

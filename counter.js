class Counter{
    constructor(x,y,radius){
        var options={
            isStatic:true,
            restituion:0.1,
            friction:0.2,
            density:1.2
        }
        
        this.body=Bodies.circle(x,y,radius,options);
        
        this.radius=radius;
        World.add(world,this.body);
    }
    display(){
        ellipseMode(RADIUS)
ellipse(this.body.position.x,this.body.position.y,this.radius)
    }
}
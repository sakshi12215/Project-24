class paper{
    constructor(x, y, radius){
        var options={
            isStatic:false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body=Bodies.circle(x, y, radius,options)
        this.width = w 
        this.height = h
        World.add(world,this.body)
    }
        display(){
            var pos = this.body.position
            fill(255)
            ellipseMode(CENTER);
            fill("pink")
            ellipse(x, y,this.width,this.height)
            
        }
    }
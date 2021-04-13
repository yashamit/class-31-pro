class Ball{
    constructor(x){
    
    var options = { 
    restitution : 1    }
    
    this.body = Bodies.circle( x , 10 , 10, options )
    this.color = color(random(0 , 255) , random(0 , 255) , random(0 , 255))
    World.add( world , this.body)
    
    
    }
    
    display(){
        var pos = this.body.position
    
        var angle = this.body.angle
        
        push()
        translate(pos.x , pos.y)
        fill(this.color)
        ellipseMode(RADIUS )
        ellipse(0 , 0 , 10 , 10)
        pop()
    }
    
    }
class Launcher{
    constructor(x, y,w,h,body){
        var options = {
            pointA: {
                x: x,
                y: y
            },
            bodyB: body,
            stiffness: 0.04,
            length: 10,
        }
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.launch = Constraint.create(options);
        World.add(world, this.launch);
    }
    fly(){
        this.launch.bodyB=null;
    }
    
    attach(body){
    this.launch.bodyB=body;
}

    display(){
        if (this.launch.bodyB) {
            stroke(0);
            strokeWeight(4);
            const posA = this.launch.pointA;
            const posB = this.launch.bodyB.position;
            line(posA.x, posA.y, posB.x, posB.y);
        }
    }
}
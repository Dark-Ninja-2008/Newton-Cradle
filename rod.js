class Rod{
    constructor(bodyA,bodyB,offsetX,offsetY){

    this.offsetX = offsetX
    this.offsetY = offsetY
    var options ={
    bodyA:bodyA,
    bodyB:bodyB,
    stiffness:0.0002,
    length:20,
    }
    this.rod1=Constrained.create(options);
    World.add(world,this.rod1);
}

released(){
    ball1.body.setVelocityX=2;
    ball1.body.setVelocityX=2;
}

    display(){
    var pointA = this.rod1.bodyA.position;
    var pointB = this.rod1.bodyB.position;
    strokeWeight(2);
    line(pointA.x,pointA.y,pointB.x,pointB.y);
}
}
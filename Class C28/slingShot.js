class slingShot{
constructor (bodyA,pointB){

    var options ={
        length:10,
        stiffness:0.04,
        bodyA:bodyA,
        pointB:pointB
    };


    this.sling= constrain.create(options)
    this.pointB=pointB
   World.add(world,this.sling);
}

fly(){
    this.sling.bodyA=null

}

display(){
    if(this.sling.bodyA)  {  
    var pointA=this.sling.bodyA.position
    var pointB=this.pointB
    strokeWeight(4);
    line(pointA.x,pointA.y,pointB.x,pointB.y);
}
}
}
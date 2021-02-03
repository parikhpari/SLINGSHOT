class Slingshot{
    constructor(bodyA,pointB){
    //declared options for the chain object
    var options={
        bodyA: bodyA,
        pointB: pointB ,
        length: 10,
        stiffness: 0.08
    }
    //to create a general chain from constraint class of matter.
    this.sling=Constraint.create(options);
    //created a property for pointB
    this.pointB= pointB;
    //to add it to the main world
    World.add(world,this.sling);
    }
        //made a function fly in which the bodyA will be empty 
        fly(){
            this.sling.bodyA=null;
        }
    display(){
        //made a condition that bodyA is not empty and henceforth it will caryy out all the functions
        if(this.sling.bodyA){
            //namespacing
            var pointA=this.sling.bodyA.position;
            var pointB=this.pointB;
            //to push changes from this point
            push();
            //to give it stroke weight
            strokeWeight(10);
            //to draw a line between bodyA and bodyB
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            //to pop changes from that certain point to this point
            pop();
        }
        
    }
}
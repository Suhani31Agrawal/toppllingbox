class Box{
    constructor(x,y,width,height){
     var option={
         restitution:0.2
       }
       this.body=Bodies.rectangle(x,y,width,height,option)
       this.width=width
       this.height=height
       World.add(world,this.body);
    }
    display(){
        var pose=this.body.position
        var angle=this.body.angle
        push();
        translate(pose.x,pose.y)
        rotate(angle);
        rectMode(CENTER);
         fill(255);
        rect(0,0,this.width,this.height)
        pop();
    }
 }
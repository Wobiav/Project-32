class Ball{
    constructor(x, y, radius){
        var options={
            restitution:0.4,
            friction:1.0,
            density:2,
        }
        this.body = Bodies.circle(x,y, radius);
        this.radius=radius;

        this.image=loadImage("polygon.png");

        World.add(world, this.body);
    }

    display(){
        var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate();
      imageMode(CENTER);
      image(0, 0, this.radius, this.radius)
      pop()
    }
}
class Tree{
    constructor(x, y,width,height) {
        var options = {
            isStatic:false,
            'restitution':0,
            'friction':1,
            'density':1.2
        }
      this.x=x;
      this.y=y;
      this.width = width;
      this.height = height;
      this.image = loadImage("tree.png");
      this.body = Bodies.rectangle(x, y, width, height, options);
      World.add(world, this.body);
      
      }
      display(){ 
        push();
        rectMode(CENTER);
        strokeWeight(4);
        imageMode(CENTER);
        image(this.image, 800,500,700,700);
        rect(0, 0);
        pop();
      }
}
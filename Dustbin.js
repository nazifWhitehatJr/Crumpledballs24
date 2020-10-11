class Dustbin {
    constructor() {
      var options = {
          isStatic: true
      }
      this.left = Bodies.rectangle(width-300,610,20,100,options);
      this.right = Bodies.rectangle(width-100,610,20,100,options);
      this.bottom = Bodies.rectangle(width-200,650,200,20,options);

      World.add(world, this.left);
      World.add(world, this.right);
      World.add(world, this.bottom);

    }
    display(){
      rectMode(CENTER);
      fill("white");
      rect(width-300,610,20,100);
      rect(width-100,610,20,100);
      
      // image (img ,x ,y, width , height) 
      rect(width-200,650,200,20);
    }
  };

var Bird = function(context){
  this.context = context;
  this.image = new Image();
  this.image.src = './images/bird.png';

  this.Xpos = 60;
  this.Ypos = 200;

  this.width = 34;
  this.height = 24;
  this.collisionRadius = 24;

  this.frames = 0;

  this.velocity = 1;
  this.moveUpPosition = 0;
  this.moveUpFlag = -1;



  this.implimentGravity = function(g){
    if (this.moveUpFlag == 1){
      this.moveUpPosition -= 4;
      this.velocity = -4;
      g = 0;

      var jumpPos = 50;

      if ( this.moveUpPosition <= -jumpPos){
        this.moveUpPosition = 0;
        this.velocity = 2;
        this.moveUpFlag = -1;
      }
    }
    this.velocity += 0.01 * g;
    this.Ypos += this.velocity

  }

  this.moveUp = function(){
    this.moveUpFlag = 1;
    this.moveUpPosition = 0;    
  }

  this.render = function(){
    this.context.drawImage(
      this.image,
      0,
      0,
      this.width,
      this.height,
      this.Xpos,
      this.Ypos,
      this.width,
      this.height
    );
  }

  this.move = function(){
    this.frames = ++this.frames % 60;
  }

}
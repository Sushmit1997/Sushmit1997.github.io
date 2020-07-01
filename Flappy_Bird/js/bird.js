var Bird = function(context){
  this.context = context;
  this.image = new Image();
  this.image.src = './images/bird.png';

  this.Xpos = 50;
  this.Ypos = 200;

  this.width = 34;
  this.height = 24;
  this.collisionRadius = 24;

  this.offsetX = 0;
  this.frames = 0;

  this.velocity = 1;
  this.moveUpPosition = 0;
  this.moveUpFlag = -1;

  // this.oscillationRange = 10;
  // this.oscillationDirection = -1;
  // this.currentOscillation = 0;

  // this.oscillate = function(){
  //   if (this.oscillationDirection >= 0){
  //     this.currentOscillation++;
  //     this.Ypos += 1;
  //     if (this.currentOscillation >= this.oscillationRange){
  //       this.oscillationDirection = -1;
  //     }
  //   }
  // }

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
    this.speed += 0.01 * g;
    this.Ypos += this.velocity

  }

  this.moveUp = function(){
    this.moveUpFlag = 1;
    this.moveUpPosition = 0;    
  }

  this.render = function(){
    this.context.drawImage(
      this.image,
      this.offsetX,
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

    if (this.frames % 10 == 0) this.offsetX = (this.offsetX + 56) % ( 56 * 3)
  }

}
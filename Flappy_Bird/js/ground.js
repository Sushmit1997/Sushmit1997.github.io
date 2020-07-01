var Foreground = function(context){
  this.context = context;
  this.image = new Image();

  this.image.src = './images/ground.png';
  this.currentXpos = 0;
  this.velocity = 2;

  this.move = function(){
    this.currentXpos -= this.velocity;
    if ( this.currentXpos + this.gameWidth <= 0) this.currentXpos = 0;
  }
  
  this.detectCollision = function(bird, gameHeight){
    if(bird.Ypos + bird.image.height >= gameHeight - this.image.height){
      return true;
    }
  }

  this.render = function(gameWidth,gameHeight){
    this.context.drawImage(
      this.image,
      this.currentXpos,
      gameHeight - this.image.height,
      gameWidth,
      this.image.height
    );

    this.context.drawImage(
      this.image,
      this.currentXpos + gameWidth,
      gameHeight - this.image.height,
      gameWidth,
      this.image.height
    );
  }

}
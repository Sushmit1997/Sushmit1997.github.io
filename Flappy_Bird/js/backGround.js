function Background(context){
  this.context = context;
  this.image = new Image();
  this.image.src = './images/background.png';

  this.currentXpos = 0;
  this.velocity = 0.5;

  this.move = function(){
    this.currentXpos -= this.velocity;
    if( this.currentXpos <= -this.image.width){
      this.currentXpos = 0;
    }
  }

  this.render = function(){
    this.context.drawImage(this.image, this.currentXpos, 0);
    this.context.drawImage(this.image, this.currentXpos + this.image.width, 0);
  }

}




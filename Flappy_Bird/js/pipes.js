var Pipe = function(context){
  this.context = context;

  this.topPipe = new Image();
  this.topPipe.src = './images/top-pipe.png';

  this.bottomPipe = new Image();
  this.bottomPipe.src = './images/bottom-pipe.png';

  this.width = 52;
  this.height = 320;
  this.gap = 100;

  this.minYpos = -100;
  this.velocity = 2;
  this.frames = 0;

  this.position = [];


  this.render = function(){
    for (let i = 0; i < this.position.length; i++){
      const pos = this.position[i];

      var topYpos = pos.y;
      var bottomYpos = pos.y + this.height + this.gap;

      this.context.drawImage(
        this.topPipe,
        0,
        0,
        this.width,
        this.height,
        pos.x,
        topYpos,
        this.width,
        this.height
      );

      this.context.drawImage(
        this.bottomPipe,
        0,
        0,
        this.width,
        this.height,
        pos.x,
        bottomYpos,
        this.width,
        this.height
      );
    }
  }

  this.update = function(bird, gameWidth){
    this.frames = ++this.frames % 100;

    if ( this.frames % 100 == 0){
      this.position.push({
        x:gameWidth,
        y: this.minYpos * (Math.random() + 1)

      });
    }

    for (let i = 0; i < this.position.length; i++){
      const pos = this.position[i];

      var bottomPipeYpos = pos.y + this.height + this.gap;

      // detect Collision;
      // top pipe

      if(
        bird.Xpos + bird.width > pos.x && 
        bird.Xpos < pos.x + this.width &&
        bird.Ypos + bird.height > pos.y &&
        bird.Ypos < pos.y + this.height
      ){
        return true;
      }

      // bottom pipe

      if(
        bird.Xpos + bird.width > pos.x &&
        bird.Xpos < pos.x + this.width &&
        bird.Ypos + bird.height > bottomPipeYpos
        // bird.Ypos < this.bottomPipeYpos + this.height
      ){
        return true;
      }

      pos.x -= this.velocity;
    }
  }

  this.pipeCrossed = function(birdXpos){
    for (let i = 0; i < this.position.length; i++ ){
      const pos = this.position[i];

      if( pos.x + this.width <= 0){
        this.position.shift();
        return true;
      }
    }
    return false;
  }

}
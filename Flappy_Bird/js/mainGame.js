class mainGame{
  constructor(mainElement){
    this.mainElement = mainElement;

    this.gameWidth = 288;
    this.gameHeight = 512;

    this.canvas = document.getElementById('myCanvas');
    this.context = this.canvas.getContext('2d');

    this.gravity = 10;

    this.reset();
    this.render();

  }

  reset(){
    this.state = 'MainMenu';
    this.spacePressed = false;
    this.currentScore = 0;

    this.checkInputs();

    this.setStyles();

    this.createComponents();
    
  }

  setStyles(){
    this.canvas.setAttribute('width', this.gameWidth);
    this.canvas.setAttribute('height', this.gameHeight);

    this.mainElement.appendChild(this.canvas);
  }

  createComponents(){
    this.background = new Background(this.context);
    this.foreground = new Foreground(this.context);
    this.bird = new Bird(this.context);

    this.pipes = new Pipe(this.context);
    this.gameOver = new GameOver(this.context);
    this.mainMenu = new MainMenu(this.context);
  }

  checkInputs(){
    this.canvas.onclick = function(event){
      event.preventDefault();
      if (this.state = 'MainMenu'){
        this.state = 'Playing';
        this.bird.moveUp();
      } else if ( this.state == 'Playing'){
        this.spacePressed = 'true';
      }
      if ( this.state = 'GameOver'){
        this.state = 'MainMenu';
        this.reset();
      }
    }.bind(this);

    window.addEventListener( 'keydown', function(event){
      var key = event.key;
      if( key == ' '){
        event.preventDefault();

        if (this.state == 'MainMenu'){
          this.state = 'Playing';
          this.bird.moveUp();
        } else if (this.state == 'Playing'){
          this.spacePressed = true;
        }
        if (this.state == 'GameOver'){
          this.state = 'MainMenu';
          this.reset();
        }
      } else {
        this.spacePressed = false;
      }
    }.bind(this));

  }

  render(){
    this.context.clearRect(0,0, this.gameWidth, this.gameHeight);

    switch(this.state){
      case 'MainMenu':
        this.background.render();
        this.background.move();
        this.foreground.render(this.gameWidth, this.gameHeight);
        this.foreground.move(this.gameWidth);
        this.bird.render();
        this.mainMenu.show(this.gameWidth);
        this.showScore();

        break;

      case 'Playing':
        this.background.render();
        this.background.move();

        this.pipes.render();

        this.foreground.render(this.gameWidth, this.gameHeight);
        this.foreground.move(this.gameWidth);

        this.bird.implimentGravity(this.gravity);
        this.bird.render();

        if (this.spacePressed){
          this.bird.moveUp();
          this.spacePressed = false;
        }
        this.showScore();

        this.checkCollision();
        break;

      case 'GameOver':
        this.background.render();
        this.pipes.render();
        this.foreground.render(this.gameWidth, this.gameHeight);

        this.bird.render();

        if (!this.foreground.detectCollision(this.bird, this.gameHeight)){
          this.bird.implimentGravity(this.gravity);
        }

        this.showScore();
        this.gameOver.show(this.gameWidth);
        break;
    }
    requestAnimationFrame(this.render.bind(this));
  }

  checkCollision(){
    if(this.foreground.detectCollision(this.bird, this.gameHeight)){
      this.gameOver.setHighScore(this.currentScore);
      this.state = 'GameOver';
    }

    if ( this.pipes.update(this.bird, this.gameWidth)){
      this.gameOver.setHighScore(this.currentScore);
      this.state = 'GameOver';
    }

    if( this.pipes.pipeCrossed(this.bird.Xpos)){
      this.currentScore++;
    }
  }

  showScore(){
    this.context.font = 50 + 'px';
    this.context.fillStyle = '#fff';
    this.context.fillText(
      this.currentScore,
      this.gameWidth / 2 - 50 / 2,
      75
    );
  }

}
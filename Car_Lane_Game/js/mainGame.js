var GAME_VIEW_SIZE = 1/1.5;
var GAME_WIDTH = 350;
var FPS = 60;

var CARS_SPAWN_INTERVAL = 1000;

class Game{
  constructor(mainElement){
    this.mainElement = mainElement;
    this.element = document.createElement('div');
    this.road = new Road(this.element);
    

    this.gameOver = false;
    this.intervals = [];

    this.setStyles();
    this.createPlayerCar();
    this.createRivalCars();

    this.playerControl();
    this.loopGame();
  }

  setStyles(){
    this.element.style.display = 'inline-block';
    this.element.style.width = GAME_WIDTH + 'px';
    this.element.style.height = GAME_WIDTH / GAME_VIEW_SIZE + 'px';
    this.element.style.overflow = 'hidden';

  
    

    this.element.style.position = 'relative';
    this.mainElement.appendChild(this.element);
    
    
  }

  createPlayerCar(){
    this.player = new Car(this.element);
    this.player.render();
  }

  createRivalCars(){
    this.rivals = [];
    this.createRivalsInterval = setInterval(
      function(){
        var car = new RivalCar(this.element);

        this.rivals.push(car);
      }.bind(this),
      CARS_SPAWN_INTERVAL
    );
  }

  playerControl(){
    document.onkeypress = function(event){
      var pressedKey = event.key;
      if( pressedKey == 'a' ){
        this.player.switchLeft();
      } else if (pressedKey == 'd'){
        this.player.switchRight();
      }
      this.player.render();
    }.bind(this)
  }

  loopGame(){
    this.gameLoopInterval = setInterval(
      function(){
        this.road.change();
        this.moveRivals();
        this.ifGameOver();
      }.bind(this),
      1000/FPS
    );
  };

  ifGameOver(){
    if(this.gameOver){
      clearInterval(this.gameLoopInterval);
      clearInterval(this.createRivalsInterval);
      this.road.gameOverScreen();

      if(this.road.currentScore > localStorage.getItem('high_score')){
        localStorage.setItem('highScore', this.road.currentScore);
      }
      this.element

      setTimeout('location.reload(true);',2000);
    }
  }

  moveRivals(){
    //move Rivals

    for (let i = 0; i < this.rivals.length; i++){
      const rival = this.rivals[i];
      rival.moveCarDown();
      rival.checkObstacle(this.rivals);
      rival.render();

      if (rival.checkIfOutSideGame()){
        rival.element.style.display = 'none';
        this.element.removeChild(rival.element);
        this.rivals.splice(i, 1);
        this.road.addScore(1);
        break;

      }
    }

    //check game over
    for (let i = 0; i< this.rivals.length; i++){
      const rival = this.rivals[i];

      if(
        rival.xPos == this.player.xPos && rival.yPos <= this.player.yPos +
         (100 * this.player.height) / (GAME_WIDTH / GAME_VIEW_SIZE ) && 
         rival.yPos + rival.heightPercent >= this.player.yPos
      ){
        this.gameOver = true;
      }

    }
  }

}

function startGame(){
  var mainWrapper = document.querySelector('.main-container');
  var highScoreBoard = document.createElement('span');
  highScoreBoard.style.color = 'red';
  highScoreBoard.style.display = 'block';
  highScoreBoard.style.marginTop = '30px';
  highScoreBoard.style.marginBottom = '20px';
  highScoreBoard.style.fontSize = '30px';

  var highScoreText = (hs = localStorage.getItem('highScore')) ? hs : 0;
  highScoreBoard.innerHTML = `High Score: ${highScoreText}`;

  mainWrapper.appendChild(highScoreBoard)

  var startButton = document.createElement('img');
  startButton.setAttribute('src','./images/start.png');

  startButton.style.marginTop = '40px';

  mainWrapper.appendChild(startButton);

  startButton.onclick = function(){
    startButton.style.display = 'none';
    document.getElementsByClassName('instruction').display = 'none';

    var start = new Game(mainWrapper);
  }
}

startGame();
class GameOver {
  constructor(context) {
    this.context = context;
    this.highScore = localStorage.getItem('flappy_bird_high_score')
      ? localStorage.getItem('flappy_bird_high_score')
      : 0;

    this.gameOverImage = new Image();
    this.gameOverImage.src = './images/game-over.png';
  }

  setHighScore(score) {
    if (score > localStorage.getItem('flappy_bird_high_score')) {
      this.highScore = score;
      localStorage.setItem('flappy_bird_high_score', this.highScore);
    }
  }

  show(gameWidth) {
    this.context.drawImage(
      this.gameOverImage,
      gameWidth / 2 - this.gameOverImage.width / 2,
      125
    );

    this.showHighScore(gameWidth);
  }

  showHighScore(gameWidth) {
    var scoreFontSize = 20;
    this.context.font = scoreFontSize + 'px Arial';
    this.context.fillStyle = '#fff';
    this.context.fillText(
      'Best:\n' + this.highScore,
      gameWidth / 2 - (scoreFontSize * 5) / 2,
      100
    );
  }
}


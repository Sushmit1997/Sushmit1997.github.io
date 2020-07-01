class MainMenu {
  constructor(context) {
    this.context = context;

    this.getReadyImage = new Image();
    this.getReadyImage.src = './images/get-ready.png';

    this.tapImage = new Image();
    this.tapImage.src = './images/start.png';
  }

  show(gameWidth) {
    this.context.drawImage(
      this.getReadyImage,
      gameWidth / 2 - this.getReadyImage.width / 2,
      100
    );

    this.context.drawImage(
      this.tapImage,
      gameWidth / 2 - this.tapImage.width / 2,
      200
    );
  }
}

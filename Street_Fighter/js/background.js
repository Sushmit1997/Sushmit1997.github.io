Background_source = {
  blanka: './images/bg2.gif',
  ryu: './images/bg5.jpg',
  chun: './images/bg3.gif',
  ken: './images/bg4.jpg',
};

function generateRandomNumbers(lowerLimit, higherLimit) {
  var lowerLimit = Math.ceil(lowerLimit);
  return Math.floor(Math.random() * (higherLimit - lowerLimit)) + lowerLimit;
}

class Background {
  constructor(ctx, playerSelect) {
    this.player = playerSelect;
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = Background_source[this.player];
  }

  draw() {
    this.ctx.drawImage(this.img, 0, 0, 1000, 400, 0, 0, 1000, 400);
  }
}

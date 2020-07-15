var win_images1 = {
  ken: './images/ken.png',
  chun: './images/chun.png',
  blanka: './images/blanka.png',
  ryu: './images/ryu.png',
};

var win_images2 = {
  ken: './images/ken.png',
  chun: './images/chun.png',
  blanka: './images/blanka.png',
  ryu: './images/ryu.png',
};

class HealthBar {
  maxWidth = 300;
  totalLifePoints = 100;

  constructor(ctx, x, y, color, numberL) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.color = color;
    this.currentLifePoints = 100;
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.beginPath();
    this.ctx.rect(
      this.x,
      this.y,
      (this.maxWidth * this.currentLifePoints) / this.totalLifePoints,
      30
    );
    this.ctx.fill();
    this.ctx.closePath();
  }

  reduceLife(reducedLifePoints) {
    this.currentLifePoints -= reducedLifePoints;

    let newLength =
      (this.maxWidth * this.currentLifePoints) / this.totalLifePoints;

    this.ctx.beginPath();
    this.ctx.rect(this.x, this.y, newLength, 30);
    this.ctx.fill();
    this.ctx.closePath();
  }

  fillLife(filledLifePoints) {
    this.currentLifePoints += filledLifePoints;

    let newLength =
      (this.maxWidth * this.currentLifePoints) / this.totalLifePoints;

    this.ctx.beginPath();
    this.ctx.rect(this.x, this.y, newLength, 30);
    this.ctx.closePath();
  }
}

class HealthBarRed {
  maxWidth = 300;
  totalLifePoints = 100;

  constructor(ctx, x, y, color, numberL) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.color = color;
    this.currentLifePoints = 100;
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.beginPath();
    this.ctx.rect(this.x, this.y, this.maxWidth, 30);
    this.ctx.fill();
    this.ctx.closePath();
  }
}

class Player1Wins {
  constructor(ctx, playerSelect) {
    this.player = playerSelect;
    this.ctx = ctx;
    this.winImg = new Image();
    this.winImg.src = win_images1[this.player];
  }

  draw() {
    this.ctx.drawImage(this.winImg, 0, 0, 600, 286, 360, 70, 500, 286);
  }
}

class Player2Wins {
  constructor(ctx, playerSelect) {
    this.player = playerSelect;
    this.ctx = ctx;
    this.winImg = new Image();
    this.winImg.src = win_images2[this.player];
  }

  draw() {
    this.ctx.drawImage(this.winImg, 0, 0, 600, 286, 340, 70, 500, 286);
  }
}

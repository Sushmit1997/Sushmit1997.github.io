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

//Haduoken Code

class Hadouken {
  constructor(ctx, startPointX) {
    this.ctx = ctx;
    this.handPosition = 60;
    this.startPointX = startPointX + this.handPosition;
    this.startPointY = 220;
    this.yFrameAdjuster = 2.5;

    // Idle Image
    this.imgHadou = new Image();
    this.imgHadou.src = './img/hadouken.png';
    this.hadouX = 68;
    this.hadouY = 60;
    this.imgHadou.frames = 2;
    this.imgHadou.frameIndex = 0;

    // Impact Image
    this.imgHadouImpact = new Image();
    this.imgHadouImpact.src = './img/hadouken-impact.png';
    this.hadouImpactX = 84;
    this.hadouImpactY = 40;
    this.imgHadouImpact.frames = 4;
    this.imgHadouImpact.frameIndex = 0;
  }

  drawMoving(framesCounter) {
    this.ctx.drawImage(
      this.imgHadou,
      this.imgHadou.frameIndex * Math.floor(this.hadouX / this.imgHadou.frames),
      0,
      Math.floor(this.hadouX / this.imgHadou.frames),
      this.hadouY,
      (this.startPointX += 3.5),
      this.startPointY,
      this.hadouX,
      this.hadouY * this.yFrameAdjuster
    );

    this.animateImgMoving(framesCounter);
  }

  animateImgMoving(framesCounter) {
    if (framesCounter % 30 === 0) {
      this.imgHadou.frameIndex += 1;

      if (this.imgHadou.frameIndex > 1) this.imgHadou.frameIndex = 0;
    }
  }

  drawImpact(framesCounter) {
    this.ctx.drawImage(
      this.imgHadouImpact,
      this.imgHadouImpact.frameIndex *
        Math.floor(this.hadouImpactX / this.imgHadouImpact.frames),
      0,
      Math.floor(this.hadouImpactX / this.imgHadouImpact.frames),
      this.hadouImpactY,
      this.startPointX,
      this.startPointY,
      this.hadouImpactX,
      this.hadouImpactY * this.yFrameAdjuster
    );

    this.animateImgImpact(framesCounter);
  }

  animateImgImpact(framesCounter) {
    if (framesCounter % 30 === 0) {
      this.imgHadouImpact.frameIndex += 1;

      if (this.imgHadouImpact.frameIndex > 1) this.imgHadou.frameIndex = 0;
    }
  }

  reset(startPointPlayer) {
    this.startPointX = startPointPlayer;
  }
}

class Kikouken {
  constructor(ctx, startPointX) {
    this.ctx = ctx;
    this.handPosition = -1;
    this.startPointX = startPointX + this.handPosition;
    this.startPointY = 200;
    this.yFrameAdjuster = 2.5;

    // Idle Image
    this.imgKikou = new Image();
    this.imgKikou.src = './img/kikouken.png';
    this.kikouX = 280;
    this.kikouY = 40;
    this.imgKikou.frames = 7;
    this.imgKikou.frameIndex = 6;

    // Impact Image
    // this.imgKikouImpact = new Image();
    // this.imgKikouImpact.src = "./img/kikouken-impact.png";
    // this.kikouImpactX = 84;
    // this.kikouImpactY = 40;
    // this.imgKikouImpact.frames = 4;
    // this.imgKikouImpact.frameIndex = 0;
  }

  drawMoving(framesCounter) {
    this.ctx.drawImage(
      this.imgKikou,
      this.imgKikou.frameIndex * Math.floor(this.kikouX / this.imgKikou.frames),
      0,
      Math.floor(this.kikouX / this.imgKikou.frames),
      this.kikouY,
      (this.startPointX -= 3.5),
      this.startPointY,
      this.kikouX / 2,
      this.kikouY * this.yFrameAdjuster
    );

    this.animateImgMoving(framesCounter);
  }

  animateImgMoving(framesCounter) {
    if (framesCounter % 10 === 0) {
      this.imgKikou.frameIndex -= 1;

      if (this.imgKikou.frameIndex < 0) this.imgKikou.frameIndex = 6;
    }
  }

  reset(startPointPlayer) {
    this.startPointX = startPointPlayer;
  }
}

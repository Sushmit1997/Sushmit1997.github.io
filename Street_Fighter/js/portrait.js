Portrait1_resource = {
  chun: './images/char_portrait/flipped/chun-img.png',
  ken: './images/char_portrait/flipped/ken-img.png',
  ryu: './images/char_portrait/flipped/ryu-img.png',
  blanka: './images/char_portrait/flipped/blanka-img.png',
};

class Portrait1 {
  constructor(ctx, x, y, playerSelect) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.playerSelect = playerSelect;
    this.player1Img = new Image();
    this.player1Img.src = Portrait1_resource[this.playerSelect];
  }

  draw() {
    this.ctx.drawImage(this.player1Img, 0, 0, 500, 300, 385, 15, 1200, 500);
  }
}

Portrait2_resource = {
  chun: './images/char_portrait/chun-img.png',
  ken: './images/char_portrait/ken-img.png',
  ryu: './images/char_portrait/ryu-img.png',
  blanka: './images/char_portrait/blanka-img.png',
};

class Portrait2 {
  constructor(ctx, x, y, playerSelect) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.playerSelect = playerSelect;
    this.player2Img = new Image();
    this.player2Img.src = Portrait2_resource[this.playerSelect];
  }
  draw() {
    this.ctx.drawImage(this.player2Img, 0, 0, 500, 300, 550, 15, 1200, 500);
  }
}

class VsLogo {
  constructor(ctx) {
    this.ctx = ctx;
    this.vsImg = new Image();
    this.vsImg.src = './images/ko.png';
  }

  draw() {
    this.ctx.drawImage(this.vsImg, 0, 0, 500, 300, 450, 20, 500, 300);
  }
}

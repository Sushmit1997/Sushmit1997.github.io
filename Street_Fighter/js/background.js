class Background {
  constructor(ctx) {
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = '../images/bg.jpg';

    // this.x = 0;
    // this.y = 0;
  }

  draw() {
    this.ctx.drawImage(this.img, 0, 0, 1000, 400, 0, 0, 1000, 400);
  }
}

// void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);

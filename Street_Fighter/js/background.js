class Background {
  constructor(ctx) {
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = './images/bg2.gif';
  }

  draw() {
    this.ctx.drawImage(this.img, 0, 0, 1000, 400, 0, 0, 1000, 400);
  }
}

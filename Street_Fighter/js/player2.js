class Player2 {
  constructor(ctx, keys, selected) {
    var player = selected;
    console.log(player);
    this.ctx = ctx;
    this.keys = keys;
    this.states = {
      left: false,
      right: false,
    };

    this.startPointX = 660;
    this.startPointY = 150;
    this.yFrameAdjuster = 2.5;
    this.separator = this.startPointX - 50;

    // Idle Image
    this.imgIdlep2 = new Image();
    this.imgIdlep2.src = './images/chunli_assets/chun_idle.png';
    this.chunIdleX = 188;
    this.chunIdleY = 92;
    this.imgIdlep2.frames = 4;
    this.imgIdlep2.frameIndex = 0;

    // Walk Image
    this.imgWalkp2 = new Image();
    this.imgWalkp2.src = './images/chunli_assets/chun_walk.png';
    this.chunWalkX = 424;
    this.chunWalkY = 92;
    this.imgWalkp2.frames = 8;
    this.imgWalkp2.frameIndex = 0;
  }

  draw(framesCounter) {
    if (this.states.left || this.states.right) {
      this.drawWalk(framesCounter);
    }
  }

  drawIdle(framesCounter) {
    this.ctx.drawImage(
      this.imgIdlep2,
      this.imgIdlep2.frameIndex *
        Math.floor(this.chunIdleX / this.imgIdlep2.frames),
      0,
      Math.floor(this.chunIdleX / this.imgIdlep2.frames),
      this.chunIdleY,
      this.startPointX,
      this.startPointY,
      this.chunIdleX / 1.5,
      this.chunIdleY * 2.5
    );

    this.animateImgIdle(framesCounter);
  }

  animateImgIdle(framesCounter) {
    if (framesCounter % 10 === 0) {
      this.imgIdlep2.frameIndex += 1;

      if (this.imgIdlep2.frameIndex > 2) this.imgIdlep2.frameIndex = 0;
    }
  }

  //   drawWalk(framesCounter) {
  //     this.ctx.drawImage(
  //       this.imgWalkp2,
  //       this.imgWalkp2.frameIndex *
  //         Math.floor(this.chunWalkX / this.imgWalkp2.frames),
  //       0,
  //       Math.floor(this.chunWalkX / this.imgWalkp2.frames),
  //       this.chunWalkY,
  //       this.startPointX,
  //       this.startPointY,
  //       this.chunWalkX / 3,
  //       this.chunWalkY * 2.5
  //     );

  //     this.animateImgWalk(framesCounter);
  //   }

  move() {
    if (this.states.left) {
      this.startPointX -= 3;
    }
    if (this.states.right) {
      this.startPointX += 3;
    }
    // console.log('for 2', this.startPointX);
  }
}

// void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);

var Player2_resource = {
  chun: {
    walk: './images/chunli_assets/chun_walk.png',
    idle: './images/chunli_assets/chun_idle.png',
    punch: './images/chunli_assets/chun_punch2.png',
    block: './images/chunli_assets/chun_block.png',
    haduoken: './images/chunli_assets/chun_hadouken.png',
    die: './images/chunli_assets/chun_die.png',
    victory: './images/chunli_assets/chun_victory.png',
    values: {
      w: {
        x: 424,
        y: 92,
        f: 8,
        frameIndex: 0,
      },
      i: {
        x: 188,
        y: 92,
        f: 4,
        frameIndex: 0,
      },
      p: {
        x: 171,
        y: 92,
        f: 2,
        frameIndex: 1,
      },
      b: {
        x: 132,
        y: 92,
        f: 2,
        frameIndex: 1,
      },
      v: {
        x: 988,
        y: 142,
        f: 19,
        frameIndex: 18,
      },
      d: {
        x: 415,
        y: 92,
        f: 5,
        frameIndex: 4,
      },
      h: {
        x: 288,
        y: 107,
        f: 4,
        frameIndex: 4,
      },
    },
  },
};

class Player2 {
  constructor(ctx, keys, selected) {
    this.player = selected;
    console.log(this.player);
    this.ctx = ctx;
    this.keys = keys;
    this.states = {
      left: false,
      right: false,
      kick: false,
      hadouken: false,
      block: false,
      jump: false,
      hit: false,
      idle: true,
    };

    this.startPointX = 660;
    this.startPointY = 150;
    this.yFrameAdjuster = 2.5;
    this.separator = this.startPointX - 50;
    this.life = 100;
    this.lose = false;
    this.victory = false;

    // Idle Image
    this.imgIdlep2 = new Image();
    this.imgIdlep2.src = Player2_resource[this.player].idle;
    this.imgIdleX = Player2_resource[this.player].values.i.x;
    this.imgIdleY = Player2_resource[this.player].values.i.y;
    this.imgIdlep2.frames = Player2_resource[this.player].values.i.f;
    this.imgIdlep2.frameIndex =
      Player2_resource[this.player].values.i.frameIndex;

    // Walk Image
    this.imgWalkp2 = new Image();
    this.imgWalkp2.src = './images/chunli_assets/chun_walk.png';
    this.imgWalkX = 424;
    this.imgWalkY = 92;
    this.imgWalkp2.frames = 8;
    this.imgWalkp2.frameIndex = 0;
  }

  draw(framesCounter) {
    if (this.states.left || this.states.right) {
      this.drawWalk(framesCounter);
    } else {
      this.drawIdle(framesCounter);
    }
  }

  drawIdle(framesCounter) {
    this.ctx.drawImage(
      this.imgIdlep2,
      this.imgIdlep2.frameIndex *
        Math.floor(this.imgIdleX / this.imgIdlep2.frames),
      0,
      Math.floor(this.imgIdleX / this.imgIdlep2.frames),
      this.imgIdleY,
      this.startPointX,
      this.startPointY,
      this.imgIdleX / 1.5,
      this.imgIdleY * 2.5
    );

    this.animateImgIdle(framesCounter);
  }

  animateImgIdle(framesCounter) {
    if (framesCounter % 10 === 0) {
      this.imgIdlep2.frameIndex += 1;

      if (this.imgIdlep2.frameIndex > 2) this.imgIdlep2.frameIndex = 0;
    }
  }

  drawWalk(framesCounter) {
    this.ctx.drawImage(
      this.imgWalkp2,
      this.imgWalkp2.frameIndex *
        Math.floor(this.imgWalkX / this.imgWalkp2.frames),
      0,
      Math.floor(this.imgWalkX / this.imgWalkp2.frames),
      this.imgWalkY,
      this.startPointX,
      this.startPointY,
      this.imgWalkX / 3,
      this.imgWalkY * 2.5
    );

    this.animateImgWalk(framesCounter);
  }
  animateImgWalk(framesCounter) {
    if (framesCounter % 10 === 0) {
      this.imgWalkp2.frameIndex += 1;

      if (this.imgWalkp2.frameIndex > 7) this.imgWalkp2.frameIndex = 0;
    }
  }

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

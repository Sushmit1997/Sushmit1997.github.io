var Player1_source = {
  ken: {
    walk: '../images/ken_assets/ken_walk.png',
    idle: '../images/ken_assets/ken_idle.png',

    values: {
      w: {
        x: 235,
        y: 92,
        f: 5,
      },
      i: {
        x: 188,
        y: 92,
        f: 4,
      },
    },
  },
};

class Player1 {
  constructor(ctx, keys, selected) {
    this.player = selected;
    console.log(this.player);
    this.ctx = ctx;
    this.keys = keys;
    this.states = {
      left: false,
      right: false,
      punch: false,
    };
    if (this.player === 'mike') {
      setInterval(() => {
        this.states.hadouken = false;
      }, 100);
    }
    this.startPointX = 200;
    this.startPointY = 150;
    this.separator = 65;
    this.yFrameAdjuster = 2.5;

    if (this.startPointX === 0) {
      this.startPoint += 1;
    }

    // Idle Image
    this.imgIdlep1 = new Image();
    this.imgIdlep1.src = Player1_source[this.player].idle;
    this.kenIdleX = Player1_source[this.player].values.i.x;
    this.kenIdleY = Player1_source[this.player].values.i.y;
    this.imgIdlep1.frames = Player1_source[this.player].values.i.f;
    this.imgIdlep1.frameIndex = 0;

    // Walk Image
    this.imgWalkp1 = new Image();
    this.imgWalkp1.src = Player1_source[this.player].walk;
    this.kenWalkX = Player1_source[this.player].values.w.x;
    this.kenWalkY = Player1_source[this.player].values.w.x;
    this.imgWalkp1.frames = Player1_source[this.player].values.w.f;
    this.imgWalkp1.frameIndex = 0;
  }

  draw(framesCounter) {
    if (this.states.left || this.states.right) {
      this.drawWalk(framesCounter);
    } else if (this.states.punch) {
      this.drawPunch(framesCounter);
      setTimeout(() => {
        this.states.punch = false;
        this.imgPunchp1.frameIndex = 0;
      }, 300);
    } else if (this.states.hadouken) {
      this.drawHadouken(framesCounter);
      setTimeout(() => {
        this.states.hadouken = false;
        this.imgHadoup1.frameIndex = 0;
      }, 600);
    } else if (this.states.block) {
      this.drawBlock(framesCounter);
      setTimeout(() => {
        this.states.block = false;
        this.imgBlockp1.frameIndex = 0;
      }, 200);
    } else if (this.life <= 0) {
      this.drawDie(framesCounter);
    } else if (this.victory) {
      this.drawVictory(framesCounter);
    } else {
      this.drawIdle(framesCounter);
    }
  }

  drawIdle(framesCounter) {
    this.ctx.drawImage(
      this.imgIdlep1,
      this.imgIdlep1.frameIndex *
        Math.floor(this.kenIdleX / this.imgIdlep1.frames),
      0,
      Math.floor(this.kenIdleX / this.imgIdlep1.frames),
      this.kenIdleY,
      this.startPointX,
      this.startPointY,
      this.kenIdleX / 1.5,
      this.kenIdleY * this.yFrameAdjuster
    );

    this.animateImgIdle(framesCounter);
  }

  animateImgIdle(framesCounter) {
    if (framesCounter % 10 === 0) {
      this.imgIdlep1.frameIndex += 1;

      if (this.imgIdlep1.frameIndex > 2) this.imgIdlep1.frameIndex = 0;
    }
  }

  drawWalk(framesCounter) {
    this.ctx.drawImage(
      this.imgWalkp1,
      this.imgWalkp1.frameIndex *
        Math.floor(this.kenWalkX / this.imgWalkp1.frames),
      0,
      Math.floor(this.kenWalkX / this.imgWalkp1.frames),
      this.kenWalkY,
      this.startPointX,
      this.startPointY,
      this.kenWalkX / 2,
      this.kenWalkY * this.yFrameAdjuster
    );

    this.animateImgWalk(framesCounter);
  }

  animateImgWalk(framesCounter) {
    if (framesCounter % 10 === 0) {
      this.imgWalkp1.frameIndex += 1;

      if (this.imgWalkp1.frameIndex > 4) this.imgWalkp1.frameIndex = 0;
    }
  }

  move() {
    if (this.states.left) {
      this.startPointX -= 4;
    }
    if (this.states.right) {
      this.startPointX += 4;
    }
    // console.log('for 1', this.startPointX);
  }
}

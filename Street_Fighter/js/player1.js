var Player1_source = {
  ken: {
    walk: './images/ken_assets/ken_walk.png',
    idle: './images/ken_assets/ken_idle.png',
    punch: './images/ken_assets/ken_punch4.png',
    block: './images/ken_assets/ken_block.png',
    hit: './images/ken_assets/ken_hit.png',
    jump: './images/ken_assets/ken_jump2.png',
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
      p: {
        x: 77,
        y: 94,
        f: 1,
      },
      b: {
        x: 104,
        y: 92,
        f: 2,
      },
      hit: {
        x: 118,
        y: 92,
        f: 2,
      },
      j: {
        x: 76,
        y: 92,
        f: 2,
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
      block: false,
      jump: false,
      hit: false,
    };
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

    //Jump Image
    this.imgJumpp1 = new Image();
    this.imgJumpp1.src = Player1_source[this.player].jump;
    this.imgJumpX = Player1_source[this.player].values.j.x;
    this.imgJumpY = Player1_source[this.player].values.j.y;
    this.imgJumpp1.frames = Player1_source[this.player].values.j.f;
    this.imgJumpp1.frameIndex = 0;

    //Punch Image
    this.imgPunchp1 = new Image();
    this.imgPunchp1.src = Player1_source[this.player].punch;
    this.imgPunchX = Player1_source[this.player].values.p.x;
    this.imgPunchY = Player1_source[this.player].values.p.y;
    this.imgPunchp1.frames = Player1_source[this.player].values.p.f;
    this.imgPunchp1.frameIndex = 0;

    //Block Image
    this.imgBlockp1 = new Image();
    this.imgBlockp1.src = Player1_source[this.player].block;
    this.imgBlockX = Player1_source[this.player].values.b.x;
    this.imgBlockY = Player1_source[this.player].values.b.y;
    this.imgBlockp1.frames = Player1_source[this.player].values.b.f;
    this.imgBlockp1.frameIndex = 0;

    //Hit Image
    this.imgHitp1 = new Image();
    this.imgHitp1.src = Player1_source[this.player].hit;
    this.imgHitX = Player1_source[this.player].values.hit.x;
    this.imgHitY = Player1_source[this.player].values.hit.y;
    this.imgHitp1.frames = Player1_source[this.player].values.hit.f;
    this.imgHitp1.frameIndex = 0;
  }

  detectPunch(player1, player2) {
    if (
      player2.startPointX - player1.startPointX < 120 &&
      this.states.punch == true
    ) {
      return true;
    }
  }

  draw(framesCounter) {
    if (this.states.left || this.states.right) {
      this.drawWalk(framesCounter);
    } else if (this.states.hit) {
      console.log('Hit');
      this.states.idle = false;
      this.drawHit(framesCounter);
      setTimeout(() => {
        this.states.idle = true;
        this.states.hit = false;
      }, 350);
    } else if (this.states.jump) {
      console.log('jump');
      this.drawJump(framesCounter);
      // setTimeout(() => {
      //
      //   this.imgJumpp1.frameIndex = 0;
      //   this.startPointY = 150;
      // }, 400);
    } else if (this.states.punch) {
      this.drawPunch(framesCounter);
      // setTimeout(() => {
      //   this.states.punch = false;
      //   this.imgPunchp1.frameIndex = 0;
      // }, 300);
    } else if (this.states.block) {
      this.drawBlock(framesCounter);
      // setTimeout(() => {
      //   this.states.block = false;
      //   this.imgBlockp1.frameIndex = 0;
      // }, 200);
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

  drawJump(framesCounter) {
    this.ctx.drawImage(
      this.imgJumpp1,
      this.imgJumpp1.frameIndex *
        Math.floor(this.imgJumpX / this.imgJumpp1.frames) *
        3,
      0,
      Math.floor(this.imgJumpX / this.imgJumpp1.frames),
      this.imgJumpY,
      this.startPointX,
      (this.startPointY -= 35),
      this.imgJumpX / 0.8,
      this.imgJumpY * this.yFrameAdjuster
    );
    this.animateImgJump(framesCounter);
  }

  animateImgJump(framesCounter) {
    this.startPointY = 10;
    setTimeout(() => {
      this.startPointY = 150;
      this.states.jump = false;
    }, 300);
  }

  drawPunch(framesCounter) {
    this.ctx.drawImage(
      this.imgPunchp1,
      this.imgPunchp1.frameIndex *
        Math.floor(this.imgPunchX / this.imgPunchp1.frames),
      0,
      Math.floor(this.imgPunchX / this.imgPunchp1.frames),
      this.imgPunchY,
      this.startPointX,
      this.startPointY,
      this.imgPunchX / 0.4,
      this.imgPunchY * this.yFrameAdjuster
    );
    this.animateImgPunch(framesCounter);
  }

  animateImgPunch(framesCounter) {
    if (framesCounter % 20 === 0) {
      this.imgPunchp1.frameIndex += 1;

      if (this.imgPunchp1.frameIndex > 0) this.imgPunchp1.frameIndex = 0;
    }
  }

  drawBlock(framesCounter) {
    this.ctx.drawImage(
      this.imgBlockp1,
      this.imgBlockp1.frameIndex *
        Math.floor(this.imgBlockX / this.imgBlockp1.frames),
      0,
      Math.floor(this.imgBlockX / this.imgBlockp1.frames),
      this.imgBlockY,
      this.startPointX,
      this.startPointY,
      this.imgBlockX / 0.8,
      this.imgBlockY * this.yFrameAdjuster
    );
    this.animateImgBlock(framesCounter);
  }

  animateImgBlock(framesCounter) {
    if (framesCounter % 30 === 0) {
      // Si el frame es el último, se vuelve al primero
      if (this.imgBlockp1.frameIndex > 1) this.imgBlockp1.frameIndex = 0;
    }
  }

  animateImgJump(framesCounter) {
    this.startPointY = 10;
    setTimeout(() => {
      this.startPointY = 150;
      this.states.jump = false;
    }, 300);
  }

  drawHit(framesCounter) {
    this.ctx.drawImage(
      this.imgHitp1,
      this.imgHitp1.frameIndex *
        Math.floor(this.imgHitX / this.imgHitp1.frames),
      0,
      Math.floor(this.imgHitX / this.imgHitp1.frames),
      this.imgHitY,
      this.startPointX,
      this.startPointY,
      this.imgHitX / 0.8,
      this.imgHitY * this.yFrameAdjuster
    );
    this.animateHit(framesCounter);
  }

  animateHit(framesCounter) {
    if (framesCounter % 20 === 0) {
      this.imgHitp1.frameIndex += 1;
      if (this.imgHitp1.frameIndex > 2) this.imgHitp1.frameIndex = 0;
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

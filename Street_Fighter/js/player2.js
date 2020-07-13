var Player2_resource = {
  chun: {
    walk: './images/chunli_assets/chun_walk.png',
    idle: './images/chunli_assets/chun_idle.png',
    punch: './images/chunli_assets/chun_punch2.png',
    block: './images/chunli_assets/chun_block.png',
    haduoken: './images/chunli_assets/chun_hadouken.png',
    jump: './images/chunli_assets/chun_jump.png',
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
        x: 95,
        y: 92,
        f: 1,
        frameIndex: 1,
        offsetX: 0.4,
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
      j: {
        x: 40,
        y: 92,
        f: 1,
      },
    },
  },
};

class Player2 {
  constructor(ctx, keys, selected) {
    this.player = selected;
    console.log(this.player);
    this.ctx = ctx;
    this.life = 100;
    this.keys = keys;
    this.states = {
      left: false,
      right: false,
      kick: false,
      punch: false,
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
    this.imgWalkp2.src = Player2_resource[this.player].walk;
    this.imgWalkX = Player2_resource[this.player].values.w.x;
    this.imgWalkY = Player2_resource[this.player].values.w.y;
    this.imgWalkp2.frames = Player2_resource[this.player].values.w.f;
    this.imgWalkp2.frameIndex = 0;

    //Jump Image
    this.imgJumpp2 = new Image();
    this.imgJumpp2.src = Player2_resource[this.player].jump;
    this.imgJumpX = Player2_resource[this.player].values.j.x;
    this.imgJumpY = Player2_resource[this.player].values.j.y;
    this.imgJumpp2.frames = Player2_resource[this.player].values.j.f;
    this.imgJumpp2.frameIndex = 0;

    //Punch Image
    this.imgPunchp2 = new Image();
    this.imgPunchp2.src = Player2_resource[this.player].punch;
    this.imgPunchX = Player2_resource[this.player].values.p.x;
    this.imgPunchY = Player2_resource[this.player].values.p.y;
    this.imgPunchp2.frames = Player2_resource[this.player].values.p.f;
    this.imgPunchp2.frameIndex =
      Player2_resource[this.player].values.p.frameIndex;

    //Block Image
    this.imgBlockp2 = new Image();
    this.imgBlockp2.src = Player2_resource[this.player].block;
    this.imgBlockX = Player2_resource[this.player].values.b.x;
    this.imgBlockY = Player2_resource[this.player].values.b.y;
    this.imgBlockp2.frames = Player2_resource[this.player].values.b.f;
    this.imgBlockp2.frameIndex =
      Player2_resource[this.player].values.b.frameIndex;
  }

  draw(framesCounter) {
    if (this.startPointY < 150) {
      this.states.jump = true;
    }
    if (this.states.left || this.states.right) {
      this.drawWalk(framesCounter);
    } else if (this.states.punch) {
      this.drawPunch(framesCounter);
    } else if (this.states.jump) {
      console.log('jump2');
      this.drawJump(framesCounter);
    } else if (this.states.block) {
      this.drawBlock(framesCounter);
    } else {
      this.drawIdle(framesCounter);
    }
  }

  detectPunch(player1, player2) {
    if (
      player2.startPointX - player1.startPointX < 120 &&
      this.states.punch == true
    ) {
      return true;
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

  drawPunch(framesCounter) {
    this.ctx.drawImage(
      this.imgPunchp2,
      this.imgPunchp2.frameIndex *
        Math.floor(this.imgPunchX / this.imgPunchp2.frames),
      0,
      Math.floor(this.imgPunchX / this.imgPunchp2.frames),
      this.imgPunchY,
      this.startPointX,
      this.startPointY,
      this.imgPunchX / Player2_resource[this.player].values.p.offsetX,
      this.imgPunchY * this.yFrameAdjuster
    );
    this.animateImgPunch(framesCounter);
  }

  animateImgPunch(framesCounter) {
    if (framesCounter % 20 === 0) {
      this.imgPunchp2.frameIndex = 0;

      if (this.imgPunchp2.frameIndex < 0) this.imgPunchp2.frameIndex = 0;
    }
  }

  drawBlock(framesCounter) {
    this.ctx.drawImage(
      this.imgBlockp2,
      this.imgBlockp2.frameIndex *
        Math.floor(this.imgBlockX / this.imgBlockp2.frames),
      0,
      Math.floor(this.imgBlockX / this.imgBlockp2.frames),
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
      if (this.imgBlockp2.frameIndex > 1) this.imgBlockp2.frameIndex = 0;
    }
  }

  drawJump(framesCounter) {
    this.ctx.drawImage(
      this.imgJumpp2,
      this.imgJumpp2.frameIndex *
        Math.floor(this.imgJumpX / this.imgJumpp2.frames) *
        3,
      0,
      Math.floor(this.imgJumpX / this.imgJumpp2.frames),
      this.imgJumpY,
      this.startPointX,
      (this.startPointY -= 35),
      this.imgJumpX / 0.4,
      this.imgJumpY * this.yFrameAdjuster
    );
    this.animateImgJump(framesCounter);
  }

  animateImgJump(framesCounter) {
    // this.startPointY = 40;
    this.startPointY = 40;
    setTimeout(() => {
      this.startPointY = 150;
      this.states.jump = false;
    }, 200);
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

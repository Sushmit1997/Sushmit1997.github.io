var Player1_source = {
  ken: {
    walk: './images/ken_assets/ken_walk.png',
    idle: './images/ken_assets/ken_idle.png',
    punch: './images/ken_assets/ken_punch4.png',
    block: './images/ken_assets/ken_block.png',
    hit: './images/ken_assets/ken_hit.png',
    jump: './images/ken_assets/ken_jump2.png',
    kick: './images/ken_assets/ken_kick.png',
    crouch: './images/ken_assets/ken_crouch1.png',
    values: {
      w: {
        x: 235,
        y: 92,
        f: 5,
        offsetX: 2,
        offsetIndex: 4,
        offsetStartY: 0,
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
        offsetX: 0.4,
      },
      b: {
        x: 104,
        y: 92,
        f: 2,
        offsetX: 0.8,
      },
      hit: {
        x: 118,
        y: 92,
        f: 2,
        offsetX: 0.8,
      },
      j: {
        x: 76,
        y: 92,
        f: 2,
        offsetX: 0.8,
      },
      k: {
        x: 75,
        y: 92,
        f: 1,
        offsetStartY: 0,
        offsetX: 0.4,
      },
      c: {
        x: 50,
        y: 72,
        f: 1,
        offsetStartY: 60,
        offsetX: 0.4,
      },
    },
  },
  blanka: {
    yFrameAdjuster: 2.5,
    walk: './images/blanka_assets/blanka_walk.png',
    idle: './images/blanka_assets/blanka_idle.png',
    die: './images/blanka_assets/blanka_die.png',
    victory: './images/blanka_assets/blanka_victory.png',
    hadouken: './images/blanka_assets/ken_hadouken.png',
    punch: './images/blanka_assets/blanka_punch.png',
    block: './images/blanka_assets/blanka_block.png',
    jump: './images/blanka_assets/blanka_jump.png',
    hit: './images/blanka_assets/blanka_hit.png',
    kick: './images/blanka_assets/blanka_kick.png',
    crouch: './images/blanka_assets/blanka_crouch.png',
    values: {
      w: {
        x: 355,
        y: 73,
        f: 5,
        offsetX: 2,
        offsetIndex: 4,
        offsetStartY: 40,
      },
      i: {
        x: 281,
        y: 95,
        f: 4,
      },
      d: {
        x: 442,
        y: 91,
        f: 5,
      },
      h: {
        x: 288,
        y: 92,
        f: 4,
        offsetStartY: 0,
      },
      p: {
        x: 103,
        y: 98,
        f: 1,
        offsetX: 0.4,
      },
      b: {
        x: 72,
        y: 93,
        f: 1,
        offsetX: 0.4,
      },
      j: {
        x: 72,
        y: 112,
        f: 1,
        offsetX: 0.3,
      },
      hit: {
        x: 65,
        y: 100,
        f: 1,
        offsetX: 0.6,
      },
      k: {
        x: 105,
        y: 110,
        f: 1,
        offsetStartY: 30,
        offsetX: 0.4,
      },
      c: {
        x: 57,
        y: 57,
        f: 1,
        offsetStartY: 120,
        offsetX: 0.3,
      },
    },
  },
  ryu: {
    yFrameAdjuster: 2.5,
    walk: './images/ryu_assets/ryu_walk.png',
    idle: './images/ryu_assets/ryu_idle.png',
    die: './images/ryu_assets/ryu_die.png',
    victory: './images/ryu_assets/ryu_victory.png',
    hadouken: './images/ryu_assets/ryu_haduoken.png',
    punch: './images/ryu_assets/ryu_punch.png',
    block: './images/ryu_assets/ryu_block.png',
    jump: './images/ryu_assets/ryu_jump.png',
    hit: './images/ryu_assets/ryu_hit.png',
    kick: './images/ryu_assets/ryu_kick.png',
    crouch: './images/ryu_assets/ryu_crouch.png',
    values: {
      w: {
        x: 235,
        y: 92,
        f: 5,
        offsetX: 2,
        offsetIndex: 4,
        offsetStartY: 0,
      },
      i: {
        x: 193,
        y: 92,
        f: 4,
      },
      d: {
        x: 379,
        y: 80,
        f: 5,
      },
      v: {
        x: 125,
        y: 92,
        f: 3,
        offsetStartY: 0,
        offsetX: 1.5,
      },
      h: {
        x: 288,
        y: 92,
        f: 4,
        offsetStartY: 0,
      },
      p: {
        x: 77,
        y: 94,
        f: 1,
        offsetX: 0.4,
      },
      b: {
        x: 104,
        y: 92,
        f: 2,
        offsetX: 0.8,
      },
      j: {
        x: 76,
        y: 92,
        f: 2,
        offsetX: 0.8,
      },
      hit: {
        x: 118,
        y: 92,
        f: 2,
        offsetX: 0.8,
      },
      k: {
        x: 75,
        y: 92,
        f: 1,
        offsetStartY: 0,
        offsetX: 0.4,
      },
      c: {
        x: 50,
        y: 72,
        f: 1,
        offsetStartY: 80,
        offsetX: 0.4,
      },
    },
  },
  chun: {
    yFrameAdjuster: 2.5,
    idle: './images/chunli_assets/flipped/chun_idle.png',
    walk: './images/chunli_assets/flipped/chun_walk.png',
    die: './images/chunli_assets/flipped/chun_die.png',
    victory: './images/chunli_assets/flipped/chun_victory.png',
    hadouken: './images/chunli_assets/flipped/chun_hadouken.png',
    punch: './images/chunli_assets/flipped/chun_punch2.png',
    block: './images/chunli_assets/flipped/chun_block.png',
    jump: './images/chunli_assets/flipped/chun_jump.png',
    hit: './images/chunli_assets/flipped/chun_hit.png',
    kick: './images/chunli_assets/flipped/chun_kick.png',
    crouch: './images/chunli_assets/flipped/chun_crouch.png',
    values: {
      w: {
        x: 424,
        y: 92,
        f: 8,
        offsetX: 3,
        offsetIndex: 7,
        offsetStartY: 0,
      },
      i: {
        x: 188,
        y: 92,
        f: 4,
      },
      d: {
        x: 415,
        y: 92,
        f: 5,
      },
      v: {
        x: 988,
        y: 92,
        f: 19,
        offsetStartY: 125,
        offsetX: 6,
      },
      h: {
        x: 288,
        y: 92,
        f: 4,
        offsetStartY: 33,
        offsetX: 1,
      },
      p: {
        x: 98,
        y: 92,
        f: 1,
        offsetX: 0.5,
      },
      b: {
        x: 132,
        y: 92,
        f: 2,
        offsetX: 0.8,
      },
      j: {
        x: 84,
        y: 92,
        f: 2,
        offsetX: 0.8,
      },
      hit: {
        x: 148,
        y: 92,
        f: 2,
        offsetX: 0.8,
      },
      k: {
        x: 75,
        y: 92,
        f: 1,
        offsetStartY: 0,
        offsetX: 0.4,
      },
      c: {
        x: 48,
        y: 66,
        f: 1,
        offsetStartY: 80,
        offsetX: 0.4,
      },
    },
  },
};

class Player1 {
  constructor(ctx, keys, selected) {
    this.player = selected;
    this.ctx = ctx;
    this.life = 100;
    this.keys = keys;
    this.states = {
      left: false,
      right: false,
      punch: false,
      block: false,
      jump: false,
      hit: false,
      idle: true,
      crouch: false,
      kick: false,
    };
    this.startPointX = 200;
    this.startPointY = 150;
    this.separator = 65;
    this.yFrameAdjuster = 2.5;
    this.victory = false;

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

    //Kick Image
    this.imgKickp1 = new Image();
    this.imgKickp1.src = Player1_source[this.player].kick;
    this.imgKickX = Player1_source[this.player].values.k.x;
    this.imgKickY = Player1_source[this.player].values.k.y;
    this.imgKickp1.frames = Player1_source[this.player].values.k.f;
    this.imgKickp1.frameIndex = 0;

    //Crouch Image
    this.imgCrouchp1 = new Image();
    this.imgCrouchp1.src = Player1_source[this.player].crouch;
    this.imgCrouchX = Player1_source[this.player].values.c.x;
    this.imgCrouchY = Player1_source[this.player].values.c.y;
    this.imgCrouchp1.frames = Player1_source[this.player].values.c.f;
    this.imgCrouchp1.frameIndex = 0;
  }

  detectPunch(player1, player2) {
    if (
      player2.startPointX - player1.startPointX < 120 &&
      this.states.punch == true
    ) {
      return true;
    }
  }

  detectKick(player1, player2) {
    if (
      player2.startPointX - player1.startPointX < 120 &&
      this.states.kick == true
    ) {
      return true;
    }
  }

  draw(framesCounter) {
    if (this.startPointY < 150) {
      this.states.jump = true;
    }
    if (this.states.left || this.states.right) {
      this.drawWalk(framesCounter);
    } else if (this.states.crouch) {
      this.drawCrouch(framesCounter);
    } else if (this.states.kick) {
      this.drawKick(framesCounter);
    } else if (this.states.hit) {
      console.log('Hit');
      this.states.idle = false;
      this.drawHit(framesCounter);
      setTimeout(() => {
        this.states.idle = true;
        this.states.hit = false;
      }, 200);
    } else if (this.states.jump) {
      console.log('jump1');
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
    } else if (this.states.idle) {
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
      this.startPointY + Player1_source[this.player].values.w.offsetStartY,
      this.kenWalkX / Player1_source[this.player].values.w.offsetX,
      this.kenWalkY * this.yFrameAdjuster
    );

    this.animateImgWalk(framesCounter);
  }

  animateImgWalk(framesCounter) {
    if (framesCounter % 10 === 0) {
      this.imgWalkp1.frameIndex += 1;

      if (
        this.imgWalkp1.frameIndex >
        Player1_source[this.player].values.w.offsetIndex
      )
        this.imgWalkp1.frameIndex = 0;
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
      this.imgJumpX / Player1_source[this.player].values.j.offsetX,
      this.imgJumpY * this.yFrameAdjuster
    );
    this.animateImgJump(framesCounter);
  }

  animateImgJump(framesCounter) {
    this.startPointY = 40;
    setTimeout(() => {
      this.startPointY = 150;
      this.states.jump = false;
    }, 200);
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
      this.imgPunchX / Player1_source[this.player].values.p.offsetX,
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
      this.imgBlockX / Player1_source[this.player].values.b.offsetX,
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
    this.startPointY = 40;
    setTimeout(() => {
      this.startPointY = 150;
      this.states.jump = false;
    }, 300);
  }

  drawKick(framesCounter) {
    this.ctx.drawImage(
      this.imgKickp1,
      this.imgKickp1.frameIndex *
        Math.floor(this.imgKickX / this.imgKickp1.frames),
      0,
      Math.floor(this.imgKickX / this.imgKickp1.frames),
      this.imgKickY,
      this.startPointX,
      this.startPointY - Player1_source[this.player].values.k.offsetStartY,
      this.imgKickX / Player1_source[this.player].values.k.offsetX,
      this.imgKickY * this.yFrameAdjuster
    );
    this.animateImgKick(framesCounter);
  }

  animateImgKick(framesCounter) {
    if (framesCounter % 20 === 0) {
      this.imgKickp1.frameIndex += 1;

      if (this.imgKickp1.frameIndex > 0) this.imgKickp1.frameIndex = 0;
    }
  }

  drawCrouch(framesCounter) {
    this.ctx.drawImage(
      this.imgCrouchp1,
      this.imgCrouchp1.frameIndex *
        Math.floor(this.imgCrouchX / this.imgCrouchp1.frames),
      0,
      Math.floor(this.imgCrouchX / this.imgCrouchp1.frames),
      this.imgKickY,
      this.startPointX,
      this.startPointY + Player1_source[this.player].values.c.offsetStartY,
      this.imgCrouchX / Player1_source[this.player].values.c.offsetX,
      this.imgCrouchY * 3.1
    );
    this.animateImgCrouch(framesCounter);
  }

  animateImgCrouch(framesCounter) {
    if (framesCounter % 20 === 0) {
      this.imgCrouchp1.frameIndex += 1;

      if (this.imgCrouchp1.frameIndex > 0) this.imgCrouchp1.frameIndex = 0;
    }
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

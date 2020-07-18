var sound = new Array();
sound[0] = new Audio(
  'https://jonkantner.com/experiments/stick_fight/sounds/hit.ogg'
);
sound[1] = new Audio(
  'https://jonkantner.com/experiments/stick_fight/sounds/miss.ogg'
);

var Player2_source = {
  chun: {
    walk: './images/chunli_assets/chun_walk.png',
    idle: './images/chunli_assets/chun_idle.png',
    punch: './images/chunli_assets/chun_punch2.png',
    block: './images/chunli_assets/chun_block.png',
    haduoken: './images/chunli_assets/chun_hadouken.png',
    jump: './images/chunli_assets/chun_jump.png',
    hit: './images/chunli_assets/chun_hit.png',
    kick: './images/chunli_assets/chun_kick.png',
    crouch: './images/chunli_assets/chun_crouch.png',
    values: {
      w: {
        x: 424,
        y: 92,
        f: 8,
        frameIndex: 0,
        offsetFrameIndex: 7,
        offsetX: 3,
        offsetStartY: 0,
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
        offsetX: 0.8,
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
        offsetStartY: 33,
      },
      j: {
        x: 40,
        y: 92,
        f: 1,
        offsetX: 0.4,
      },
      hit: {
        x: 74,
        y: 91,
        f: 1,
        offsetX: 0.6,
        offsetStartY: 0,
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
  ken: {
    walk: './images/ken_assets/flipped/ken_walk.png',
    idle: './images/ken_assets/flipped/ken_idle.png',
    punch: './images/ken_assets/flipped/ken_punch4.png',
    block: './images/ken_assets/flipped/ken_block.png',
    haduoken: './images/ken_assets/flipped/ken_hadouken.png',
    die: './images/ken_assets/flipped/ken_die.png',
    victory: './images/ken_assets/flipped/ken_victory.png',
    kick: './images/ken_assets/flipped/ken_kick.png',
    crouch: './images/ken_assets/flipped/ken_crouch1.png',
    jump: './images/ken_assets/flipped/ken_jump2.png',
    hit: './images/ken_assets/flipped/ken_hit.png',
    values: {
      w: {
        x: 235,
        y: 92,
        f: 5,
        frameIndex: 0,
        offsetStartY: 10,
        offsetX: 2,
        offsetFrameIndex: 4,
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
        offsetX: 0.8,
      },
      b: {
        x: 104,
        y: 92,
        f: 2,
        frameIndex: 1,
        offsetX: 0.8,
      },
      v: {
        x: 988,
        y: 142,
        f: 19,
        frameIndex: 18,
        offsetStartY: 0,
      },
      d: {
        x: 468,
        y: 92,
        f: 6,
        frameIndex: 6,
      },
      h: {
        x: 288,
        y: 192,
        f: 4,
        frameIndex: 4,
        offsetStartY: 0,
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
      hit: {
        x: 118,
        y: 92,
        f: 2,
        offsetX: 0.8,
        offsetStartY: 0,
      },
      j: {
        x: 39,
        y: 92,
        f: 1,
        offsetX: 0.4,
      },
    },
  },
  blanka: {
    walk: './images/blanka_assets/flipped/blanka_walk.png',
    idle: './images/blanka_assets/flipped/blanka_idle.png',
    punch: './images/blanka_assets/flipped/blanka_punch.png',
    block: './images/blanka_assets/flipped/blanka_block.png',
    haduoken: './images/blanka_assets/flipped/ken_hadouken.png',
    die: './images/blanka_assets/flipped/ken_die.png',
    victory: './images/blanka_assets/flipped/ken_victory.png',
    kick: './images/blanka_assets/flipped/blanka_kick.png',
    jump: './images/blanka_assets/flipped/blanka_jump.png',
    crouch: './images/blanka_assets/flipped/blanka_crouch.png',
    hit: './images/blanka_assets/flipped/blanka_hit.png',
    values: {
      w: {
        x: 355,
        y: 73,
        f: 5,
        frameIndex: 0,
        offsetX: 2,
        offsetStartY: 40,
        offsetFrameIndex: 4,
      },
      i: {
        x: 281,
        y: 95,
        f: 4,
        frameIndex: 0,
      },
      p: {
        x: 171,
        y: 98,
        f: 2,
        frameIndex: 1,
        offsetX: 0.8,
      },
      b: {
        x: 72,
        y: 93,
        f: 1,
        frameIndex: 0,
        offsetX: 0.4,
      },
      v: {
        x: 988,
        y: 142,
        f: 19,
        frameIndex: 18,
        offsetStartY: 0,
      },
      d: {
        x: 468,
        y: 92,
        f: 6,
        frameIndex: 6,
      },
      h: {
        x: 288,
        y: 192,
        f: 4,
        frameIndex: 4,
        offsetStartY: 0,
      },
      k: {
        x: 105,
        y: 110,
        f: 1,
        offsetStartY: 30,
        offsetX: 0.4,
      },
      c: {
        x: 50,
        y: 72,
        f: 1,
        offsetStartY: 120,
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
        offsetX: 0.4,
        offsetStartY: 20,
      },
    },
  },
  ryu: {
    walk: './images/ryu_assets/flipped/ryu_walk.png',
    idle: './images/ryu_assets/flipped/ryu_idle.png',
    punch: './images/ryu_assets/flipped/ryu_punch.png',
    block: './images/ryu_assets/flipped/ryu_block.png',
    haduoken: './images/ryu_assets/flipped/ryu_hadouken.png',
    die: './images/ryu_assets/flipped/ryu_die.png',
    victory: './images/ryu_assets/flipped/ryu_victory.png',
    kick: './images/ryu_assets/flipped/ryu_kick.png',
    crouch: './images/ryu_assets/flipped/ryu_crouch.png',
    jump: './images/ryu_assets/flipped/ryu_jump.png',
    hit: './images/ryu_assets/flipped/ryu_hit.png',
    values: {
      w: {
        x: 235,
        y: 92,
        f: 5,
        frameIndex: 0,
        offsetX: 2,
        offsetStartY: 0,
        offsetFrameIndex: 4,
      },
      i: {
        x: 193,
        y: 92,
        f: 4,
        frameIndex: 0,
      },
      p: {
        x: 77,
        y: 94,
        f: 1,
        frameIndex: 1,
        offsetX: 0.4,
      },
      b: {
        x: 108,
        y: 92,
        f: 2,
        frameIndex: 1,
        offsetX: 0.8,
      },
      v: {
        x: 125,
        y: 92,
        f: 3,
        frameIndex: 3,
        offsetStartY: 0,
      },
      d: {
        x: 379,
        y: 80,
        f: 5,
        frameIndex: 5,
      },
      h: {
        x: 272,
        y: 86,
        f: 4,
        frameIndex: 4,
        offsetStartY: 0,
      },
      k: {
        x: 70,
        y: 92,
        f: 1,
        offsetStartY: 10,
        offsetX: 0.4,
      },
      c: {
        x: 45,
        y: 57,
        f: 1,
        offsetStartY: 120,
        offsetX: 0.3,
      },
      hit: {
        x: 103,
        y: 91,
        f: 2,
        offsetX: 0.8,
        offsetStartY: 20,
      },
      j: {
        x: 76,
        y: 92,
        f: 2,
        offsetX: 0.8,
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
      crouch: false,
      kick: false,
      hadouken: false,
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
    this.imgIdlep2.src = Player2_source[this.player].idle;
    this.imgIdleX = Player2_source[this.player].values.i.x;
    this.imgIdleY = Player2_source[this.player].values.i.y;
    this.imgIdlep2.frames = Player2_source[this.player].values.i.f;
    this.imgIdlep2.frameIndex = Player2_source[this.player].values.i.frameIndex;

    // Walk Image
    this.imgWalkp2 = new Image();
    this.imgWalkp2.src = Player2_source[this.player].walk;
    this.imgWalkX = Player2_source[this.player].values.w.x;
    this.imgWalkY = Player2_source[this.player].values.w.y;
    this.imgWalkp2.frames = Player2_source[this.player].values.w.f;
    this.imgWalkp2.frameIndex = 0;

    //Jump Image
    this.imgJumpp2 = new Image();
    this.imgJumpp2.src = Player2_source[this.player].jump;
    this.imgJumpX = Player2_source[this.player].values.j.x;
    this.imgJumpY = Player2_source[this.player].values.j.y;
    this.imgJumpp2.frames = Player2_source[this.player].values.j.f;
    this.imgJumpp2.frameIndex = 0;

    //Punch Image
    this.imgPunchp2 = new Image();
    this.imgPunchp2.src = Player2_source[this.player].punch;
    this.imgPunchX = Player2_source[this.player].values.p.x;
    this.imgPunchY = Player2_source[this.player].values.p.y;
    this.imgPunchp2.frames = Player2_source[this.player].values.p.f;
    this.imgPunchp2.frameIndex =
      Player2_source[this.player].values.p.frameIndex;

    //Block Image
    this.imgBlockp2 = new Image();
    this.imgBlockp2.src = Player2_source[this.player].block;
    this.imgBlockX = Player2_source[this.player].values.b.x;
    this.imgBlockY = Player2_source[this.player].values.b.y;
    this.imgBlockp2.frames = Player2_source[this.player].values.b.f;
    this.imgBlockp2.frameIndex =
      Player2_source[this.player].values.b.frameIndex;

    // Hadouken Image
    this.imgHadoup2 = new Image();
    this.imgHadoup2.src = Player2_source[this.player].haduoken;
    this.chunHadouX = Player2_source[this.player].values.h.x;
    this.chunHadouY = Player2_source[this.player].values.h.y;
    this.imgHadoup2.frames = Player2_source[this.player].values.h.f;
    this.imgHadoup2.frameIndex =
      Player2_source[this.player].values.h.frameIndex;

    //Hit Image
    this.imgHitp2 = new Image();
    this.imgHitp2.src = Player2_source[this.player].hit;
    this.imgHitX = Player2_source[this.player].values.hit.x;
    this.imgHitY = Player2_source[this.player].values.hit.y;
    this.imgHitp2.frames = Player2_source[this.player].values.hit.f;
    this.imgHitp2.frameIndex = 0;

    //Kick Image
    this.imgKickp2 = new Image();
    this.imgKickp2.src = Player2_source[this.player].kick;
    this.imgKickX = Player2_source[this.player].values.k.x;
    this.imgKickY = Player2_source[this.player].values.k.y;
    this.imgKickp2.frames = Player2_source[this.player].values.k.f;
    this.imgKickp2.frameIndex = 0;

    //Crouch Image
    this.imgCrouchp2 = new Image();
    this.imgCrouchp2.src = Player2_source[this.player].crouch;
    this.imgCrouchX = Player2_source[this.player].values.c.x;
    this.imgCrouchY = Player2_source[this.player].values.c.y;
    this.imgCrouchp2.frames = Player2_source[this.player].values.c.f;
    this.imgCrouchp2.frameIndex = 0;
  }

  draw(framesCounter) {
    if (this.startPointY < 150) {
      this.states.jump = true;
    }
    if (this.states.hit) {
      this.states.idle = false;
      this.drawHit(framesCounter);
      setTimeout(() => {
        this.states.idle = true;
        this.states.hit = false;
      }, 200);
    }
    if (this.states.left || this.states.right) {
      this.drawWalk(framesCounter);
    } else if (this.states.crouch) {
      this.drawCrouch(framesCounter);
    } else if (this.states.hadouken) {
      // if (this.player !== 'ryu' && this.player !== 'blanka')
      this.drawHadouken(framesCounter);
      setTimeout(() => {
        this.states.hadouken = false;
        this.imgHadoup2.frameIndex = 3;
      }, 630);
    } else if (this.states.kick) {
      this.drawKick(framesCounter);
    } else if (this.states.punch) {
      sound[1].play();
      this.drawPunch(framesCounter);
    } else if (this.states.jump) {
      console.log('jump2');
      this.drawJump(framesCounter);
    } else if (this.states.block) {
      this.drawBlock(framesCounter);
    } else if (this.states.idle) {
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

  detectKick(player1, player2) {
    if (
      player2.startPointX - player1.startPointX < 120 &&
      this.states.kick == true
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
      this.startPointY + Player2_source[this.player].values.w.offsetStartY,
      this.imgWalkX / Player2_source[this.player].values.w.offsetX,
      this.imgWalkY * 2.5
    );

    this.animateImgWalk(framesCounter);
  }
  animateImgWalk(framesCounter) {
    if (framesCounter % 10 === 0) {
      this.imgWalkp2.frameIndex += 1;

      if (
        this.imgWalkp2.frameIndex >
        Player2_source[this.player].values.w.offsetFrameIndex
      )
        this.imgWalkp2.frameIndex = 0;
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
      this.imgPunchX / Player2_source[this.player].values.p.offsetX,
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
      this.imgBlockX / Player2_source[this.player].values.b.offsetX,
      this.imgBlockY * this.yFrameAdjuster
    );
    this.animateImgBlock(framesCounter);
  }

  animateImgBlock(framesCounter) {
    if (framesCounter % 30 === 0) {
      if (this.imgBlockp2.frameIndex > 1) this.imgBlockp2.frameIndex = 0;
    }
  }

  drawHit(framesCounter) {
    this.ctx.drawImage(
      this.imgHitp2,
      this.imgHitp2.frameIndex *
        Math.floor(this.imgHitX / this.imgHitp2.frames),
      0,
      Math.floor(this.imgHitX / this.imgHitp2.frames),
      this.imgHitY,
      this.startPointX,
      this.startPointY - Player2_source[this.player].values.hit.offsetStartY,
      this.imgHitX / Player2_source[this.player].values.hit.offsetX,
      this.imgHitY * this.yFrameAdjuster
    );
    this.animateHit(framesCounter);
  }

  animateHit(framesCounter) {
    if (framesCounter % 20 === 0) {
      this.imgHitp2.frameIndex = 0;
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
      this.imgJumpX / Player2_source[this.player].values.j.offsetX,
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

  drawKick(framesCounter) {
    this.ctx.drawImage(
      this.imgKickp2,
      this.imgKickp2.frameIndex *
        Math.floor(this.imgKickX / this.imgKickp2.frames),
      0,
      Math.floor(this.imgKickX / this.imgKickp2.frames),
      this.imgKickY,
      this.startPointX,
      this.startPointY - Player2_source[this.player].values.k.offsetStartY,
      this.imgKickX / Player2_source[this.player].values.k.offsetX,
      this.imgKickY * this.yFrameAdjuster
    );
    this.animateImgKick(framesCounter);
  }

  animateImgKick(framesCounter) {
    if (framesCounter % 20 === 0) {
      this.imgKickp2.frameIndex += 1;

      if (this.imgKickp2.frameIndex > 0) this.imgKickp2.frameIndex = 0;
    }
  }

  drawCrouch(framesCounter) {
    this.ctx.drawImage(
      this.imgCrouchp2,
      this.imgCrouchp2.frameIndex *
        Math.floor(this.imgCrouchX / this.imgCrouchp2.frames),
      0,
      Math.floor(this.imgCrouchX / this.imgCrouchp2.frames),
      this.imgKickY,
      this.startPointX,
      this.startPointY + Player2_source[this.player].values.c.offsetStartY,
      this.imgCrouchX / Player2_source[this.player].values.c.offsetX,
      this.imgCrouchY * 3.1
    );
    this.animateImgCrouch(framesCounter);
  }

  animateImgCrouch(framesCounter) {
    if (framesCounter % 20 === 0) {
      this.imgCrouchp2.frameIndex += 1;

      if (this.imgCrouchp2.frameIndex > 0) this.imgCrouchp2.frameIndex = 0;
    }
  }

  drawHadouken(framesCounter) {
    this.ctx.drawImage(
      this.imgHadoup2,
      this.imgHadoup2.frameIndex *
        Math.floor(this.chunHadouX / this.imgHadoup2.frames),
      0,
      Math.floor(this.chunHadouX / this.imgHadoup2.frames),
      this.chunHadouY,
      this.startPointX,
      this.startPointY - Player2_source[this.player].values.h.offsetStartY,
      this.chunHadouX / 1.5,
      this.chunHadouY * this.yFrameAdjuster
    );

    this.animateImgHadou(framesCounter);
  }

  animateImgHadou(framesCounter) {
    if (framesCounter % 12 === 0) {
      this.imgHadoup2.frameIndex -= 1;

      if (this.imgHadoup2.frameIndex < 0) this.imgHadoup2.frameIndex = 3;
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

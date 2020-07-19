var Game = {
  fps: 60,
  keys: {
    player1left: 65,
    player1right: 68,
    player1block: 69,
    player1punch: 88,
    player1jump: 87,
    player1crouch: 83,
    player1kick: 67,
    player1hadouken: 81,

    player2left: 74,
    player2right: 76,
    player2block: 80,
    player2punch: 79,
    player2jump: 73,
    player2crouch: 75,
    player2kick: 85,
    player2hadouken: 77,
  },
  fullLifeBar: 'blue',
  emptyLifeBar: 'red',
  showHadouken: false,
  showKikouken: false,

  init: function (player1Select, player2Select) {
    this.player1Select = player1Select;
    this.player2Select = player2Select;
    this.canvas = document.createElement('canvas');
    this.canvas.setAttribute('id', 'mycanvas');
    this.canvas.setAttribute('height', 400);
    this.canvas.setAttribute('width', 1000);
    var holder = document.getElementsByClassName('game');
    holder[0].appendChild(this.canvas);
    this.ctx = this.canvas.getContext(`2d`);
    this.start(this.player1Select, this.player2Select);
  },

  start: function (player1Select, player2Select) {
    this.fps = 60;

    this.reset(player1Select, player2Select);

    document.addEventListener('keydown', (e) => {
      if (e.keyCode === this.keys.player1hadouken) {
        if (
          this.player1Select !== 'blanka' &&
          this.player1Select !== 'ryu' &&
          this.player1Select !== 'chun'
        ) {
          playHadouken();
        }
      }
      if (e.keyCode === this.keys.player2hadouken) {
        if (
          this.player2Select !== 'blanka' &&
          this.player2Select !== 'ryu' &&
          this.player2Select !== 'ken'
        ) {
          playKikouken();
        }
      }
    });

    this.interval = setInterval(() => {
      if (
        this.player1Select === 'blanka' ||
        this.player1Select === 'ryu' ||
        this.player1Select == 'chun'
      ) {
        this.player1.states.hadouken = false;
      }

      if (
        this.player2Select === 'blanka' ||
        this.player2Select === 'ryu' ||
        this.player2Select === 'ken'
      ) {
        this.player2.states.hadouken = false;
      }
      this.clear();
      this.framesCounter++;

      if (this.framesCounter > 1000) {
        this.framesCounter = 0;
      }

      this.buttonslistener();
      this.drawAll();
      this.moveAll();

      if (this.player2.life <= 0) {
        this.drawPlayer1Win();
      }
      if (this.player1.life <= 0) {
        this.drawPlayer2Win();
        setTimeout(() => {}, 1000);
      }
    }, 1000 / this.fps);
  },

  reset: function (player1Select, player2Select) {
    this.background = new Background(this.ctx, player1Select);
    this.player1 = new Player1(this.ctx, this.keys, player1Select);
    this.player2 = new Player2(this.ctx, this.keys, player2Select);
    this.hadouken = new Hadouken(this.ctx, this.player1.startPointX + 90);
    this.kikouken = new Kikouken(this.ctx, this.player2.startPointX);
    this.healthBar1r = new HealthBarRed(
      this.ctx,
      80,
      15,
      this.emptyLifeBar,
      100
    );
    this.healthBar1b = new HealthBar(this.ctx, 80, 15, this.fullLifeBar, 100);
    this.healthBar2r = new HealthBarRed(
      this.ctx,
      600,
      15,
      this.emptyLifeBar,
      100
    );
    this.healthBar2b = new HealthBar(this.ctx, 600, 15, this.fullLifeBar, 100);
    this.portrait1 = new Portrait1(this.ctx, 600, 15, player1Select);
    this.portrait2 = new Portrait2(this.ctx, 600, 15, player2Select);
    this.vsImg = new VsLogo(this.ctx);
    this.OneWinImg = new Player1Wins(this.ctx, player1Select);
    this.TwoWinImg = new Player2Wins(this.ctx, player2Select);

    this.framesCounter = 0;
  },

  clear: function () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },

  drawAll: function () {
    this.background.draw(this.framesCounter);
    this.player2.draw(this.framesCounter);
    this.player1.draw(this.framesCounter);
    this.healthBar1r.draw();
    this.healthBar1b.draw();

    this.healthBar2r.draw();
    this.healthBar2b.draw();
    this.portrait1.draw();
    this.portrait2.draw();
    this.vsImg.draw();

    if (this.showHadouken) {
      if (
        this.player1Select !== 'blanka' &&
        this.player1Select !== 'ryu' &&
        this.player1Select !== 'chun'
      )
        this.hadouken.drawMoving(this.framesCounter);
    }

    if (this.showKikouken) {
      if (
        this.player2Select !== 'blanka' &&
        this.player2Select !== 'ryu' &&
        this.player2Select !== 'ken'
      )
        this.kikouken.drawMoving(this.framesCounter);
    }

    //Punch Impact Conditions
    if (this.player1.detectPunch(this.player1, this.player2)) {
      if (this.player2.states.block) {
        this.player1.states.punch = false;
      } else {
        console.log('p1 hit');
        this.player2.states.hit = true;
        this.player1.states.punch = false;
        this.player2.life -= 5;
        this.healthBar2b.reduceLife(5);
        playHit();
      }
    }

    if (this.player2.detectPunch(this.player1, this.player2)) {
      if (this.player1.states.block) {
        this.player2.states.punch = false;
      } else {
        console.log(true);
        this.player1.states.hit = true;
        this.player2.states.punch = false;
        this.player1.life -= 5;
        this.healthBar1b.reduceLife(5);
        playHit();
      }
    }

    //Kick Impact Detection

    if (this.player1.detectKick(this.player1, this.player2)) {
      if (this.player2.states.block) {
        this.player1.states.kick = false;
      } else {
        console.log('p1 hit');
        this.player2.states.hit = true;
        this.player1.states.kick = false;
        this.player2.life -= 10;
        this.healthBar2b.reduceLife(10);
        playHit();
      }
    }

    if (this.player2.detectKick(this.player1, this.player2)) {
      if (this.player1.states.block) {
        this.player2.states.kick = false;
      } else {
        console.log('p1 hit');
        this.player1.states.hit = true;
        this.player2.states.kick = false;
        this.player2.life -= 10;
        this.healthBar1b.reduceLife(10);
        playHit();
      }
    }

    //Haduoken Impact Collision

    if (!this.player1.states.block) {
      if (this.kikouken.startPointX <= this.player1.startPointX) {
        if (this.player1.states.jump) {
          this.player1.states.hit = false;
          this.showKikouken = false;
        } else {
          this.player1.states.hit = true;
          this.showKikouken = false;
          this.player1.life -= 20;
          this.healthBar1b.reduceLife(20);
          playHit();
        }
      }
    } else {
      if (this.kikouken.startPointX <= this.player1.startPointX) {
        this.player1.states.hit = false;
        this.showKikouken = false;
      }
    }

    if (!this.player2.states.block) {
      if (this.hadouken.startPointX >= this.player2.startPointX) {
        if (this.player2.states.jump) {
          this.player2.states.hit = false;
          this.showHadouken = false;
        } else {
          this.player2.states.hit = true;
          this.showHadouken = false;
          this.player2.life -= 20;
          this.healthBar2b.reduceLife(20);
          playHit();
        }
      }
    } else {
      if (this.hadouken.startPointX >= this.player2.startPointX) {
        this.player2.states.hit = false;
        this.showHadouken = false;
      }
    }

    if (this.kikouken.startPointX === this.hadouken.startPointX) {
      console.log('true');
      this.showKikouken = false;
      this.showHadouken = false;
    }

    if (this.kikouken.startPointX <= 0) {
      this.showKikouken = false;
    }

    if (this.hadouken.startPointX >= 1000) {
      this.showHadouken = false;
    }

    if (!this.showHadouken) {
      this.hadouken.reset(this.player1.startPointX);
    }
    if (!this.showKikouken) {
      this.kikouken.reset(this.player2.startPointX);
    }
  },

  moveAll: function () {
    this.player2.move();
    this.player1.move();
  },

  drawPlayer1Win: function () {
    this.OneWinImg.draw();
  },
  drawPlayer2Win: function () {
    this.TwoWinImg.draw();
  },

  buttonslistener: function () {
    document.addEventListener('keydown', (e) => {
      if (e.keyCode === this.keys.player2jump) {
        this.player2.states.jump = true;
      }
      if (e.keyCode === this.keys.player1jump) {
        this.player1.states.jump = true;
      }
      if (e.keyCode === this.keys.player1kick) {
        this.player1.states.kick = true;
      }
      if (e.keyCode === this.keys.player1crouch) {
        this.player1.states.crouch = true;
      }
      if (e.keyCode === this.keys.player2kick) {
        this.player2.states.kick = true;
      }
      if (e.keyCode === this.keys.player2crouch) {
        this.player2.states.crouch = true;
      }

      if (e.keyCode === this.keys.player2left) {
        this.player2.states.left = true;
      }
      if (e.keyCode === this.keys.player2right) {
        this.player2.states.right = true;
      }
      if (e.keyCode === this.keys.player1punch) {
        this.player1.states.punch = true;
      }
      if (e.keyCode === this.keys.player1block) {
        this.player1.states.block = true;
      }
      if (e.keyCode === this.keys.player2punch) {
        this.player2.states.punch = true;
      }
      if (e.keyCode === this.keys.player2block) {
        this.player2.states.block = true;
      }
      if (e.keyCode === this.keys.player1hadouken) {
        this.player1.states.hadouken = true;
      }
      if (e.keyCode === this.keys.player2hadouken) {
        this.player2.states.hadouken = true;
      }

      if (e.keyCode === this.keys.player1left) {
        this.player1.states.left = true;
        if (this.player1.startPointX < 0) {
          this.player1.startPointX = 1;
        }
      }
      if (
        e.keyCode === this.keys.player1right &&
        this.player1.startPointX + this.player1.separator <
          this.player2.startPointX
      ) {
        this.player1.states.right = true;
      }
    });
    document.addEventListener('keyup', (e) => {
      if (e.keyCode === this.keys.player1jump) {
        this.player1.states.jump = false;
      }
      if (e.keyCode === this.keys.player1kick) {
        this.player1.states.kick = false;
      }
      if (e.keyCode === this.keys.player1crouch) {
        this.player1.states.crouch = false;
      }
      if (e.keyCode === this.keys.player2kick) {
        this.player2.states.kick = false;
      }
      if (e.keyCode === this.keys.player2crouch) {
        this.player2.states.crouch = false;
      }

      if (e.keyCode === this.keys.player2jump) {
        this.player2.states.jump = false;
      }
      if (e.keyCode === this.keys.player2left) {
        this.player2.states.left = false;
      }
      if (e.keyCode === this.keys.player1punch) {
        this.player1.states.punch = false;
      }
      if (e.keyCode === this.keys.player2punch) {
        this.player2.states.punch = false;
      }
      if (e.keyCode === this.keys.player2block) {
        this.player2.states.block = false;
      }

      if (e.keyCode === this.keys.player2right) {
        this.player2.states.right = false;
      }
      if (e.keyCode === this.keys.player1block) {
        this.player1.states.block = false;
      }
      if (e.keyCode === this.keys.player1left) {
        this.player1.states.left = false;
      }

      if (e.keyCode === this.keys.player1right) {
        this.player1.states.right = false;
      }
      if (e.keyCode === this.keys.player1hadouken) {
        this.player1.states.hadouken = true;
        this.showHadouken = true;
      }
      if (e.keyCode === this.keys.player2hadouken) {
        this.player2.states.hadouken = true;
        this.showKikouken = true;
      }
    });
    if (this.player1.startPointX < 0) {
      this.player1.startPointX = 1;
    }

    if (
      this.player1.startPointX + this.player1.separator >
      this.player2.startPointX
    ) {
      this.player2.states.left = false;
      this.player1.states.right = false;
    }
    if (this.player2.startPointX > 840) {
      this.player2.startPointX = 840;
    }

    if (this.player1.states.jump) {
      this.player1.left = false;
      this.player1.right = false;
      this.player1.hadouken = false;
    }

    setTimeout(() => {
      surePlay();
      stopMusic();
      setTimeout(() => {
        document.querySelector('.end-screen').style.display = 'block';
      }, 5000);
      if (this.player1.life >= this.player2.life) {
        console.log('true');
        this.drawPlayer1Win();
        this.player1.win = true;
        this.player2.lose = true;
      } else {
        console.log('false');
        this.drawPlayer2Win();
        this.player2.win = true;
        this.player1.lose = true;
      }
      this.player1.states.left = false;
      this.player1.states.right = false;
      this.player1.states.punch = false;
      this.player2.states.punch = false;
      this.player1.states.hadouken = false;
      this.player2.states.left = false;
      this.player2.states.right = false;
    }, 62000);

    if (this.player2.life <= 0) {
      stopMusic();
      surePlay();
      document.getElementById('countdown').style.display = 'none';
      this.player1.win = true;
      this.player1.states.left = false;
      this.player1.states.right = false;
      this.player1.states.punch = false;
      this.player2.states.punch = false;
      this.player1.states.hadouken = false;
      setTimeout(() => {
        document.querySelector('.end-screen').style.display = 'block';
      }, 5000);
    }
    if (this.player1.life <= 0) {
      stopMusic();
      surePlay();
      document.getElementById('countdown').style.display = 'none';
      this.player2.win = true;
      this.player2.states.left = false;
      this.player2.states.punch = false;
      this.player2.states.right = false;
      this.player2.states.hadouken = false;
    }
  },
  stop: function () {
    clearInterval(this.interval);
  },
};

function playHadouken() {
  let hadouSound = new Audio('./audio/hadouken.wav');
  hadouSound.volume = 0.4;
  hadouSound.play();
}

function playKikouken() {
  let kikouSound = new Audio('./audio/kikuoken.wav');
  kikouSound.volume = 0.4;
  kikouSound.play();
}

function playHit() {
  let hitSound = new Audio('./audio/hit.mp3');
  hitSound.volume = 0.4;
  hitSound.play();
}

function playSound() {
  setInterval(() => {
    chunLetsGo();
  }, 15000);
  setInterval(() => {
    ok();
  }, 20000);
}

function chunLetsGo() {
  let goChun = new Audio('./audio/chun_go.wav');
  goChun.volume = 0.4;
  goChun.play();
}

function ok() {
  let ok = new Audio('./audio/ok.wav');
  ok.volume = 0.4;
  ok.play();
}

var Game = {
  fps: 60,
  keys: {
    player1left: 65,
    player1right: 68,
    player1block: 69,
    player1punch: 88,

    player2left: 37,
    player2right: 39,
  },

  init: function (player1Select, player2Select) {
    this.player1Select = player1Select;
    this.player2Select = player2Select;
    this.canvas = document.createElement('canvas');
    this.canvas.setAttribute('id', 'mycanvas');
    this.canvas.setAttribute('height', 400);
    this.canvas.setAttribute('width', 1000);
    var holder = document.getElementsByClassName('container');
    holder[0].appendChild(this.canvas);
    this.ctx = this.canvas.getContext(`2d`);
    this.start(this.player1Select, this.player2Select);
  },

  start: function (player1Select, player2Select) {
    this.fps = 60;

    this.reset(player1Select, player2Select);

    if (this.showHadouken || this.showKikouken) {
    }
    this.interval = setInterval(() => {
      // let intervalID = setInterval(() => {
      this.clear();
      this.framesCounter++;

      if (this.framesCounter > 1000) {
        this.framesCounter = 0;
      }

      this.buttonslistener();
      this.drawAll();
      this.moveAll();
    }, 1000 / this.fps);
  },

  reset: function (player1Select, player2Select) {
    this.background = new Background(this.ctx);
    this.player1 = new Player1(this.ctx, this.keys, player1Select);
    this.player2 = new Player2(this.ctx, this.keys, player2Select);

    this.framesCounter = 0;
  },

  clear: function () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },

  drawAll: function () {
    this.background.draw(this.framesCounter);
    this.player2.draw(this.framesCounter);
    this.player1.draw(this.framesCounter);
  },

  moveAll: function () {
    this.player2.move();
    this.player1.move();
  },

  buttonslistener: function () {
    document.addEventListener('keydown', (e) => {
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
      if (e.keyCode === this.keys.player2left) {
        this.player2.states.left = false;
      }
      if (e.keyCode === this.keys.player1punch) {
        this.player1.states.punch = false;
      }
      if (e.keyCode === this.keys.player2punch) {
        this.player2.states.punch = false;
      }
      if (e.keyCode === this.keys.player2right) {
        this.player2.states.right = false;
      }
      if (e.keyCode === this.keys.player1left) {
        this.player1.states.left = false;
      }

      if (e.keyCode === this.keys.player1right) {
        this.player1.states.right = false;
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
    if (this.player2.life <= 0) {
      this.player1.states.left = false;
      this.player1.states.right = false;
      this.player1.states.hadouken = false;
    }
    if (this.player1.life <= 0) {
      this.player2.states.left = false;
      this.player2.states.right = false;
      this.player2.states.hadouken = false;
    }
    // if (this.player2.lose) {
    //   clearInterval(intervalID);
    // }
  },
  stop: function () {
    clearInterval(this.interval);
  },
};

// setTimeout(function () {
//   Game.init('ken', 'mike');
// }, 1000);

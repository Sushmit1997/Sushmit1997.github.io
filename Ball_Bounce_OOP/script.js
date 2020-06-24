function mainFunction(h, w, containerColor, top, left, speed, ballColour) {
  this.h = h;
  this.w = w;
  this.top = top;
  this.left = left;
  this.speed = speed;
  this.maxPos = this.h - this.top;
  this.ballColour = ballColour;
  this.containerColor = containerColor;

  this.container = document.createElement("div");
  this.ball = document.createElement("div");

  this.createContainer = function () {
    this.container.style.border = "2px solid black";
    this.container.style.height = this.h + "px";
    this.container.style.width = this.w + "px";
    this.container.style.position = "relative";
    this.container.style.display = "inline-block";
    this.container.style.margin = "10px";
    this.container.style.backgroundColor = this.containerColor;
    document.body.appendChild(this.container);
  };

  this.createBall = function () {
    this.ball.style.width = "100px";
    this.ball.style.height = "100px";
    this.ball.style.borderRadius = "50%";
    this.ball.style.backgroundColor = this.ballColour;
    this.ball.style.position = "absolute";
    this.ball.style.top = this.top + "px";
    this.ball.style.left = this.left + "px";
    this.container.appendChild(this.ball);
    this.animateUpDown();
  };

  this.animateUpDown = function () {
    let ballPos = parseInt(this.ball.style.top);
    ballPos += this.speed;
    this.ball.style.top = ballPos + "px";
    if (ballPos <= 0 || ballPos >= this.maxPos) {
      this.speed = -this.speed;
    }
    requestAnimationFrame(this.animateUpDown);
  }.bind(this);
}

var drawAnimation = function () {
  var data = new mainFunction(400, 400, "#192a56", 150, 200, 10, "red");
  data.createContainer();
  data.createBall();

  var data2 = new mainFunction(300, 400, "#c23616", 100, 150, 5, "yellow");
  data2.createContainer();
  data2.createBall();

  var data3 = new mainFunction(350, 300, "grey", 150, 50, 15, "green");
  data3.createContainer();
  data3.createBall();
};

drawAnimation();

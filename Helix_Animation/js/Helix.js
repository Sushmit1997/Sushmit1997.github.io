function Helix(canvasId, width, height, rows, columns, color1 ,color2){
  this.body = document.getElementById('main-container');

  this.initialize = function(){
    this.width = width;
    this.height = height;
    this.rows = rows;
    this.columns = columns;
    this.color1 = color1;
    this.color2 = color2;

    this.canvas = document.createElement('canvas');
    this.canvas.setAttribute('id', canvasId);
    this.canvas.width = this.width;
    this.canvas.height = this.height;

    document.body.appendChild(this.canvas);
    this.context = this.canvas.getContext('2d');

    this.circleController = new CircleController(this.context, this.rows, this.columns, this.color1, this.color2 )

  }

  this.clearHelix = function(){
    this.context.clearRect(this.originX, this.originY, this.canvas.width, this.canvas.height);
    this.context.fillStyle = 'black';
    this.context.fillRect(this.originX, this.originY, this.canvas.width, this.canvas.height);
    this.circleController.draw();
  }

  this.runHelix = function(){
    this.clearHelix();
    requestAnimationFrame(this.runHelix.bind(this));
  }

  this.initialize();
}

var helix = new Helix('canvas1', 800, 400, 10, 30, 'white', 'blue');
helix.runHelix();

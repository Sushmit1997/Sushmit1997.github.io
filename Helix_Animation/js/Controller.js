function CircleController( context, numRows, numColumns, color1, color2){

  this.initialize = function(){
    this.context = context;
    this.numRows = numRows;
    this.numColumns = numColumns;
    this.color1 = color1;
    this.color2 = color2;

    this.initialCenter = {
      x: 100,
      y: 60
    };

    this.gap = 20;
    this.circles = [];

    this.update();

  }

  this.draw = function(){
    for ( var i = 0; i < this.circles.length; i++){
      this.circles[i].updateCirclePosition();
      this.circles[i].drawCircle();
    }
  }

  this.createWave = function(isOutOfPhase){
    var color = this.color1;

    if (!isOutOfPhase == true){
      color = this.color2;
    }

    var currentYpos = this.initialCenter.y;

    for(var i = 0; i < this.numRows ; i++){
      currentYpos += this.gap;

      var currentXpos = 0;
      var increasePhase = 6;
      var currentPhase = 0;

      for ( var j = 0; j < this.numColumns; j ++){
        var circle = new Circle(this.context, color, isOutOfPhase);

        

        circle.center.x = currentXpos += this.gap;
        circle.center.y = currentYpos;

        circle.currentX = currentPhase += increasePhase;
        circle.currentY = currentYpos;

        this.circles.push(circle);
      }
    }
  }

  this.update = function(){
    this.createWave(true);
    this.createWave(false);
  }

  this.initialize();
}


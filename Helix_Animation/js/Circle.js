function Circle(context, color, isPhaseOut){
  
  this.initialize = function(){
    this.context = context;
    this.color = color;
    this.isPhaseOut = isPhaseOut;

    this.radius = 10;
    this.radiusAmp = 10;

    this.center = {
      x:100,
      y:100
    };

    this.currentX = 0;
    this.currentY = 100;
    this.degree = 180;
    this.amplitude = 50;
    this.omega = 2;
  }

  this.drawCircle = function(){
    this.context.beginPath();
    this.context.fillStyle = this.color;
    this.context.arc(this.center.x , this.center.y, this.radius, 0, 2 * Math.PI);
    this.context.closePath();
    this.context.fill();

  }

  this.updateCirclePosition = function () {
    var tempX;

    if (this.currentX <= this.degree) {
      this.currentX++;
      tempX = (this.omega * this.currentX * Math.PI) / this.degree;

      if (this.isPhaseOut == false) {
        this.center.y = this.amplitude * Math.sin(tempX) + this.currentY;
        this.radius = (this.radiusAmp / 2) * Math.cos(tempX) + (this.radiusAmp / 2);

      } else {
        this.center.y = this.amplitude * Math.sin(tempX + Math.PI) + this.currentY;
        this.radius = (this.radiusAmp / 2) * Math.cos(tempX + Math.PI) + (this.radiusAmp / 2);

      }

    } else {
      this.currentX = 0;

    }

  }

  this.initialize();


}
var GAME_VIEW_SIZE = 1/1.5;
var GAME_WIDTH = 350;

var CAR_SIZE = 50;

var carLocations = [12.5, 12.5 + 25, 12.5 + 25*2, 12.5 + 25*3] // Centering position of cars in lanes

function generateRandomNumbers(lowerLimit, upperLimit){
  return Math.floor( Math.random() * (upperLimit-lowerLimit) + lowerLimit);
}

class Car{
  constructor(mainElement){
    this.mainElement = mainElement;
    this.element = document.createElement('div');

    this.height = CAR_SIZE;
    this.width = 50;
    this.xPos = carLocations[generateRandomNumbers(0,4)];
    this.yPos = 5;

    this.heightPercent = (100 * this.height)/(GAME_WIDTH /GAME_VIEW_SIZE);

    this.setStyles();

    
  }

  setStyles(){
    this.element.style.width = this.width + 'px';
    this.element.style.height = this.height + 'px';
    this.element.style.position = 'absolute';
    this.element.style.transform = 'translate(-50%,0)';
    this.element.style.display = this.carImage = document.createElement('img');

    this.carImage.setAttribute('src','./images/GreenCar.png');
    this.carImage.style.width = '100%';
    this.carImage.style.height = 'auto';

    this.element.appendChild(this.carImage);
    this.mainElement.appendChild(this.element);
  }

  render(){
    this.element.style.left = this.xPos + '%';
    this.element.style.bottom = this.yPos + '%';
  }

  switchLeft(){
    if(this.xPos > 15){
      this.xPos -= 25;
    }
  }

  switchRight(){
    if(this.xPos < 85){
      this.xPos += 25;
    }
  }

  checkCollision(cars){
    for (var i = 0; i < cars.length; i++){
      const c = cars[i];
    }
  }

}

class RivalCar extends Car{
  constructor(mainElement){
    super(mainElement);
    this.speed = generateRandomNumbers(5,10) * 0.1;
    this.yPos = 100;
    this.carImage.setAttribute('src','./images/RedCar.png');

    this.render();
  }

  setLanes(){
    if (this.xPos < 50){
      this.carImage.style.transform = 'scaleY(-1)';
    }
  }

  moveCarDown(){
    this.yPos -= this.speed;
  }

  checkIfOutSideGame(){
    if(this.yPos <= -1 * this.heightPercent){
      return true;
    } else return false;
  }

  checkObstacle(cars){
    var detectionPos = 5;
    var lowestSpeed = 0.5;

    for( var i = 0; i <cars.length; i++){
      const c = cars[i];

      if(c.xPos == this.xPos && c.yPos < this.yPos){
        if(c.yPos + c.heightPercent >= this.yPos - detectionPos){
          this.speed = lowestSpeed;
          break;
        }
      }  
    }
  }

  detectCollision(cars){
    for ( let i = 0; i < cars.length; i++){
      const c = cars[i];
  
      if (c.element != this.element){
        if(
          this.xPos == c.xPos && this.yPos + this.height >= c.yPos &&
          this.yPos <= c.yPos + c.height
        ){console.log('Collision');
        break;
        }
      }
    }
  }

}


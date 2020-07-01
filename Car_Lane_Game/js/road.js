var ROAD_SPEED = 2;
var FPS = 60;


class Road{
  constructor(mainElement){
    this.mainElement = mainElement;
    this.element = document.createElement('div');

    this.scoreBox = document.createElement('span');

    this.overScreen = document.createElement('span');

    this.currentScore = 0;
    this.currentRoadPosition = 0;

    this.setStyles();
    this.change();

    this.addScore(0);


  }

setStyles(){
  this.element.style.width = '100%';
  this.element.style.background = 'url("./images/asphalt.png")';
  
  this.element.style.backgroundSize = '50%';
  this.element.style.height = '100%';

  this.scoreBox.style.position = 'absolute';
  this.scoreBox.style.color = 'red';
  this.scoreBox.style.fontSize = '30px';
  this.scoreBox.style.right = '10%';
  this.scoreBox.style.fontWeight = 'bold';
  this.scoreBox.style.zIndex = '10';

  this.overScreen.style.position = 'absolute';
  this.overScreen.style.color = 'white';
  this.overScreen.style.fontSize = '40px';
  this.overScreen.style.right = '5%';
  this.overScreen.style.top = '40%';
  this.overScreen.style.zIndex = '10';



  this.mainElement.appendChild(this.scoreBox);
  this.mainElement.appendChild(this.element);

 
  
}

change(){
  this.element.style.backgroundPositionY = 
  (this.currentRoadPosition += ROAD_SPEED) + '%';
;}

addScore(score){
  this.currentScore += score;
  this.scoreBox.innerHTML = Math.floor(this.currentScore);

}

gameOverScreen(){
this.overScreen.innerText = (`Game Over! Your score is: ${this.currentScore}`);
  this.mainElement.appendChild(this.overScreen);
}


}
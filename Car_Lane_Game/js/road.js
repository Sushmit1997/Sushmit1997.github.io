var ROAD_SPEED = 2;
var FPS = 60;


class Road{
  constructor(mainElement){
    this.mainElement = mainElement;
    this.element = document.createElement('div');

    this.scoreBox = document.createElement('span');
    this.currentScore = 0;
    this.currentRoadPosition = 0;

    this.setStyles();


  }

setStyles(){
  this.element.style.width = '100%';
  this.element.style.background = 'url("./images/asphalt.png")';
  this.element.style.backgroundAttachment = 'fixed';
  this.element.style.backgroundSize = '50%';
  this.element.style.height = '100%';

  this.scoreBox.style.position = 'absolute';
  this.scoreBox.style.color = '#FFD700';
  this.scoreBox.style.fontSize = '28px';
  this.scoreBox.style.left = '5%';
  this.scoreBox.style.zIndex = '10';


  this.mainElement.appendChild(this.scoreBox);
  this.mainElement.appendChild(this.element);

 
  
}

change(){
  this.element.style.backgroundPositionY = 
  //(this.currentRoadPosition += (ROAD_SPEED * FPS) /30) + 'PX'
  (this.currentRoadPosition += ROAD_SPEED) + '%';
;}

addScore(score){
  this.currentScore += score;
  this.scoreBox.innerHTML = this.currentScore;

}


}
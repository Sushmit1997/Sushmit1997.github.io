
const MIN_RADIUS = 10;
const MAX_RADIUS = 15;
const CONTAINER_WIDTH = 600;
const CONTAINER_HEIGHT = 400;
const TOTAL_BALLS = 20;
const COLORS = ['red','green','yellow','pink'];
const VELOCITY = 1;




function generateRandomNumbers(lowerLimit, higherLimit ){
  var lowerLimit = Math.ceil(lowerLimit);
  return Math.floor(Math.random() * (higherLimit - lowerLimit)) + lowerLimit;

}


var Ball = function(wrapper,isAntSmash){
  this.wrapper = wrapper;
  this.element = document.createElement('div');
  this.radius = Math.floor(Math.random()* (MAX_RADIUS - MIN_RADIUS)) + MIN_RADIUS;
  this.x = Math.floor(Math.random() * (CONTAINER_WIDTH - 2 * this.radius ));
  this.y = Math.floor(Math.random() * (CONTAINER_HEIGHT - 2 * this.radius));
 

  if(isAntSmash){
    this.ant = document.createElement('img');
  }

  this.velocity = generateRandomNumbers(1,4) * VELOCITY;
  
  // console.log(this.radius, this.velocity);



  this.direction = {
    x: generateRandomNumbers(-2,2),
    y: generateRandomNumbers(-2,2)
  }

  this.draw = function(){
    this.element.style.left = this.x + 'px';
    this.element.style.top = this.y + 'px';
    // console.log(this.element.style.left)
    //  console.log(this.style.top)

    if (isAntSmash){
      if(this.direction.x === 1){
        this.ant.setAttribute('src', './images/ant-right.gif');
      }else {
        this.ant.setAttribute('src','./images/ant-left.gif')
      }
    }
  }

  this.create = function(){
    var color = COLORS[generateRandomNumbers(0, COLORS.length)];
    if (!isAntSmash){
      this.element.style.backgroundColor = color;
    }
    
    this.element.style.position = 'absolute';
    this.element.style.borderRadius = '50%';
    this.element.style.height = (this.radius * 2) + 'px';
    this.element.style.width = (this.radius * 2) + 'px';

    if (isAntSmash){
      this.ant.style.width = '100%';
      this.ant.style.height = 'auto';
      this.element.appendChild(this.ant);
    }
    this.wrapper.appendChild(this.element);

    this.draw();

  } 

    if(isAntSmash){
      this.smashAnt = function(ants) {
        var self = this;
        self.element.onclick = function() {
            self.wrapper.removeChild(this.element);

            for (var i = 0; i < ants.length; i++) {
                var ant = ants[i];
                if (ant.element === self.element) {
                    ants.splice(i, 1);
                }
            }
        };
    }

    }
  


  

  this.animateAndCheckCollision = function(balls){

    // Update x and y
    this.x += this.velocity * this.direction.x;
    this.y += this.velocity * this.direction.y;
    


    // Check collision with boundary
    this.checkCollisionWithBoundary();

    //Check collision with other balls
    this.checkCollision(balls);

    //draw / render
    this.draw();
  }

  this.checkCollisionWithBoundary = function(){
    if(this.x <= 0){
      this.direction.x = 1;
    }
    if(this.x + 2 * this.radius >= CONTAINER_WIDTH){
      this.direction.x = -1;
    }

    if(this.y <= 0){
      this.direction.y = 1;
    }

    if(this.y + 2 * this.radius >= CONTAINER_HEIGHT){
      this.direction.y = -1;
    }

  }



  this.checkCollision = function(balls) {
    for (var i = 0; i < balls.length; i++) {
        var ball = balls[i];

        // checking collision with other balls than current ball
        var currentBall = this.element;
        var otherBalls = ball.element;
        

        if (currentBall != otherBalls) {
            
            var dx = this.x - ball.x;
            var dy = this.y - ball.y;
            var distance = Math.sqrt(dx * dx + dy * dy);

            //set direction after collision
            if (distance < this.radius + ball.radius) {
                if (dx > 0) {
                    this.direction.x = 1;
                    ball.direction.x = -1;
                } else {
                    this.direction.x = -1;
                    ball.direction.x = 1;
                }

                if (dy > 0) {
                    this.direction.y = 1;
                    ball.direction.y = -1;
                } else {
                    this.direction.y = -1;
                    ball.direction.y = 1;
                }

                // if (this.radius < ball.radius) {
                //     this.speed = this.velocity * Math.ceil(ball.radius / this.radius);
                // }

            }
        }
    }
  }
}

var Start = function(wrapper,isAntSmash){
  console.log(wrapper);
  this.balls = [];
  this.wrapper = wrapper;
  this.element = wrapper.children[0];
  console.log(this.element);

  this.checkIfOverLap = function(ball){
    for( var i = 0; i <this.balls.length; i++){
      const otherBall = this.balls[i];

      var dx = ball.x = otherBall.x;
      var dy = ball.y - otherBall.y;

      var distance = Math.sqrt(dx * dx + dy * dy);

      if( distance <= ball.radius + otherBall.radius){
        return false;
      }
    }
    return true;
  }


  this.createBalls = function(){
    for(var i = 0; i < TOTAL_BALLS; i++){
      var ball;
      //considering ball is always overlapped with ball already existing
      var overLapped = true;
      //Dont return if newly created ball overlaps with other.
      while(overLapped){
        ball = new Ball(this.element);

        if(this.checkIfOverLap(ball)){
          overLapped = false;
        }
      }
         ball.create();

         if(isAntSmash){ball.smashAnt(this.balls);}

        this.balls.push(ball);
    }
  }

  this.animateBallAndCheckCollision = function(){
    setInterval(
      function(){
        for (var i = 0; i <this.balls.length; i++){
          var ball = this.balls[i];
          ball.animateAndCheckCollision(this.balls);    
        }
      }.bind(this),
    33.33 );
    }
  

  //Render ball, move and check for collisions

  this.createBalls();
  this.animateBallAndCheckCollision();

}


function startGame(){
  var box = new Start(document.getElementsByClassName('container')[0],false);
  var box2 = new Start(document.getElementsByClassName('container-antsmash')[0],true);
}

startGame();



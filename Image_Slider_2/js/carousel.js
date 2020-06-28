
var IMAGE_SIZE = 400;
var IMAGE_HEIGHT = 225;



// Indicators Section
function Indicators(wrapper) {
  this.element = document.createElement('ul');
  this.images = wrapper.children;

  this.init = function() {
    this.setIndicators();

    this.element.style.position = 'absolute';
    this.element.style.left = '35%';
    this.element.style.bottom = '0';
    
  };

  this.setIndicators = function() {
    for (var i = 0; i < this.images.length; i++) {
      var indicator = document.createElement('li');
      var dots = document.createElement('span');
      dots.setAttribute('class', 'span-wrapper');

      indicator.appendChild(dots);

      indicator.style.listStyle = 'none';
      indicator.style.float = 'left';

      this.element.appendChild(indicator);
    }
  };
}


// Arrow buttons Section
function ArrowButton(isLeft) {
  this.element = document.createElement('button');
  this.arrowDirection;
  this.isLeft = isLeft;

  this.init = function() {
    this.setStyles();
    this.setDirection();
  };

  this.setStyles = function() {
    this.element.style.border = 'none';
    this.element.style.position = 'absolute';
    this.element.style.width = '14px';
    this.element.style.width = '14px';
    this.element.style.height = '22px';
    this.element.style.top = '50%';
    this.element.style.border = 'none';
  };

  this.setDirection = function() {
    var imgLink;
    if (this.isLeft) {
      this.element.style.left = 0;
      imgLink = 'url(./images/left.png)';
    } else {
      this.element.style.right = 0;
      imgLink = 'url(./images/right.png)';
    }
    this.element.style.background = imgLink + ' no-repeat';
  };
}



// Wrapper Section

// Images Wrapper class
function Wrapper(wrapperElement) {
  this.element = wrapperElement;
  this.images = wrapperElement.children;
  this.width = (this.images.length + 1) * IMAGE_SIZE; // * (IMAGE_SIZE + MARGIN * 2);

  this.init = function() {
    this.setStyles();
    this.setImages();
  };

  this.setStyles = function() {
    this.element.style.width = this.width + 'px';
    this.element.style.float = 'left';
    this.element.style.marginLeft = '0px';
  };

  this.setImages = function() {
    for (var i = 0; i < this.images.length; i++) {
      const img = this.images[i];
      img.style.float = 'left';
      img.style.margin = '0 0px';
    }
    this.images[0].style.marginLeft = '0px';
    this.images[this.images.length - 1].style.marginRight = '0px';
  };
}

function Carousel(carouselContainer, animationTime, holdTime) {
  this.element = carouselContainer;
  this.animationTime = animationTime ;
  this.holdTime = holdTime * 1000;

  this.width = IMAGE_SIZE;
  this.height = IMAGE_HEIGHT;
  
  this.wrapper = carouselContainer.children[0];
  // console.log(this.wrapper);
  this.currentIndex = 0;

  this.init = function() {
    this.setStyles();
    this.setArrowButtons();
    this.setIndicators();
    this.wrapperElement = new Wrapper(this.wrapper);
    this.wrapperElement.init();

    this.autoSlide();
  };

  this.setStyles = function() {
    this.element.style.backgroundColor = '#fffff';
    this.element.style.width = this.width + 'px';
    this.element.style.height = this.height + 'px';
    this.element.style.position = 'relative';
    this.element.style.overflow = 'hidden';
    this.element.setAttribute(
      'class',
      this.element.getAttribute('class') + ' clearfix'
    );
  };

  this.setArrowButtons = function() {
    this.leftArrow = new ArrowButton(true);
    this.leftArrow.init();

    this.rightArrow = new ArrowButton(false);
    this.rightArrow.init();

    this.setOnClick(this.leftArrow);
    this.setOnClick(this.rightArrow);

    this.element.appendChild(this.leftArrow.element);
    this.element.appendChild(this.rightArrow.element);
    console.log(this.leftArrow.element);
  };

  this.setOnClick = function(arrow) {
      arrow.element.onclick = function() {
      var direction = arrow.isLeft ? 1 : -1;

      // this.currentImageIndex -= direction;

      var imagesCount = this.wrapper.children.length;
      if (!arrow.isLeft && this.currentIndex >= imagesCount - 1) {
        this.slideWrapper(1, IMAGE_SIZE * (imagesCount - 1));
        this.currentIndex = 0;
      } else if (arrow.isLeft && this.currentIndex <= 0) {
        this.slideWrapper(-1, IMAGE_SIZE * (imagesCount - 1));
        this.currentIndex = imagesCount - 1;
      } else {
        this.currentIndex -= direction;
        this.slideWrapper(direction, IMAGE_SIZE);
      }


      // this.animateWrapper(direction, IMAGE_SIZE);
    }.bind(this);
  };

  this.setIndicators = function() {
    this.indicatorsContainer = new Indicators(this.wrapper);
    this.indicatorsContainer.init();
    this.element.appendChild(this.indicatorsContainer.element);

    this.setIndicatorsClick();
  };

  this.setIndicatorsClick = function() {
    buttons = this.indicatorsContainer.element.children;

    for (let i = 0; i < buttons.length; i++) {
      if (i == this.currentIndex) {
        buttons[i].style.backgroundColor = 'grey';
      } else {
        buttons[i].style.backgroundColor = '#aaa';
      }

      // Indicators clickable functionality
      buttons[i].onclick = function() {
        var difference = this.currentIndex - i;
        direction = difference >= 0 ? 1 : -1;
        if (difference != 0) {
          this.currentIndex = i;
          this.slideWrapper(direction, IMAGE_SIZE * direction * difference);
        }
      }.bind(this);
    }
  };



  //For animating slides by giving direction and sliding value
  this.slideWrapper = function(direction, value) {
    var wrapper = this.wrapper;
    var offset = 10 * (value / IMAGE_SIZE);
    var runningPos = 0;
    var previousMargin = wrapper.style.marginLeft;

    var stopAnimation = false;
    
    clearInterval(this.autoSlideInterval);

    setTimeout(
      function() {
        stopAnimation = true;
        wrapper.style.marginLeft =
          parseInt(previousMargin) + direction * value + 'px';

       
        this.setIndicatorsClick();
        this.autoSlide();
      }.bind(this),
      1000
    );

    setInterval(function() {
      if (!stopAnimation && runningPos <= value) {
        runningPos += offset;
        wrapper.style.marginLeft =
          parseInt(wrapper.style.marginLeft) + direction * offset + 'px';
      }
    }, this.animationTime);
  };

  this.autoSlide = function() {
    this.autoSlideInterval = setInterval(
      function() {
        var imagesCount = this.wrapper.children.length;
        if (this.currentIndex >= imagesCount - 1) {
          this.slideWrapper(1, IMAGE_SIZE * (imagesCount - 1));
          this.currentIndex = 0;
        } else {
          this.slideWrapper(-1, IMAGE_SIZE);
          this.currentIndex++;
        }
      }.bind(this),this.holdTime);
  };
}

var carousels = document.getElementsByClassName('carousel-container');

for (let i = 0; i < carousels.length; i++) {
  const carousel = carousels[i];

  var carouselObject = new Carousel(carousel, 18, i + 2);
  carouselObject.init();
}

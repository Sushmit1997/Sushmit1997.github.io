const mainContainer = document.querySelector('.carousel-container');

const leftButton = document.createElement('div');
const rightButton = document.createElement('div');
var imgWidth = 400;

var imageWidth = 400;
var imageWrapper = document.querySelector('.carousel-image-wrapper');
var currentIndex = 0;
var slide = true;

leftButton.setAttribute('class', 'prev');
rightButton.setAttribute('class', 'next');
leftButton.setAttribute('onClick', 'slideLeft()');
rightButton.setAttribute('onClick', 'slideRight()');
leftButton.innerHTML = '&#10094;';
rightButton.innerHTML = '&#10095;';

mainContainer.appendChild(leftButton);
mainContainer.appendChild(rightButton);

var images = Array.from(document.getElementsByTagName('img'));

var indicatorContainer = Array.from(
  document.querySelectorAll('.indicator-container')
)[0];
//console.log(images);

var imgLength = images.length;

var index = 0;

images.forEach((el, index) => {
  el.style.left = index * imgWidth + 'px';
  var indicator = document.createElement('span');
  indicator.classList.add('span-wrapper');
  indicatorContainer.appendChild(indicator);
});

var indicators = Array.from(document.getElementsByTagName('span'));

// console.log(indicators);
indicators[0].style.background = 'grey';

indicators.forEach(function (el, currentIndex) {
  indicators[currentIndex].addEventListener('click', function () {
    // clearInterval(interval);
    shiftImages(currentIndex);
  });
});

//For Automatic Sliding
var interval = setInterval(function () {
    // console.log('here');
    indicators[index].style.background = 'white';
    slideRight();
}, 4000);


function shiftImages(index) {
  console.log(index);
  imageWrapper.style.left = index * -imageWidth + 'px';
  indicators.forEach(function (el) {
    el.style.background = 'white';
  });
  indicators[index].style.background = 'grey';


}

function slideRight() {
  currentIndex++;
  indicators.forEach(function (el) {
    el.style.background = 'white';
  });
  // indicators[currentIndex -1].style.background = 'white';
   imageWrapper.style.left = currentIndex * -imageWidth + 'px';
  if (parseInt(imageWrapper.style.left) <= -1600) {
    imageWrapper.style.left = 0 + 'px';
    currentIndex = 0;
  }
  indicators[currentIndex].style.background = 'grey';
  
}



function slideLeft() {
  if (parseInt(imageWrapper.style.left) !== 0) {
    currentIndex--;
    imageWrapper.style.left = currentIndex * imageWidth + 'px';
  }
  if (parseInt(imageWrapper.style.left) > 0) {
    imageWrapper.style.left = 0 + 'px';
  }
}



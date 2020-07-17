let portraitImages = [];

function preload() {
  for (var i = 0; i < arguments.length - 1; i++) {
    preload.arguments[0][i] = new Image();
    preload.arguments[0][i].src = preload.arguments[i + 1];
  }
}

// Load player portrait images and canon image which will be used via caching as well
preload(
  portraitImages,
  './images/char_portrait/flipped/chun-img.png',
  './images/char_portrait/flipped/ken-img.png',
  './images/char_portrait/flipped/ryu-img.png',
  './images/char_portrait/flipped/blanka-img.png',
  './images/char_portrait/chun-img.png',
  './images/char_portrait/ken-img.png',
  './images/char_portrait/ryu-img.png',
  './images/char_portrait/blanka-img.png'
);

let portraitImages = [];

let soundEffects = [];

function preload() {
  for (var i = 0; i < arguments.length - 1; i++) {
    preload.arguments[0][i] = new Image();
    preload.arguments[0][i].src = preload.arguments[i + 1];
  }
}

function preloadAudio() {
  for (var i = 0; i < arguments.lentgh - 1; i++) {
    preloadAudio.arguments[0][i] = new Audio();
    preloadAudio.arguments[0][i].src = preloadAudio.arguments[i + 1];
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
  './images/char_portrait/blanka-img.png',
  './images/char_portrait/vs.png',
  './images/bg4.jpg',
  './images/bg3.gif',
  './images/bg5.jpg',
  './images/bg2.gif',
  './images/ken_assets/ken_walk.png',
  './images/ken_assets/ken_idle.png',
  './images/ken_assets/ken_punch4.png',
  './images/ken_assets/ken_block.png',
  './images/ken_assets/ken_hit.png',
  './images/ken_assets/ken_jump2.png',
  './images/ken_assets/ken_kick.png',
  './images/ken_assets/ken_crouch1.png',
  './images/blanka_assets/blanka_walk.png',
  './images/blanka_assets/blanka_idle.p',
  './images/blanka_assets/blanka_die.png',
  './images/blanka_assets/blanka_victory.png',
  './images/blanka_assets/ken_hadouken.png',
  './images/blanka_assets/blanka_punch.png',
  './images/blanka_assets/blanka_block.png',
  './images/blanka_assets/blanka_jump.pn',
  './images/blanka_assets/blanka_hit.png',
  './images/blanka_assets/blanka_kick.png',
  './images/blanka_assets/blanka_crouch.png',
  './images/ryu_assets/ryu_walk.png',
  './images/ryu_assets/ryu_idle.png',
  './images/ryu_assets/ryu_die.png',
  './images/ryu_assets/ryu_victory.png',
  './images/ryu_assets/ryu_haduoken.png',
  './images/ryu_assets/ryu_punch.png',
  './images/ryu_assets/ryu_block.png',
  './images/ryu_assets/ryu_jump.png',
  './images/ryu_assets/ryu_hit.png',
  './images/ryu_assets/ryu_kick.png',
  './images/ryu_assets/ryu_crouch.png'
);

preloadAudio(
  soundEffects,
  './audio/start.wav',
  './audio/select.wav',
  './audio/fight.wav'
);

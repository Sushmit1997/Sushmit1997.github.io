let portraitImages = [];

let soundEffects = [];

let noOfImagesLoaded = 0;

function preload(collector) {
  for (var i = 0; i < arguments.length - 1; i++) {
    collector[i] = new Image();
    collector[i].src = preload.arguments[i + 1];
    collector[i].onload = imageLoaded;
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
  './images/mainScreen_assets/fight.png',
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
  './images/blanka_assets/blanka_idle.png',
  './images/blanka_assets/blanka_die.png',
  './images/blanka_assets/blanka_victory.png',
  './images/blanka_assets/ken_hadouken.png',
  './images/blanka_assets/blanka_punch.png',
  './images/blanka_assets/blanka_block.png',
  './images/blanka_assets/blanka_jump.png',
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
  './images/ryu_assets/ryu_crouch.png',
  './images/chunli_assets/flipped/chun_idle.png',
  './images/chunli_assets/flipped/chun_walk.png',
  './images/chunli_assets/flipped/chun_die2.png',
  './images/chunli_assets/flipped/chun_victory.png',
  './images/chunli_assets/flipped/chun_hadouken.png',
  './images/chunli_assets/flipped/chun_punch2.png',
  './images/chunli_assets/flipped/chun_block.png',
  './images/chunli_assets/flipped/chun_jump.png',
  './images/chunli_assets/flipped/chun_hit.png',
  './images/chunli_assets/flipped/chun_kick.png',
  './images/chunli_assets/flipped/chun_crouch.png',
  './images/chunli_assets/chun_walk.png',
  './images/chunli_assets/chun_idle.png',
  './images/chunli_assets/chun_punch2.png',
  './images/chunli_assets/chun_block.png',
  './images/chunli_assets/chun_hadouken.png',
  './images/chunli_assets/chun_jump.png',
  './images/chunli_assets/chun_hit.png',
  './images/chunli_assets/chun_kick.png',
  './images/chunli_assets/chun_crouch.png',
  './images/chunli_assets/chun_die.png',
  './images/chunli_assets/chun_victory.png',
  './images/ken_assets/flipped/ken_walk.png',
  './images/ken_assets/flipped/ken_idle.png',
  './images/ken_assets/flipped/ken_punch4.png',
  './images/ken_assets/flipped/ken_block.png',
  './images/ken_assets/flipped/ken_hadouken.png',
  './images/ken_assets/flipped/ken_die2.png',
  './images/ken_assets/flipped/ken_victory.png',
  './images/ken_assets/flipped/ken_kick.png',
  './images/ken_assets/flipped/ken_crouch1.png',
  './images/ken_assets/flipped/ken_jump2.png',
  './images/ken_assets/flipped/ken_hit.png',
  './images/blanka_assets/flipped/blanka_walk.png',
  './images/blanka_assets/flipped/blanka_idle.png',
  './images/blanka_assets/flipped/blanka_punch.png',
  './images/blanka_assets/flipped/blanka_block.png',
  './images/blanka_assets/flipped/ken_hadouken.png',
  './images/blanka_assets/flipped/blanka_die2.png',
  './images/blanka_assets/flipped/blanka_victory.png',
  './images/blanka_assets/flipped/blanka_kick.png',
  './images/blanka_assets/flipped/blanka_jump.png',
  './images/blanka_assets/flipped/blanka_crouch.png',
  './images/blanka_assets/flipped/blanka_hit.png',
  './images/ryu_assets/flipped/ryu_walk.png',
  './images/ryu_assets/flipped/ryu_idle.png',
  './images/ryu_assets/flipped/ryu_punch.png',
  './images/ryu_assets/flipped/ryu_block.png',
  './images/ryu_assets/flipped/ryu_hadouken.png',
  './images/ryu_assets/flipped/ryu_die2.png',
  './images/ryu_assets/flipped/ryu_victory.png',
  './images/ryu_assets/flipped/ryu_kick.png',
  './images/ryu_assets/flipped/ryu_crouch.png',
  './images/ryu_assets/flipped/ryu_jump.png',
  './images/ryu_assets/flipped/ryu_hit.png'
);

function imageLoaded() {
  noOfImagesLoaded++;
  if (noOfImagesLoaded == 95) {
    onLoadFinish();
  }
}

function onLoadFinish() {
  document.querySelector('.loader').innerText = 'All Assets Loaded';
}

preloadAudio(
  soundEffects,
  './audio/start.wav',
  './audio/select.wav',
  './audio/fight.wav'
);

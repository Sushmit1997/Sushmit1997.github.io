let player1;
let player2;
let isInstructionVisible = false;
let isPaused = false;
let isPlayWin = false;

document.querySelector('.start_button').addEventListener('click', () => {
  playSound();
  //Timer

  playMusic();
  var timeleft = 60;
  var downloadTimer = setInterval(function () {
    if (timeleft <= 0) {
      clearInterval(downloadTimer);
      document.getElementById('countdown').innerHTML = 'Finished';
    } else {
      document.getElementById('countdown').innerHTML =
        `Time Remaining : ` + timeleft;
    }
    timeleft -= 1;
  }, 1000);

  playStart();
  setTimeout(playFight(), 1500);
  document.querySelector('.game_buttons').style.display = 'block';
  player1 = document.getElementById('player1-name').textContent;
  player2 = document.getElementById('player2-name').textContent;
  if (player1 === 'Chun Li') {
    player1 = 'chun';
  }
  if (player2 === 'Chun Li') {
    player2 = 'chun';
  }

  setTimeout(function () {
    document.querySelector('.fight-img').style.display = 'block';
    setTimeout(function () {
      document.querySelector('.fight-img').style.display = 'none';
    }, 700);
  }, 500);
  document.querySelector('.startScreen').style.display = 'none';
  Game.init(player1.toLowerCase(), player2.toLowerCase());
  console.log(player1, player2);
});

document.querySelector('.sound-off').addEventListener('click', () => {
  if (!isPaused) {
    stopMusic();
    isPaused = true;
  } else {
    playMusic();
    isPaused = false;
  }
});

document.querySelector('.info-icon').addEventListener('click', () => {
  document.querySelector('.instruction-container').style.display = 'block';
});

document.querySelector('.cross-icon').addEventListener('click', () => {
  document.querySelector('.instruction-container').style.display = 'none';
});

document.querySelector('.info_button').addEventListener('click', () => {
  document.querySelector('.instruction-container2').style.display = 'block';
});

document.querySelector('.cross-icon2').addEventListener('click', () => {
  document.querySelector('.instruction-container2').style.display = 'none';
});

document.querySelector('.reload_button').addEventListener('click', () => {
  location.reload();
});

document
  .getElementById('player1-container')
  .addEventListener('click', (event) => {
    if (event.target.classList.contains('player1_select')) {
      playSelect();
      document.querySelectorAll('.player1_select').forEach((el) => {
        el.classList.remove('player1--selected');
      });
      event.target.classList.add('player1--selected');
    }
  });

document
  .getElementById('player2-container')
  .addEventListener('click', (event) => {
    if (event.target.classList.contains('player2_select')) {
      playSelect();
      document.querySelectorAll('.player2_select').forEach((el) => {
        el.classList.remove('player2--selected');
      });
      event.target.classList.add('player2--selected');
    }
  });

function playSelect() {
  let select = new Audio();
  select.src = './audio/select.wav';
  select.play();
}

function playFight() {
  let fight = new Audio();
  fight.src = './audio/fight.wav';
  fight.play();
}
function playStart() {
  let start = new Audio();
  start.src = './audio/start.wav';
  start.volume = 0.4;
  start.play();
}

let kenMusic = new Audio('./audio/main_theme.mp3');
function playMusic() {
  kenMusic.volume = 0.2;
  kenMusic.play();
}

function stopMusic() {
  kenMusic.pause();
}

function surePlay() {
  if (!isPlayWin) {
    playWin();
    isPlayWin = true;
  }
}

function playWin() {
  let win = new Audio('./audio/win.wav');
  win.volume = 0.4;
  win.play();
}

let player1;
let player2;
let isInstructionVisible = false;

document.querySelector('.start_button').addEventListener('click', () => {
  console.log('Clicked');
  document.querySelector('.game_buttons').style.display = 'block';
  player1 = document.getElementById('player1-name').textContent;
  player2 = document.getElementById('player2-name').textContent;
  if (player1 === 'Chun Li') {
    player1 = 'chun';
  }
  if (player2 === 'Chun Li') {
    player2 = 'chun';
  }
  document.querySelector('.startScreen').style.display = 'none';
  Game.init(player1.toLowerCase(), player2.toLowerCase());
  console.log(player1, player2);
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

// document.getElementById('gameStart').onclick = () => {
//   document.getElementById('gameStart').style.display = 'none';
//   Game.init('ken', 'chun');
// };

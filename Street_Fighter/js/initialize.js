document.getElementById('gameStarter').onclick = () => {
  document.getElementById('gameStarter').style.display = 'none';
  Game.init('ken', 'chun');
};

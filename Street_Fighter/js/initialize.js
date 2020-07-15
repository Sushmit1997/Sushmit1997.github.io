var x = document.getElementById('player1select').selectedIndex;
var player1 = document.getElementsByTagName('option')[x].value;

document.getElementById('gameStarter').onclick = () => {
  console.log(player1);
  document.getElementById('gameStarter').style.display = 'none';
  Game.init('chun', 'chun');
};

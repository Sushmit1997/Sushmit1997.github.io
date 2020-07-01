// main class
class main {
  constructor(numberOfGames) {
    this.element = document.getElementsByClassName('main-container')[0];

    this.gameInstances = [];
    this.createGames(numberOfGames);
  }

  createGames(numberOfGames) {
    for (let i = 0; i < numberOfGames; i++) {
      var game = new mainGame(this.element);
      this.gameInstances.push(game);
    }
  }
}

main = new main(1);

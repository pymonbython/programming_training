class Statistics {
  constructor() {
    this.gameResults = [];
  }

  addGameToStatistics(win, bid) {
    let gameResult = {
      win,
      bid,
    };

    this.gameResults.push(gameResult);
  }

  showGameStatistics() {
    const games = this.gameResults.length;
    const wins = this.gameResults.filter((result) => result.win).length;
    const losses = games - wins;

    return [games, wins, losses];
  }
}

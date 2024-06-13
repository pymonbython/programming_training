class Game {
  constructor(start = 100) {
    this.stats = new Statistics();
    this.wallet = new Wallet(start);
    document
      .getElementById("start")
      .addEventListener("click", this.startGame.bind(this));

    this.spanWallet = document.querySelector(".panel span.wallet");
    this.boards = document.querySelectorAll("div.color");
    this.inputBid = document.getElementById("bid");
    this.spanResult = document.querySelector(".score span.result");
    this.spanGames = document.querySelector(".score span.number");
    this.spanWins = document.querySelector(".score span.win");
    this.spanLosses = document.querySelector(".score span.loss");

    this.render();
  }

  render(
    money = this.wallet.getWalletValue(),
    stats = this.stats.showGameStatistics(),
    result = "",
    colors = ["gray", "gray", "gray"],
    bid = 0,
    wonMoney = 0
  ) {
    // this.spanWallet.textContent = this.wallet.getWalletValue();
    this.spanWallet.textContent = money;
    this.spanGames.textContent = stats[0];
    this.spanWins.textContent = stats[0];
    this.spanLosses.textContent = stats[0];
    result ? (result = `Wygrałeś ${wonMoney}`) : (result = `Przegrałeś ${bid}`);
    if (!bid) {
      result = "";
    }
    result = this.spanResult.textContent = result;

    this.boards.forEach(
      (board, index) => (board.style.backgroundColor = colors[index])
    );
  }

  startGame() {}
}

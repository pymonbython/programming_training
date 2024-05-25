const gameSummary = {
  numbers: 0,
  wins: 0,
  losses: 0,
  draws: 0,
};

const game = {
  playerHand: "",
  aiHand: "",
};

const hands = [...document.querySelectorAll(".select img")];
// Pierwsza funkcja

function handSelection() {
  console.log(game.playerHand);
  game.playerHand = this.dataset.option;
  hands.forEach((hand) => (hand.style.boxShadow = ""));
  this.style.boxShadow = "0 0 0 4px red";
}

function aiChoice() {
  return hands[Math.floor(Math.random() * 3)].dataset.option;
}

function checkResult(player, ai) {
  if (player == ai) {
    return "draw";
  } else if (
    (player == "papier" && ai == "kamień") ||
    (player == "kamień" && ai == "nożyczki") ||
    (player == "nożyczki" && ai == "papier")
  ) {
    return "win";
  } else {
    return "loss";
  }
}

// Publikacja wyniku

function publishResult(player, ai, result) {
  document.querySelector('[data-summary="your-choice"]').textContent = player;
  document.querySelector('[data-summary="ai-choice"]').textContent = ai;
  document.querySelector(".numbers span").textContent = ++gameSummary.numbers;

  if (result == "win") {
    document.querySelector(".wins span").textContent = ++gameSummary.wins;
    document.querySelector('[data-summary="who-win"]').textContent =
      "Ty wygrałeś!!!";
    document.querySelector('[data-summary="who-win"]').style.color = "green";
  } else if (result == "loss") {
    document.querySelector(".losses span").textContent = ++gameSummary.losses;
    document.querySelector('[data-summary="who-win"]').textContent =
      "Komputer wygrał :(";
    document.querySelector('[data-summary="who-win"]').style.color = "red";
  } else {
    document.querySelector(".draws span").textContent = ++gameSummary.draws;
    document.querySelector('[data-summary="who-win"]').textContent =
      "Remis :\\";
    document.querySelector('[data-summary="who-win"]').style.color = "gray";
  }
}

function endGame() {
  document.querySelector(`[data-option="${game.playerHand}"]`).style.boxShadow =
    "";
  game.playerHand = "";
}

// Funkcja sterująca

function startGame() {
  if (!game.playerHand) return alert("Wybierz dłoń!!!");

  game.aiHand = aiChoice();
  const gameResult = checkResult(game.playerHand, game.aiHand);

  publishResult(game.playerHand, game.aiHand, gameResult);
  endGame();
}

hands.forEach((hand) => hand.addEventListener("click", handSelection));

document.querySelector(".start").addEventListener("click", startGame);


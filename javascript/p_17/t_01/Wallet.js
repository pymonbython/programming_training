class Wallet {
  constructor(money) {
    let _money = money;
    // Pobieranie aktualnej zawartości portfela;
    this.getWalletValue = () => _money;
    // Return true or false;
    this.checkCanPlay = (value) => _money >= value;

    this.changeWallet = (value, type = "+") => {
      if (typeof value === "number" && !isNaN(value)) {
        if (type === "+") {
          return (_money += value);
        } else if (type === "-") {
          return (_money -= value);
        } else {
          throw new Error("Incorrect action type!");
        }
      } else {
        console.log(typeof value);
        throw new Error("Incorrect number!");
      }
    };
  }
}

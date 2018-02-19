class Atm {
  constructor(type) {
    this.type = type;
    this.transactionHistory = "";
    this.money = 0;
  }

  withdraw = withdraw_amt => {
    this.money = this.money - withdraw_amt;
  };

  deposit = deposit_amt => {
    this.money = this.money + deposit_amt;
  };

  showBalance = () => {
    return this.money;
  };
}
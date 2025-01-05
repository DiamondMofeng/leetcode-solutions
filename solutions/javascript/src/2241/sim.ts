/** [$20, $50, $100, $200, $500] */
type Banknotes = [number, number, number, number, number]

const values = [20, 50, 100, 200, 500]

class ATM {

  banknotes: Banknotes = [0, 0, 0, 0, 0]

  constructor() { }

  deposit(banknotesCount: Banknotes): void {
    for (let i = 0; i < banknotesCount.length; i++) {
      this.banknotes[i] += banknotesCount[i]
    }
  }

  withdraw(amount: number): Banknotes | [-1] {
    let res: Banknotes = [0, 0, 0, 0, 0]

    // greedy
    for (let i = 4; i >= 0; i--) {
      const rem = this.banknotes[i] - res[i]
      const count = Math.min(rem, Math.floor(amount / values[i]))
      res[i] += count
      amount -= count * values[i]
    }

    if (amount > 0) {
      return [-1]
    }

    for (let i = 0; i < 5; i++) {
      this.banknotes[i] -= res[i]
    }
    return res
  }
}

/**
* Your ATM object will be instantiated and called as such:
* var obj = new ATM()
* obj.deposit(banknotesCount)
* var param_2 = obj.withdraw(amount)
*/
/**
 * @param {number[]} customers
 * @param {number} boardingCost
 * @param {number} runningCost
 * @return {number}
 */
var minOperationsMaxProfit = function (customers, boardingCost, runningCost) {
  if (boardingCost * 16 <= runningCost) {
    return -1;
  }

  // O(n)模拟
  let res = -1;
  let maxProfit = 0;
  let curProfit = 0;
  let queuedCustomers = 0;

  let i = 0;
  do {
    let n = customers[i] ?? 0;
    queuedCustomers += n;

    let curAvailable = Math.min(queuedCustomers, 4) // 最多可用乘客
    queuedCustomers -= curAvailable;

    curProfit += curAvailable * boardingCost
    curProfit -= runningCost

    if (curProfit > maxProfit) {
      maxProfit = curProfit
      res = i + 1;
    }

    i += 1;

  } while (i < customers.length || queuedCustomers > 0);

  return res;
};
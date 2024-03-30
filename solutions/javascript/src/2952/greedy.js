/**
 * @param {number[]} coins
 * @param {number} target
 * @return {number}
 */
var minimumAddedCoins = function (coins, target) {
  coins.sort((a, b) => a - b)

  let cnt = 0;
  let cur = 0

  for (const x of coins) {
      while (x - 1 > cur) {
          cur += cur + 1
          cnt += 1
      }
      cur += x
  }

  while (cur < target) {
      cur += cur + 1
      cnt += 1
  }

  return cnt;
};
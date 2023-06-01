/**
 * @param {number[]} price
 * @param {number} k
 * @return {number}
 */
var maximumTastiness = function (price, k) {
  const n = price.length

  price.sort((a, b) => a - b)

  function check(x) {
      // let res = Infinity
      let cnt = 0;
      let prev = -Infinity
      for (let i of price) {
          if (i >= prev + x) {
              cnt += 1
              prev = i
          }
      }
      return cnt >= k
  }

  // [l,r]
  let left = 0;
  let right = price[n - 1] - price[0]
  while (left <= right) {
      const mid = (left + right) >> 1
      if (check(mid)) {
          left = mid + 1
      } else {
          right = mid - 1
      }
  }
  return left - 1
};
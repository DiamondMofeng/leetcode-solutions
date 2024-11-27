/**
 * @param {number[]} colors
 * @param {number} k
 * @return {number}
 */
var numberOfAlternatingGroups = function (colors, k) {
  const n = colors.length

  let flag = colors[0] ^ 1
  let cur = 0;

  let res = 0;
  for (let i = 0; i < k + n; i++) {
      if (colors[i % n] !== flag) {
          cur += 1
          flag ^= 1
      } else {
          cur = 1;
      }

      if (i >= k && cur >= k) {
          res += 1
      }
  }

  return res;
};
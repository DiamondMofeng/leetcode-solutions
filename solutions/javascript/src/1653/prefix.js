/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function (s) {
  let bPrefix = 0
  let aSuffix = [...s].reduce((sum, ch) => sum + (ch === 'a'), 0)

  let res = aSuffix;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'a') {
      aSuffix -= 1
    } else {
      bPrefix += 1;
    }
    res = Math.min(res, aSuffix + bPrefix);
  }

  return res;
};

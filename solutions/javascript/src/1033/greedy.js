/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
var numMovesStones = function (a, b, c) {
  [a, b, c] = [a, b, c].sort((a, b) => a - b);

  let max = c - a - 2;
  let min = (() => {
    if (c - a === 2) {
      return 0;
    }
    if (b - a <= 2 || c - b <= 2) {
      return 1;
    }
    return 2;
  })();

  return [min, max];
};

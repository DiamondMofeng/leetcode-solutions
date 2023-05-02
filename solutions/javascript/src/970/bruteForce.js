/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function (x, y, bound) {
  let res = [];

  for (let xx = 1; xx < bound; xx *= x) {
    for (let yy = 1; yy < bound; yy *= y) {
      if (xx + yy <= bound) {
        res.push(xx + yy);
      }

      if (y === 1) {
        break;
      }
    }

    if (x === 1) {
      break;
    }
  }

  return [...new Set(res)];
};

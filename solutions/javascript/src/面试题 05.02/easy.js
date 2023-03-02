/**
 * @param {number} num
 * @return {string}
 */
var printBin = function (num) {
  let res = ""
  while (num !== 0) {
    if (res.length > 32) {
      return 'ERROR';
    }
    num *= 2;
    res += String(Math.floor(num % 2))
    num %= 1;
  }
  return "0." + res;
};
/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumSwap = function (s1, s2) {

  let diffX = 0
  let diffY = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      if (s1[i] === 'x') {
        diffX += 1;
      } else {
        diffY += 1;
      }
    }
  }

  if ((diffX + diffY) % 2 !== 0) {
    return -1;
  }

  return Math.floor(diffX / 2) + (diffX % 2) * 2
    + Math.floor(diffY / 2)
};
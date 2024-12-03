/**
 * @param {string} coordinate1
 * @param {string} coordinate2
 * @return {boolean}
 */
var checkTwoChessboards = function (coordinate1, coordinate2) {
  return ((coordinate1.charCodeAt(0) + coordinate1.charCodeAt(1)) & 1) === ((coordinate2.charCodeAt(0) + coordinate2.charCodeAt(1)) & 1)
};

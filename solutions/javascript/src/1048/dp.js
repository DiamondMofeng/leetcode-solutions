/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function (words) {
  words.sort((a, b) => {
    return a.length - b.length;
  });

  let map = {};

  words.forEach((word) => {
    let res = 1;
    for (let i = 0; i < word.length; i++) {
      let subWord = word.slice(0, i) + word.slice(i + 1);
      res = Math.max(res, 1 + (map[subWord] ?? 0));
    }
    map[word] = res;
  });

  return Math.max(...Object.values(map));
};

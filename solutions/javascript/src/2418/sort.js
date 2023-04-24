/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  return new Array(names.length)
    .fill()
    .map((_, i) => i)
    .sort((a, b) => heights[b] - heights[a])
    .map((i) => names[i]);
};

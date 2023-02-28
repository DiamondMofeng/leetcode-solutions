/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function (items1, items2) {
  return Object.entries(
    [...items1, ...items2].reduce((map, [val, weight]) => {
      map[val] = (map[val] ?? 0) + weight;
      return map;
    }, {})
  ).sort((a, b) => a[0] - b[0])
};

/**
 * @param {number[]} values
 * @param {number[]} labels
 * @param {number} numWanted
 * @param {number} useLimit
 * @return {number}
 */
var largestValsFromLabels = function (values, labels, numWanted, useLimit) {
  const n = values.length;
  let sortedIndex = new Array(n)
    .fill()
    .map((_, i) => i)
    .sort((a, b) => values[b] - values[a]);

  let res = 0;
  const usedLabels = {};
  for (let idx of sortedIndex) {
    if (numWanted === 0) {
      break;
    }

    let label = labels[idx];

    usedLabels[label] ??= 0;
    if (usedLabels[label] >= useLimit) {
      continue;
    }
    usedLabels[label] += 1;
    numWanted -= 1;
    res += values[idx];
  }
  return res;
};

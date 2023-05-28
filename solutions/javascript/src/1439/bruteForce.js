/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (mat, k) {
  // 暴力
  const rowLen = mat.length;

  let sums = mat[0];

  for (let r = 1; r < rowLen; r++) {
    let newSums = [];
    for (let i of sums) {
      for (let j of mat[r]) {
        newSums.push(i + j);
      }
    }
    newSums.sort((a, b) => a - b);
    sums = newSums.slice(0, k);
  }

  return sums[k - 1];
};

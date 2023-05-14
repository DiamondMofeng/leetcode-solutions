function flip(str) {
  return [...str].map((c) => (c === "1" ? "0" : "1")).join("");
}

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxEqualRowsAfterFlips = function (matrix) {
  let counter = matrix.reduce((map, row) => {
    let key = row.join("");
    map[key] ??= 0;
    map[key] += 1;
    return map;
  }, {});

  let res = 1;
  for (let [k, v] of Object.entries(counter)) {
    res = Math.max(res, v + (counter[flip(k)] ?? 0));
  }
  return res;
};

/**
 * @param {number[]} jobDifficulty
 * @param {number} D
 * @return {number}
 */
var minDifficulty = function (jobDifficulty, D) {
  const n = jobDifficulty.length;
  if (D > n) {
    return -1;
  }

  // remaining d,idx
  const dfs = cached((d, i) => {
    if (d === 0) {
      return Math.max(...jobDifficulty.slice(0, i + 1));
    }
    let res = Infinity;
    let max = 0;
    for (let idx = i; idx >= d; idx--) {
      max = Math.max(max, jobDifficulty[idx]);
      res = Math.min(res, max + dfs(d - 1, idx - 1));
    }
    return res;
  });

  return dfs(D - 1, n - 1);
};

function cached(func) {
  const cache = {};
  return function (...args) {
    const key = args.join(",");

    if (cache[key] === undefined) {
      cache[key] = func(...args);
    }
    return cache[key];
  };
}

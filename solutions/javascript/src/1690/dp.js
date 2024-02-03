/**
 * @param {number[]} stones
 * @return {number}
 */
var stoneGameVII = function (stones) {
  const n = stones.length
  const prefixSum = [0];
  stones.forEach((x, i) => {
      prefixSum.push(prefixSum[i] + x)
  })

  const get = (l, r) => prefixSum[r + 1] - prefixSum[l]

  const cache = Array(n).fill().map(() => Array(n).fill(-1))

  const dfs = (l, r) => {
      if (l === r) {
          return 0;
      }

      if (cache[l][r] !== -1) {
          return cache[l][r]
      }
      // 取左边的
      const left = get(l + 1, r) - dfs(l + 1, r)
      const right = get(l, r - 1) - dfs(l, r - 1)

      cache[l][r] = Math.max(left, right)
      return cache[l][r];
  }

  return dfs(0, stones.length - 1)
};
const MOD = 1e9 + 7

/**
 * @param {number[]} arr
 * @return {number}
 */
var numFactoredBinaryTrees = function (arr) {
  arr.sort((a, b) => a - b)

  const map = new Map()
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    const x = arr[i]
    let cur = 1;
    for (const a of map.keys()) {
      const b = x / a
      if (map.has(b)) {
        cur += map.get(a) * map.get(b)
        cur %= MOD
      }
    }
    map.set(x, cur)
    res = (res + cur) % MOD
  }

  return res;
};
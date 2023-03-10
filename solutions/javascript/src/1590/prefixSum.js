function safeMod(n, p) {
  return (n + p) % p
}

/**
* @param {number[]} nums
* @param {number} p
* @return {number}
*/
var minSubarray = function (nums, p) {
  let prefixSum = [0]
  nums.forEach((n, i) => prefixSum.push(prefixSum[i] + n))

  let sum = prefixSum[prefixSum.length - 1]

  let target = safeMod(sum, p)
  if (target === 0) {
    return 0
  }

  let res = Infinity

  let last = {}

  prefixSum.forEach((n, i) => {
    n = safeMod(n, p)
    if (last[safeMod(n - target, p)] != null) {
      res = Math.min(res, i - last[safeMod(n - target, p)])
    }
    last[n] = i
  })

  if (res >= nums.length) {
    return -1
  }
  return res


};
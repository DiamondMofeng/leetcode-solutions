/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumMountainRemovals = function (nums) {
  const n = nums.length
  let left = Array(n).fill(1)

  for (let i = 0; i < n; i++) {
    // i==0时会直接跳过里层循环
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] > nums[j]) {
        left[i] = Math.max(left[i], left[j] + 1)
      }
    }
  }

  let right = Array(n).fill(1)

  for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] > nums[j]) {
        right[i] = Math.max(right[i], right[j] + 1)
      }
    }
  }

  let res = n;
  for (let i = 1; i < n - 1; i++) {
    if (left[i] !== 1 && right[i] !== 1) {
      const cur = n - left[i] - right[i] + 1
      res = Math.min(res, cur)
    }
  }
  return res;
};
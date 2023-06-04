/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function (nums) {
  const n = nums.length;
  nums.sort((a, b) => a - b);

  let set = new Set();

  let l = 0;
  let r = n - 1;
  while (l < r) {
    set.add((nums[l] + nums[r]) / 2);
    l += 1;
    r -= 1;
  }

  return set.size;
};

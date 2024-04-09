function search(nums, x) {
  let l = 0;
  let r = nums.length - 1

  while (l <= r) {
    const mid = (l + r) >> 1
    if (nums[mid] >= x) {
      r = mid - 1
    } else {
      l = mid + 1
    }
  }

  return l
}

/**
* @param {number[]} nums
* @return {number}
*/
var maximumCount = function (nums) {
  //找到第一个 >= 0 的位置和第一个 >= 1 的位置
  return Math.max(nums.length - search(nums, 1), search(nums, 0))
};
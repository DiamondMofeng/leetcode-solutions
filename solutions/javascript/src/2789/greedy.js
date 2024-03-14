/**
 * @param {number[]} nums
 * @return {number}
 */
var maxArrayValue = function (nums) {
  const n = nums.length
  let res = nums[n - 1];
  for (let i = n - 2; i >= 0; i--) {
      const x = nums[i]
      if (x <= res) {
          res += x;
      } else {
          res = x;
      }
  }

  return res;
};
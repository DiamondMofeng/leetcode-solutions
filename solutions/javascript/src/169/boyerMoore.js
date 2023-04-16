/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let candidate = 0
  let count = 0;
  nums.forEach((num) => {
      if (count === 0) {
          candidate = num
      }
      count += candidate === num ? 1 : -1
  })
  return candidate

};
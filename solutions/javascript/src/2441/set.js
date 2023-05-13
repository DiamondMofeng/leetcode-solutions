/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
  let set = new Set(nums);
  let res = -1;
  for (let n of nums) {
    if (set.has(-n)) {
      res = Math.max(res, n);
    }
  }
  return res;
};

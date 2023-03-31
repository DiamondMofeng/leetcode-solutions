/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function (nums, diff) {
  const n = nums.length

  const set = new Set(nums);
  let res = 0;
  for (let a of nums) {
    if (set.has(a + diff) && set.has(a + diff * 2)) {
      res += 1;
    }
  }
  return res;
};
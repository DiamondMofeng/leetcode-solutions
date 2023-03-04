/**
 * @param {number[]} nums
 * @return {number}
 */
var countTriplets = function (nums) {

  let cnt = 0;
  for (let i of nums) {
    for (let j of nums) {
      for (let k of nums) {
        if ((i & j & k) === 0) {
          cnt += 1;
        }
      }
    }
  }

  return cnt;
};
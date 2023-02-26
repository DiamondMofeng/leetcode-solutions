/**
 * @param {number[]} nums
 * @return {number}
 */
var movesToMakeZigzag = function (nums) {
  // 分奇偶两种锯齿情况分别计算
  let res1 = 0;
  let res2 = 0;
  for (let i = 0; i < nums.length; i += 1) {
    let min = Math.min(
      nums[i - 1] ?? Infinity,
      nums[i + 1] ?? Infinity
    )
    if (nums[i] >= min) {
      i % 2 === 0
        ? res1 += (nums[i] - min + 1)
        : res2 += (nums[i] - min + 1)
    }
  }

  return Math.min(res1, res2);
};

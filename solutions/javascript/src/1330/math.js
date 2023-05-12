/**
 * @param {number[]} nums
 * @return {number}
 */
var maxValueAfterReverse = function (nums) {
  let base = 0;
  let d = 0;
  let mx = -Infinity;
  let mn = Infinity;
  for (let i = 1; i < nums.length; i++) {
    let [a, b] = [nums[i - 1], nums[i]];
    base += Math.abs(a - b);
    mx = Math.max(mx, Math.min(a, b));
    mn = Math.min(mn, Math.max(a, b));
    d = Math.max(
      d,
      Math.abs(nums[0] - b) - Math.abs(a - b),
      Math.abs(nums[nums.length - 1] - a) - Math.abs(a - b)
    );
  }
  return base + Math.max(d, 2 * (mx - mn));
};

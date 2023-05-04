/**
 * @param {number[][]} fruits
 * @param {number} startPos
 * @param {number} k
 * @return {number}
 */
var maxTotalFruits = function (fruits, startPos, k) {
  const n = fruits.length;

  let left = search(fruits, startPos - k)
  let right = search(fruits, startPos + 1)

  let sum = fruits.reduce((sum, [_, amount], i) => {
      return i >= left && i < right
          ? sum + amount
          : sum
  }, 0)

  let res = sum

  // 开始滑动
  while (right < n && fruits[right][0] <= startPos + k) {
      let [rightPos, rightAmount] = fruits[right]
      sum += rightAmount

      while (
          (rightPos - startPos) + (rightPos - fruits[left][0]) > k
          && (startPos - fruits[left][0]) + (rightPos - fruits[left][0]) > k
      ) {
          sum -= fruits[left][1]
          left += 1
      }

      res = Math.max(res, sum)
      right += 1
  }
  return res;
};


/**
* 获取大于等于target的第一个元素的位置
*/
function search(arr, target) {
  // [l, r]
  let l = 0;
  let r = arr.length - 1
  while (l <= r) {
      const mid = (l + r) >> 1
      if (arr[mid][0] < target) {
          l = mid + 1
      } else {
          r = mid - 1
      }
  }
  return l
}
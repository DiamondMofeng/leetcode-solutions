// 由题干信息得
const MAX_ELEMENT = 20000;
const MAX_BIT_POS = 15; // 2^15 > 20000

/**
 * @param {number[]} arr
 */
var MajorityChecker = function (arr) {
  const n = arr.length;
  // this.arr = arr;

  // 记录数字出现位置，方便后面验证答案
  this.map = arr.reduce((map, val, idx) => {
    map[val] ??= [];
    map[val].push(idx);
    return map;
  }, {});

  // bit位前缀和
  // [bit位][前缀和]
  this.bitPrefixSum = new Array(MAX_BIT_POS)
    .fill()
    .map(() => new Array(n + 1).fill(0));

  // 初始化前缀和
  for (let b = 0; b < MAX_BIT_POS; b++) {
    for (let i = 1; i < n + 1; i++) {
      this.bitPrefixSum[b][i] =
        this.bitPrefixSum[b][i - 1] + ((arr[i - 1] >> b) & 1);
    }
  }
};

/**
 * @param {number} left
 * @param {number} right
 * @param {number} threshold
 * @return {number}
 */
MajorityChecker.prototype.query = function (left, right, threshold) {
  const { map, bitPrefixSum } = this;

  let res = 0;
  bitPrefixSum.forEach((prefixSum, b) => {
    if (prefixSum[right + 1] - prefixSum[left] >= threshold) {
      res |= 1 << b;
    }
  });

  // 验证答案
  if (!map[res]) {
    return -1;
  }
  let resCount = bisect(map[res], right + 1) - bisect(map[res], left);
  if (resCount < threshold) {
    return -1;
  }
  return res;
};

/**
 * Your MajorityChecker object will be instantiated and called as such:
 * var obj = new MajorityChecker(arr)
 * var param_1 = obj.query(left,right,threshold)
 */

/**
 * 找到大于等于target的第一个数的下标
 */
function bisect(arr, target) {
  //[l,r]
  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    const mid = (l + r) >> 1;
    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] > target) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return l;
}

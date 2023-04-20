/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var makeArrayIncreasing = function (arr, arr2) {
  const n = arr.length;
  arr2 = [...new Set(arr2)];
  arr2.sort((a, b) => a - b);

  // map[]
  const dp = new Array(n).fill().map(() => ({}));

  function dfs(i, max) {
    if (i < 0) {
      return 0;
    }

    if (dp[i][max] == null) {
      let res = Infinity;
      // 不换
      if (arr[i] < max) {
        res = Math.min(res, dfs(i - 1, arr[i]));
      }
      // 换
      let searchRes = binarySearch(arr2, max) - 1;
      if (searchRes >= 0) {
        res = Math.min(res, dfs(i - 1, arr2[searchRes]) + 1);
      }

      dp[i][max] = res;
    }
    return dp[i][max];
  }

  let res = dfs(n - 1, Infinity);

  if (res === Infinity) {
    return -1;
  }
  return res;
};

// 找到大于等于target的第一个元素
function binarySearch(arr, target) {
  // [l, r]
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

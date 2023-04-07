/**
 * @param {number[]} stones
 * @return {number[]}
 */
var numMovesStonesII = function (stones) {
  const n = stones.length;
  stones.sort((a, b) => a - b);

  const maxMoves = Math.max(
    stones[n - 2] - stones[0] - n + 2,
    stones[n - 1] - stones[1] - n + 2
  );

  const minMoves = (function getMin() {
    // 很挤
    if (stones[1] - stones[0] === 1 || stones[n - 1] - stones[n - 2] === 1) {
      return Math.min(2, maxMoves);
    }

    // 滑动窗口
    // 窗口长度为n，找到各窗口中最小空位数量即为答案
    let left = 0;
    let right = 1;

    let res = Infinity;
    for (; right < n; right++) {
      while (stones[right] - stones[left] > n - 1) {
        left += 1;
      }
      // 当前区间内有 right - left + 1 个石头
      // 则当前区间空位为 n-(right-left+1)
      res = Math.min(res, n - (right - left + 1));
    }

    return res;
  })();

  return [minMoves, maxMoves];
};

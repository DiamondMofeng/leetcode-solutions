/**
 * @param {number[]} maxHeights
 * @return {number}
 */
var maximumSumOfHeights = function (maxHeights) {
  const n = maxHeights.length

  // 计算当以i为山顶时，i左侧和i右侧的最大和
  let left = Array(n).fill(0)
  let right = Array(n).fill(0)
  {
    // [idx, height]
    const stack = [-1]

    for (let i = 0; i < n; i++) {
      const x = maxHeights[i]

      for (
        let lastI = stack.at(-1);
        lastI !== -1 && x <= maxHeights[lastI];
        stack.pop(), lastI = stack.at(-1)
      ) { }

      const lastI = stack.at(-1)
      left[i] = (i - lastI) * x + (lastI === -1 ? 0 : left[lastI])
      stack.push(i)
    }

  }

  {
    const stack = [n]

    for (let i = n - 1; i >= 0; i--) {
      const x = maxHeights[i];

      for (
        let lastI = stack.at(-1);
        lastI !== n && x <= maxHeights[lastI];
        stack.pop(), lastI = stack.at(-1)
      ) { }

      const lastI = stack.at(-1)
      right[i] = (lastI - i) * x + (lastI === n ? 0 : right[lastI])

      stack.push(i)
    }
  }

  let res = 0;
  for (let i = 0; i < n; i++) {
    res = Math.max(res, left[i] + right[i] - maxHeights[i])
  }

  return res;
};
function cachedFn(func) {
  const cache = {}
  return function (...args) {
      const key = args.join(',')
      if (!(key in cache)) {
          cache[key] = func(...args)
      }
      return cache[key]
  }
}

/**
* @param {number[]} arr
* @return {number}
*/
var mctFromLeafValues = function (arr) {
  const n = arr.length

  // 分治
  const dfs = cachedFn((begin, end) => {
      if (begin === end) {
          return {
              sum: 0,
              maxLeaf: arr[begin],
          }
      }

      let sum = Infinity;
      let maxLeaf = Math.max(...arr.slice(begin, end + 1))

      /**
       * {
       *   最大叶子值，
       *   非叶子节点之和
       * }
       */
      for (let i = begin; i < end; i++) {
          // console.log(begin, i, i + 1, end)
          let leftRes = dfs(begin, i)
          let rightRes = dfs(i + 1, end)
          let nodeVal = leftRes.maxLeaf * rightRes.maxLeaf
          sum = Math.min(
              sum,
              nodeVal + leftRes.sum + rightRes.sum
          )
      }
      return {
          sum,
          maxLeaf
      }
  })

  return dfs(0, n - 1).sum
};



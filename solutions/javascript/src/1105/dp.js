/**
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */
var minHeightShelves = function (books, shelfWidth) {
  // 选和不选
  const n = books.length

  const dfs = cacheFn((i) => {
      if (i < 0) {
          return 0
      }

      let maxHeight = 0;
      let curWidth = 0;
      let res = Infinity
      for (let j = i; j >= 0; j--) {
          curWidth += books[j][0]
          if (curWidth > shelfWidth) {
              break;
          }
          maxHeight = Math.max(maxHeight, books[j][1])
          res = Math.min(
              res,
              maxHeight + dfs(j - 1)
          )
      }

      return res;
  })

  return dfs(n - 1)
};

function cacheFn(fn) {
  const cache = {}
  return function (...args) {
      const key = args.join(',')
      if (!cache[key]) {
          cache[key] = fn(...args)
      }
      return cache[key]
  }
}
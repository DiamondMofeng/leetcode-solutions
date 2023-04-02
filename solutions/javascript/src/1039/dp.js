/**
 * @param {number[]} values
 * @return {number}
 */
var minScoreTriangulation = function (values) {
  // f(起点下标i,终点下标j)=f(i,中间下标x) + i*x*j + f(x,j)
  const cache = {}

  function search(begin, end) {
    const cacheIdent = `${begin},${end}`
    if (!cache[cacheIdent]) {

      if (end - begin <= 1) {
        cache[cacheIdent] = 0
      } else {
        
        let res = Infinity
        for (let i = begin + 1; i < end; i++) {
          let cur = search(begin, i)
            + values[begin] * values[i] * values[end]
            + search(i, end);
          // console.log(cur)
          res = Math.min(res, cur)
        }
        cache[cacheIdent] = res
      }

    }

    return cache[cacheIdent]
  }

  return search(0, values.length - 1)

};
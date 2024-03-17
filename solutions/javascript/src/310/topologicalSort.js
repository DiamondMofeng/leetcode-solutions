/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
  // 拓扑排序，从外向内剥离节点
  if (n === 1) { return [0] }

  const g = new Array(n).fill().map(() => [])
  const degrees = new Array(n).fill(0)

  edges.forEach(([f, t]) => {
      g[f].push(t)
      g[t].push(f)

      degrees[f] += 1
      degrees[t] += 1
  })

  let q = []
  let remainingNodes = n;
  degrees.forEach((d, i) => {
      if (d === 1) {
          q.push(i)
          degrees[i] -= 1
          remainingNodes -= 1
      }
  })

  // 开始拓扑排序
  while (remainingNodes > 0) {
      const newQ = []
      for (const n of q) {
          for (const next of g[n]) {
              degrees[next] -= 1
              if (degrees[next] === 1) {
                  newQ.push(next)
                  remainingNodes -= 1
              }
          }
      }
      q = newQ;
  }

  return q;
};
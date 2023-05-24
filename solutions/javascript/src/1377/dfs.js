/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} t
 * @param {number} target
 * @return {number}
 */
var frogPosition = function (n, edges, t, target) {
  // DFS
  const graph = edges.reduce((g, [from, to]) => {
    (g[from] ??= []).push(to);
    (g[to] ??= []).push(from);
    return g;
  }, {});

  const visited = new Set();

  function dfs(node, time, probability) {
    if (time > t) {
      return 0;
    }

    if (visited.has(node)) {
      return 0;
    }
    visited.add(node);

    let nexts = (graph[node] ?? []).filter((n) => !visited.has(n));

    if (node === target) {
      if (time < t && nexts.length > 0) {
        return 0;
      }
      return probability;
    }

    let res = 0;
    for (let next of nexts) {
      res = res || dfs(next, time + 1, probability * (1 / nexts.length));
    }
    return res;
  }

  return dfs(1, 0, 1);
};

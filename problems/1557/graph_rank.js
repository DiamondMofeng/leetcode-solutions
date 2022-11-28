/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
 var findSmallestSetOfVertices = function (n, edges) {
  let entryRanks = new Array(n).fill(0);
  for (let [from, to] of edges) {
      entryRanks[to] += 1;
  }
  return entryRanks.reduce((res, rank, idx) => {
      if (rank === 0) {
          res.push(idx);
      }
      return res;
  }, []);
};
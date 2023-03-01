/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function (grid) {
  const n = grid.length;
  const res = new Array(n - 2).fill(0).map(() => new Array(n - 2).fill(0));

  for (let r = 1; r < n - 1; r++) {
    for (let c = 1; c < n - 1; c++) {
      res[r - 1][c - 1] = Math.max(
        grid[r][c - 1],
        grid[r][c],
        grid[r][c + 1],
        grid[r + 1][c - 1],
        grid[r + 1][c],
        grid[r + 1][c + 1],
        grid[r - 1][c - 1],
        grid[r - 1][c],
        grid[r - 1][c + 1],
      )
    }
  }

  return res;
};

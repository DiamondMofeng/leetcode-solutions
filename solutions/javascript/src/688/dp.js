function createGrid(n) {
  return Array.from({ length: n }, () => new Array(n).fill(1))
}

const DIFF = [
  [-2, -1,],
  [-2, 1,],
  [2, -1,],
  [2, 1,],
  [1, 2,],
  [1, -2,],
  [-1, 2,],
  [-1, -2,],
]

/**
* @param {number} n
* @param {number} k
* @param {number} row
* @param {number} column
* @return {number}
*/
var knightProbability = function (n, k, row, column) {
  let grid = createGrid(n);
  for (let _i = 0; _i < k; _i++) {
    const newGrid = createGrid(n)
    for (let r = 0; r < n; r++) {
      for (let c = 0; c < n; c++) {
        let p = 0;
        for (const [dr, dc] of DIFF) {
          const nr = dr + r;
          const nc = dc + c
          if (nr < 0 || nc < 0 || nr >= n || nc >= n) {
            continue;
          }
          p += grid[nr][nc];
        }
        newGrid[r][c] = p / 8
      }
    }

    grid = newGrid
  }

  return grid[row][column]
};

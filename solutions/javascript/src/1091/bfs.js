const DIRS = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  if (grid[0][0] === 1) {
    return -1;
  }

  const n = grid.length;

  const posToKey = (r, c) => r * n + c;

  const visited = new Set();
  let queue = [0];
  let steps = 0;

  while (queue.length) {
    let newQueue = [];
    steps += 1;

    for (let key of queue) {
      if (visited.has(key)) {
        continue;
      }
      visited.add(key);

      let r = Math.trunc(key / n);
      let c = key % n;

      if (r === n - 1 && c === n - 1) {
        return steps;
      }

      for (let [rDiff, cDiff] of DIRS) {
        let newR = r + rDiff;
        let newC = c + cDiff;
        if (newR < 0 || newC < 0 || newR >= n || newC >= n) {
          continue;
        }
        if (grid[newR][newC] === 1) {
          continue;
        }
        newQueue.push(posToKey(newR, newC));
      }
    }

    queue = newQueue;
  }

  return -1;
};

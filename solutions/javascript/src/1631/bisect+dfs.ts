const DIRS = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
]

function canFindPathWithEffort(heights: number[][], effort: number): boolean {

  const rCnt = heights.length;
  const cCnt = heights[0].length;

  function keyToRC(key: number): [number, number] {
    return [(key / cCnt) | 0, key % cCnt];
  }

  function rcToKey(r: number, c: number): number {
    return r * cCnt + c;
  }

  const visited = new Set<number>();

  function dfs(r: number, c: number, lastHeight: number) {
    if (r < 0 || c < 0 || r >= rCnt || c >= cCnt) {
      return false;
    }

    if (Math.abs(heights[r][c] - lastHeight) > effort) {
      return false;
    }

    const key = rcToKey(r, c)
    if (visited.has(key)) {
      return false;
    }
    visited.add(key)

    if (r === rCnt - 1 && c === cCnt - 1) {
      return true;
    }

    return DIRS.some(
      ([diffR, diffC]) => dfs(r + diffR, c + diffC, heights[r][c])
    )

  }

  return dfs(0, 0, heights[0][0]);

}

const MAX_EFFORT = 1e6

function minimumEffortPath(heights: number[][]): number {
  // [l, r]
  let l = 0;
  let r = MAX_EFFORT;
  while (l <= r) {
    const mid = (l + r) >> 1
    if (canFindPathWithEffort(heights, mid)) {
      r = mid - 1
    } else {
      l = mid + 1
    }
  }

  return l
};
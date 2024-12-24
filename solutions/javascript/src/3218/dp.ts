function minimumCost(m: number, n: number, horizontalCut: number[], verticalCut: number[]): number {

  // [l, r), [t, b)
  const dfs = cached((l: number, r: number, t: number, b: number): number => {
    let min = Infinity

    // verticalCut
    for (let x = l + 1; x < r; x++) {
      min = Math.min(
        min,
        verticalCut[x - 1] +
        dfs(l, x, t, b) +
        dfs(x, r, t, b)
      )
    }

    // horizontalCut
    for (let y = t + 1; y < b; y++) {
      min = Math.min(
        min,
        horizontalCut[y - 1] +
        dfs(l, r, t, y) +
        dfs(l, r, y, b)
      )
    }

    return min === Infinity ? 0 : min;
  })

  return dfs(0, n, 0, m)
};

function cached<F extends (...args: any[]) => any>(fn: F): F {
  const cache = new Map();
  return ((...args) => {
    const key = args.join(',')
    if (!cache.get(key)) {
      cache.set(key, fn(...args));
    }
    return cache.get(key);
  }) as F
}

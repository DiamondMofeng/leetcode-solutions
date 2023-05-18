function numTilePossibilities(tiles: string): number {

  const n = tiles.length

  let set = new Set()

  function dfs(mask: number, cur: string) {
    if (mask === 1 << n) {
      set.add(cur)
      return
    }
    set.add(cur)
    for (let i = 0; i < n; i++) {
      if (!(mask & (1 << i))) {
        dfs(mask | (1 << i), cur + tiles[i])
      }
    }
  }

  dfs(0, '')

  return set.size - 1
};
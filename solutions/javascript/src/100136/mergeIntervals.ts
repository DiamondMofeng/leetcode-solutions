const MOD = 1e9 + 7

/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfGoodPartitions = function (nums: number[]) {
  let ranges: Record<number, [number, number]> = {}
  nums.forEach((x, i) => {
    if (!ranges[x]) {
      ranges[x] = [i, i]
    } else {
      ranges[x][1] = i
    }
  })

  const sortedRanges = Object.values(ranges).sort(([s1], [s2]) => s1 - s2)
  const mergedRanges: [number, number][] = [sortedRanges[0]]
  for (let i = 1; i < sortedRanges.length; i++) {
    const [s, e] = sortedRanges[i]

    if (s <= mergedRanges.at(-1)[1]) {
      mergedRanges.at(-1)[1] = Math.max(mergedRanges.at(-1)[1], e)
    } else {
      mergedRanges.push(sortedRanges[i])
    }
  }

  let res = 1;
  for (let _ = 1; _ < mergedRanges.length; _++) {
    res = (res * 2) % MOD
  }
  return res
};